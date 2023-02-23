package com.idle.stackoverflow.user.controller;

import com.idle.stackoverflow.response.MultiResponseDto;
import com.idle.stackoverflow.response.SingleResponseDto;
import com.idle.stackoverflow.user.dto.UserPatchDto;
import com.idle.stackoverflow.user.dto.UserPostDto;
import com.idle.stackoverflow.user.dto.UserResponseDto;
import com.idle.stackoverflow.user.entity.User;
import com.idle.stackoverflow.user.mapper.UserMapper;
import com.idle.stackoverflow.user.service.UserService;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import javax.validation.constraints.Positive;
import java.net.URI;
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
//        User response = userService.createUser(user);   // 유저 등록
//        return new ResponseEntity<>(userMapper.userToUserResponseDto(response), HttpStatus.CREATED);
        userService.createUser(user);   // 유저 등록
        URI location = UriComponentsBuilder.newInstance()   // Location : 응답 헤더에 페이지를 리디렉션 할 URL
                .path("/stackoverflow.com/users" + "/signup" + "/{user-id}").buildAndExpand(user.getUserId()).toUri();
        return ResponseEntity.created(location).build();
    }

    // 유저 정보 수정
    @PatchMapping("/edit/{user-id}")
    public ResponseEntity patchUser(@PathVariable("user-id") Long userId, @RequestBody UserPatchDto userPatchDto) {
        userPatchDto.setUserId(userId);
        User response = userService.updateUser(userMapper.userPatchDtotoUser(userPatchDto));
        return new ResponseEntity<>(userMapper.userToUserResponseDto(response), HttpStatus.OK);
    }

    // 특정 유저 조회(마이페이지)
    @GetMapping("/{user-id}")    // FIXME "/{user-id}/{display-name}"
    public ResponseEntity getUser(@PathVariable("user-id") Long userId) {
        User user = userService.findUser(userId);
//        return new ResponseEntity<>(userMapper.userToUserResponseDto(user), HttpStatus.OK);
        return new ResponseEntity<>(new SingleResponseDto<>(userMapper.userToUserResponseDto(user)), HttpStatus.OK);
    }

    // 전체 유저 조회(페이지네이션)
    @GetMapping
    public ResponseEntity getUsers(@Positive @RequestParam(required = false, defaultValue = "1") int page,
                                   @Positive @RequestParam(required = false, defaultValue = "36") int size) {
        Page<User> pageUsers = userService.findUsers(page -1, size);
        List<User> users = pageUsers.getContent();
        return new ResponseEntity<>(new MultiResponseDto<>(userMapper.usersToUserResponseDtos(users), pageUsers), HttpStatus.OK);
    }

    @DeleteMapping("/delete/{user-id}")
    public ResponseEntity deleteUser(@PathVariable("user-id") Long userId) {
        userService.deleteUser(userId); // 유저 정보 삭제
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
