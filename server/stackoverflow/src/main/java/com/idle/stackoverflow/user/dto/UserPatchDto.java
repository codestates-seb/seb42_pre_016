package com.idle.stackoverflow.user.dto;

import com.idle.stackoverflow.user.entity.User;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class UserPatchDto {
    private Long userId;
    private String displayName;
    private String email;
    private User.UserStatus userStatus;
}
