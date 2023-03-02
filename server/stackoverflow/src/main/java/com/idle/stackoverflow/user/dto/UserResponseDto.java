package com.idle.stackoverflow.user.dto;

import com.idle.stackoverflow.user.entity.User;
import lombok.*;

import java.time.LocalDateTime;

@Getter
@AllArgsConstructor
@Builder
public class UserResponseDto {
    private Long userId;
    private String displayName;
    private String email;
    private LocalDateTime createdAt;

    private LocalDateTime modifiedAt;
    private User.UserStatus userStatus;
}
