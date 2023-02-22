package com.idle.stackoverflow.user.service;

import com.idle.stackoverflow.user.entity.User;
import com.idle.stackoverflow.exception.BusinessLogicException;
import com.idle.stackoverflow.exception.ExceptionCode;
import com.idle.stackoverflow.user.repository.UserRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Optional;

@Service
public class UserService {
    // DI
    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User createUser(User user) {
        verifyExistsEmail(user.getEmail()); // 이메일 검증
        return userRepository.save(user);   // 유저 등록
    }

    public User updateUser(User user) {
        User findUser = findVerifiedUser(user.getUserId()); // 유저 검증
        Optional.ofNullable(user.getDisplayName()).ifPresent(displayName -> findUser.setDisplayName(displayName));  // 닉네임 업데이트
        Optional.ofNullable(user.getEmail()).ifPresent(email -> findUser.setEmail(email));  // 이메일 업데이트
        Optional.ofNullable(user.getUserStatus()).ifPresent(userStatus -> findUser.setUserStatus(userStatus));  // 상태 업데이트
        findUser.setModifiedAt(LocalDateTime.now());    // 수정 시간 업데이트
        return userRepository.save(findUser);   // 유저 등록
    }

    public User findUser(long userId) {
//        return findVerifiedUser(userId);    // 유저 검증
        User findUser = userRepository.findById(userId).orElseThrow(() -> new BusinessLogicException(ExceptionCode.USER_NOT_FOUND));
        return findUser;
    }

    public Page<User> findUsers(int page, int size) {
        return userRepository.findAll(PageRequest.of(page, size, Sort.by("createdAt").descending()));
    }

    // FIXME 유저 정보 삭제(회원탈퇴) 기능 삭제
    public void deleteUser(long userId) {
        User findUser = findVerifiedUser(userId);   // 유저 검증
        userRepository.delete(findUser);    // 유저 삭제
    }

    // 유저 검증
    public User findVerifiedUser(long userId) {
        Optional<User> optionalUser = userRepository.findById(userId);
        User findUser = optionalUser.orElseThrow(() -> new BusinessLogicException(ExceptionCode.USER_NOT_FOUND));
        return findUser;
    }

    // 이메일 검증
    private void verifyExistsEmail(String email) {
        Optional<User> user = userRepository.findByEmail(email);
        if (user.isPresent())
            throw new BusinessLogicException(ExceptionCode.USER_EXISTS);
    }
}
