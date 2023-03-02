package com.idle.stackoverflow.question.dto;

import lombok.Getter;

@Getter
public class QuestionPatchDto {
    private long questionId;
    private String title;
    private String content;

    public void setQuestionId(long questionId) {
        this.questionId = questionId;
    }
}


