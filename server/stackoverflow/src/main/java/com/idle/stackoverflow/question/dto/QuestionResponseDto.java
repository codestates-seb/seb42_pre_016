package com.idle.stackoverflow.question.dto;

import lombok.*;

import java.time.LocalDateTime;

@Getter
@AllArgsConstructor
@Builder
public class QuestionResponseDto {
    private long questionId;
    private String title;
    private String content;
    private LocalDateTime createdAt;    // 생성 시간
    private LocalDateTime modifiedAt;   // 수정 시간
    private Long userId; // 유저 식별 번호
    private int voteCnt;
}
