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

import javax.validation.constraints.Positive;
import java.util.List;

@RestController
@RequestMapping("/stackoverflow.com/users")
public class UserController {
    private final UserService userService;
    private final UserMapper userMapper;

    public UserController(UserService userService, UserMapper userMapper) {
        this.userService = userService;
        this.userMapper = userMapper;
    }

    @PostMapping("/signup")
    public ResponseEntity postUser(@RequestBody UserPostDto userPostDto) {
        User user = userMapper.userPostDtoToUser(userPostDto);
        User response = userService.createUser(user);
        return new ResponseEntity<>(userMapper.userToUserResponseDto(response), HttpStatus.CREATED);
    }

    @PatchMapping("/edit/{user-id}")
    public ResponseEntity patchUser(@PathVariable("user-id") Long userId, @RequestBody UserPatchDto userPatchDto) {
        userPatchDto.setUserId(userId);
        User response = userService.updateUser(userMapper.userPatchDtotoUser(userPatchDto));
        return new ResponseEntity<>(userMapper.userToUserResponseDto(response), HttpStatus.OK);
    }

    @GetMapping("/{user-id}")
    public ResponseEntity getUser(@PathVariable("user-id") Long userId) {
        User user = userService.findUser(userId);
        return new ResponseEntity<>(new SingleResponseDto<>(userMapper.userToUserResponseDto(user)), HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity getUsers(@Positive @RequestParam(required = false, defaultValue = "1") int page,
                                   @Positive @RequestParam(required = false, defaultValue = "36") int size) {
        Page<User> pageUsers = userService.findUsers(page -1, size);
        List<User> users = pageUsers.getContent();
        return new ResponseEntity<>(new MultiResponseDto<>(userMapper.usersToUserResponseDtos(users), pageUsers), HttpStatus.OK);
    }

    @DeleteMapping("/delete/{user-id}")
    public ResponseEntity deleteUser(@PathVariable("user-id") Long userId) {
        userService.deleteUser(userId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
