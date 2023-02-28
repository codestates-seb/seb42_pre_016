package com.idle.stackoverflow.question.dto;

import lombok.Getter;

@Getter
public class QuestionPostDto {
    // private Long questionId; // DB가 넣어 줌
    private String title;
    private String content;
    private Long userId; // 유저 식별 번호
}


