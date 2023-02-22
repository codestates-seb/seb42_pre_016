package com.idle.stackoverflow.question.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Question {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long questionId;    // 질문 고유 번호

    @Column
    private String title;   // 제목

    @Column
    private String content; // 내용

    @Column
    private LocalDateTime createdAt = LocalDateTime.now();  // 생성 시간

    @Column
    private LocalDateTime modifiedAt = LocalDateTime.now(); // 수정 시간

    // TODO 질문 상태 (질문 등록, 질문 삭제)
}
