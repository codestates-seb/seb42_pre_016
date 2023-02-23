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
    private Long userId; // 유저 식별 번호

    private String displayName;    // 닉네임

    private String email;   // 이메일

    private User.UserStatus userStatus;
}
