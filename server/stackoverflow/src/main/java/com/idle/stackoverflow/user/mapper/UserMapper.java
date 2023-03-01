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

    default UserResponseDto userToUserResponseDto(User user) {
        UserResponseDto responseDto = new UserResponseDto(
                user.getUserId(),
                user.getDisplayName(),
                user.getEmail(),
                user.getCreatedAt(),
                user.getModifiedAt(),
                user.getUserStatus()
        );
        return responseDto;
    }

    List<UserResponseDto> usersToUserResponseDtos(List<User> users);    // 전체 유저 조회
}
