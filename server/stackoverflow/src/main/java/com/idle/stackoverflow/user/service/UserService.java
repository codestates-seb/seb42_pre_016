package com.idle.stackoverflow.user.service;

import com.idle.stackoverflow.auth.utils.CustomAuthorityUtils;
import com.idle.stackoverflow.helper.event.UserRegistrationApplicationEvent;
import com.idle.stackoverflow.user.entity.User;
import com.idle.stackoverflow.exception.BusinessLogicException;
import com.idle.stackoverflow.exception.ExceptionCode;
import com.idle.stackoverflow.user.repository.UserRepository;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Transactional     // -----------------------  JWT.
@Service
public class UserService {
    // DI
    private final UserRepository userRepository;
    private final ApplicationEventPublisher publisher;     // ------- JWT 진행 중 추가
    private final PasswordEncoder passwordEncoder;         // ------- JWT 진행 중 추가. PasswordEncoder와 CustomAuthorityUtils 클래스를 DI 받도록 필드를 추가
    private final CustomAuthorityUtils authorityUtils;     // ------- JWT 진행 중 추가. PasswordEncoder와 CustomAuthorityUtils 클래스를 DI 받도록 필드를 추가

    // public UserService(UserRepository userRepository) {
    //        this.userRepository = userRepository;            -------- JWT 진행 중. 주석 처리 함.
    //    }



    public UserService(UserRepository userRepository, ApplicationEventPublisher publisher, PasswordEncoder passwordEncoder, CustomAuthorityUtils authorityUtils) {
        this.userRepository = userRepository;
        this.publisher = publisher;
        this.passwordEncoder = passwordEncoder;
        this.authorityUtils = authorityUtils;
    }

    public User createUser(User user) {
        verifyExistsEmail(user.getEmail()); // 이메일 검증

        String encryptedPassword = passwordEncoder.encode(user.getPassword());  // -- JWT 진행 중 추가. 패스워드를 단방향 암호화
        user.setPassword(encryptedPassword);  // -- JWT 진행 중 추가.

        List<String> roles = authorityUtils.createRoles(user.getEmail());  // -- JWT 진행 중 추가. DB에 User Role 저장,  등록하는 사용자의 권한 정보 생성
        user.setRoles(roles);       // -- JWT 진행 중 추가.

        User savedUser = userRepository.save(user);       // -- JWT 진행 중 추가.

        publisher.publishEvent(new UserRegistrationApplicationEvent(savedUser));    // -- JWT 진행 중 추가.
        return savedUser;  // -- JWT 진행 중 추가.


       // return userRepository.save(user);   // 유저 등록. -----------------------------  JWT 진행 중 주석 처리
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
        // 활동 상태의 신규 유저 정렬
        return userRepository.findAllByUserStatus(User.UserStatus.USER_ACTIVE, PageRequest.of(page, size, Sort.by("createdAt").descending()));
//        return userRepository.findAll(PageRequest.of(page, size, Sort.by("createdAt").descending()));
    }

    public void deleteUser(long userId) {
        User findUser = findVerifiedUser(userId);   // 유저 검증
        userRepository.delete(findUser);    // 유저 삭제
    }

    // 유저 검증
    public User findVerifiedUser(long userId) {
        Optional<User> optionalUser = userRepository.findById(userId);
        User findUser = optionalUser.orElseThrow(() -> new BusinessLogicException(ExceptionCode.USER_NOT_FOUND));
        // TODO 휴면 상태, 회원 탈퇴
        return findUser;
    }

    // 이메일 검증
    public void verifyExistsEmail(String email) {
        Optional<User> user = userRepository.findByEmail(email);
        if (user.isPresent())
            throw new BusinessLogicException(ExceptionCode.USER_EXISTS);
    }
}
