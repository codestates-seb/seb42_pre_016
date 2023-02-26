package com.idle.stackoverflow.answer.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

import java.time.LocalDateTime;

public class AnswerDto {

    @Getter
    @AllArgsConstructor
    public static class Post {
        // private long answerId; // DB에서 등록
        private String content;
        // 없애기
        private long userId;
        private long questionId;

    }

    @Getter
    @AllArgsConstructor
    public static class Patch {
        private long answerId;
        private String content;

        public void setAnswerId(long answerId) {
            this.answerId = answerId;
        }
    }

    @Getter
    @AllArgsConstructor
    @Builder
    public static class Response {
        private long answerId;
        private String content;
        private LocalDateTime createdAt;
        private LocalDateTime modifiedAt;
        private long voteCnt;
        private long userId;
        private long questionId;
    }
}
