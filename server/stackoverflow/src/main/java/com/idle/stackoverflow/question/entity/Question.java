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
    private Long questionId;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false, length = 5000)
    private String content;

    @Column(nullable = false)
    private LocalDateTime createdAt = LocalDateTime.now();

    @Column(nullable = false)
    private LocalDateTime modifiedAt = LocalDateTime.now();

    @Column
    private int questionVoteCnt;

    @Column
    private int questionViewCnt;

    @ManyToOne
    @JoinColumn(name = "USER_ID")
    private User user;

    @OneToMany(mappedBy = "question", cascade = CascadeType.REMOVE)
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

    public int getAnswerCnt() {
        return answers.size();
    }
}
