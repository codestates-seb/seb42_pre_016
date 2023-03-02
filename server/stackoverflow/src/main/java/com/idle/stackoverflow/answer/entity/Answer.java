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
@NoArgsConstructor
@Entity
public class Answer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long answerId;

    @Column(nullable = false, length = 5000)
    private String content;

    @Column(nullable = false)
    private LocalDateTime createdAt = LocalDateTime.now();

    @Column(nullable = false)
    private LocalDateTime modifiedAt = LocalDateTime.now();

    @Column
    private int answerVoteCnt;

    @ManyToOne
    @JoinColumn(name = "USER_ID")
    private User user;

    @ManyToOne
    @JoinColumn(name = "QUESTION_ID")
    private Question question;

    // 연관관계 매핑 메서드
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
