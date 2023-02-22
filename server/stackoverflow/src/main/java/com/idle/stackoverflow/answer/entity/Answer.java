package com.idle.stackoverflow.answer.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Answer {
    // content, createdAt, updateAt=createdAt, voteCnt=0 초기화 필요
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long answerId;

    @Column(nullable = false) // length기본값 255, length = 10000+a 설정 해줘야 하나?
    private String content;

    @Column(nullable = false)
    private LocalDateTime createdAt = LocalDateTime.now();

    @Column(nullable = false)
    private LocalDateTime modifiedAt = LocalDateTime.now();

    @Column(nullable = false)
    private Long voteCnt = 0L; // vote와 매핑, answerVoteId를 해야하나?...1대1인가?


    private Long userId; // 회원과 매핑 FK (one)
    private Long questionId; // 질문과 매핑 FK (one)
}
