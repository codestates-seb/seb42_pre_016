package com.idle.stackoverflow.question.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.time.LocalDateTime;

@Getter
@AllArgsConstructor
public class QuestionResponseDto {
    private long questionId;
    private String title;
    private String content;
    private LocalDateTime createdTime;
    private LocalDateTime updatedTime;
}
