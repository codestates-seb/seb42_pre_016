package com.idle.stackoverflow.answer.entity;

import com.idle.stackoverflow.question.entity.Question;
import com.idle.stackoverflow.user.entity.User;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor // 순서 유의
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

    @Column
    private int answerVoteCnt; // 기본으론 0이 들어간다

    @ManyToOne
    @JoinColumn(name = "USER_ID")
    private User user; // 회원과 매핑 FK (one)

    // 유어 클래스 있었으나 안씀
//    public void addUser(User user) {
//        this.user = user;
//    }

    @ManyToOne
    @JoinColumn(name = "QUESTION_ID")
    private Question question; // 질문과 매핑 FK (one)

    // 유어 클래스 있었으나 안씀
//    public void addQuestion(Question question) {
//        this.question = question;
//    }

    // 양방향 연관 관계를 안전하게 매핑하기 위한 코드
    public void setUser(User user) {
        this.user = user;
        if(!this.user.getAnswers().contains(this)) {
            this.user.getAnswers().add(this);
        }
    }
    public void setQuestion(Question question) {
        this.question = question;
        if(!this.question.getAnswers().contains(this)) {
            this.question.getAnswers().add(this);
        }
    }
}
