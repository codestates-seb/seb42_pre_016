package com.idle.stackoverflow.user.dto;

import com.idle.stackoverflow.user.entity.User;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class UserResponseDto {
    private Long userId; // 유저 식별 번호

    private String displayName;    // 닉네임

    private String email;   // 이메일

    private String createdAt;   // 생성 시간

    private String modifiedAt;  // 수정 시간

    // FIXME 회원 상태 기능 삭제
    private User.UserStatus userStatus;
}
