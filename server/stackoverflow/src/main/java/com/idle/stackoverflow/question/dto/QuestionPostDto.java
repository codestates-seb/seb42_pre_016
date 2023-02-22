package com.idle.stackoverflow.question.dto;


import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter // @Setter
public class QuestionPostDto {
    private Long questionId;
    private String title;
    private String content;
    private LocalDateTime createdTime;
    private LocalDateTime updatedTime;



}


