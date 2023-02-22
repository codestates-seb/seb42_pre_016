package com.idle.stackoverflow.user.mapper;

import com.idle.stackoverflow.user.dto.UserPatchDto;
import com.idle.stackoverflow.user.dto.UserPostDto;
import com.idle.stackoverflow.user.dto.UserResponseDto;
import com.idle.stackoverflow.user.entity.User;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface UserMapper {
    User userPostDtoToUser(UserPostDto userPostDto);
    User userPatchDtotoUser(UserPatchDto userPatchDto);
    UserResponseDto userToUserResponseDto(User user);
    List<UserResponseDto> usersToUserResponseDtos(List<User> users);
}
