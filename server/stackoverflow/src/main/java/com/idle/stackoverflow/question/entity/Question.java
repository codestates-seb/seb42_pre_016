package com.idle.stackoverflow.question.entity;

import com.idle.stackoverflow.answer.entity.Answer;
import com.idle.stackoverflow.user.entity.User;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Question {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long questionId;    // 질문 고유 번호

    @Column(nullable = false)
    private String title;   // 제목

    @Column(nullable = false)
    private String content; // 내용

    @Column(nullable = false)
    private LocalDateTime createdAt = LocalDateTime.now();  // 생성 시간

    @Column(nullable = false)
    private LocalDateTime modifiedAt = LocalDateTime.now(); // 수정 시간

    @ManyToOne
    @JoinColumn(name = "USER_ID")
    private User user;

    @OneToMany(mappedBy = "question", cascade = CascadeType.PERSIST)
    private List<Answer> answers = new ArrayList<>();

    // 연관관계 매핑 메서드
    public void setUser(User user) {
        this.user = user;

        if (!user.getQuestions().contains(this)) {
            user.getQuestions().add(this);
        }
    }

    public void setAnswer(Answer answer) {
        answers.add(answer);

        if (answer.getQuestion() != this) {
            answer.setQuestion(this);
        }
    }

    // TODO 질문 상태 (질문 등록, 질문 삭제)
}
