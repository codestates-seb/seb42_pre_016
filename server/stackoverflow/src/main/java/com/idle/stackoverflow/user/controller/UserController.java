package com.idle.stackoverflow.user.controller;

import com.idle.stackoverflow.response.MultiResponseDto;
import com.idle.stackoverflow.response.SingleResponseDto;
import com.idle.stackoverflow.user.dto.UserPatchDto;
import com.idle.stackoverflow.user.dto.UserPostDto;
import com.idle.stackoverflow.user.entity.User;
import com.idle.stackoverflow.user.mapper.UserMapper;
import com.idle.stackoverflow.user.service.UserService;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/stackoverflow.com/users")
public class UserController {
    // DI
    private final UserService userService;
    private final UserMapper userMapper;

    public UserController(UserService userService, UserMapper userMapper) {
        this.userService = userService;
        this.userMapper = userMapper;
    }

    // 유저 정보 등록(회원가입)
    @PostMapping("/signup")
    public ResponseEntity postUser(@RequestBody UserPostDto userPostDto) {
        User user = userMapper.userPostDtoToUser(userPostDto);
        User response = userService.createUser(user);   // 유저 정보 등록
        return new ResponseEntity<>(userMapper.userToUserResponseDto(response), HttpStatus.CREATED);
    }

    // 유저 정보 수정
    @PatchMapping("/{user-id}")
    public ResponseEntity patchUser(@PathVariable("user-id") Long userId, @RequestBody UserPatchDto userPatchDto) {
        userPatchDto.setUserId(userId);
        User response = userService.updateUser(userMapper.userPatchDtotoUser(userPatchDto));
        return new ResponseEntity<>(userMapper.userToUserResponseDto(response), HttpStatus.OK);
    }

    // 특정 유저 조회
    @GetMapping("/{user-id}")
    public ResponseEntity getUser(@PathVariable("user-id") Long userId) {
//        User response = userService.findUser(userId);
//        return new ResponseEntity<>(userMapper.userToUserResponseDto(response), HttpStatus.OK);
        User user = userService.findUser(userId);
        return new ResponseEntity<>(new SingleResponseDto<>(userMapper.userToUserResponseDto(user)), HttpStatus.OK);
    }

    // TODO 전체 유저 조회(페이지네이션)
    @GetMapping
    public ResponseEntity getUsers(@RequestParam int page, @RequestParam int size) {
        Page<User> pageUsers = userService.findUsers(page -1, size);
        List<User> users = pageUsers.getContent();
        return new ResponseEntity<>(new MultiResponseDto<>(userMapper.usersToUserResponseDtos(users), pageUsers), HttpStatus.OK);
    }

    // FIXME 유저 정보 삭제(회원탈퇴) 기능 삭제
    @DeleteMapping("/{user-id}")
    public ResponseEntity deleteUser(@PathVariable("user-id") Long userId) {
        userService.deleteUser(userId); // 유저 정보 삭제
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
