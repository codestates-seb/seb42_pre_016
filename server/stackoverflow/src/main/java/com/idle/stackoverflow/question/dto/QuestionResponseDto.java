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
    private int questionViewCnt;
    private int answerCnt;
    private LocalDateTime createdAt;
    private LocalDateTime modifiedAt;
    private Long userId;
    private int questionVoteCnt;
}
