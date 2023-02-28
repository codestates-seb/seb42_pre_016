package com.idle.stackoverflow.user.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotBlank;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class UserPostDto {
    private String displayName;    // 닉네임

    @NotBlank                               // jwt. 애너테이션 추가
    private String email;   // 이메일

    @NotBlank
    private String password;    // ---------------------  JWT 패스워드 추가
}
