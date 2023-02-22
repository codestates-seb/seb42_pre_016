package com.idle.stackoverflow.question.dto;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
public class QuestionPatchDto {
    private long questionId;
    private String title;
    private String content;
    private LocalDateTime creatTime;
    private LocalDateTime updateTime;

    public void setQuestionId(long questionId) {
        this.questionId = questionId;
    }
}


