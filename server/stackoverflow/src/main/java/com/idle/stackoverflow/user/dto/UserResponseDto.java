package com.idle.stackoverflow.user.dto;

import com.idle.stackoverflow.user.entity.User;
import lombok.*;

import java.time.LocalDateTime;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class UserResponseDto {
    private Long userId; // 유저 식별 번호

    private String displayName;    // 닉네임

    private String email;   // 이메일

    private LocalDateTime createdAt;   // 생성 시간

    private LocalDateTime modifiedAt;  // 수정 시간

    // FIXME 회원 상태 기능 삭제
    private User.UserStatus userStatus;
}
