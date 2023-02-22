package com.idle.stackoverflow.question.dto;

import com.idle.stackoverflow.question.entity.Question;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.PreUpdate;
import java.time.LocalDateTime;


@Getter @Setter
public class QuestionDto {
    private Long questionId;
    private String title;
    private String content;
    private LocalDateTime creatTime;
    private LocalDateTime updateTime;

    public QuestionDto(Long questionId, String title, String content, LocalDateTime creatTime, LocalDateTime updateTime) {
        this.questionId = questionId;
        this.title = title;
        this.content = content;
        this.creatTime = creatTime;
        this.updateTime = updateTime;
    }


    @Getter @Setter
    public static class Response {
        private Long questionId;
        private String title;
        private String content;
        private String createTime;
        private String updateTime;

        public Response(Long questionId, String title, String content, String createTime, String updateTime) {
            this.questionId = questionId;
            this.title = title;
            this.content = content;
            this.createTime = createTime;
            this.updateTime = updateTime;
        }
    }


    @Getter
    @AllArgsConstructor
    public static class Post {

        private Long questionId;
        private String title;
        private String content;
        private String creatTime;
        private String updateTime;
    }

    @Getter
    @AllArgsConstructor
    public static class Patch {
        private Long questionId;
        private String title;
        private String content;
        private String creatTime;
        private String updateTime;

    }

}




