package com.idle.stackoverflow.question.entity;

import com.idle.stackoverflow.answer.entity.Answer;
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

    @Column
    private String title;   // 제목

    @Column
    private String content; // 내용

    @Column
    private LocalDateTime createdAt = LocalDateTime.now();  // 생성 시간

    @Column
    private LocalDateTime modifiedAt = LocalDateTime.now(); // 수정 시간

    @OneToMany(mappedBy = "question")
    private List<Answer> answers = new ArrayList<>();

    // 유어 클래스 있었으나 안씀
//    public void addAnswer(Answer answer) {
//        answers.add(answer);
//    }

    // 양방향 연관 관계를 안전하게 매핑하기 위한 코드
    public void setAnswer(Answer answer) {
            answers.add(answer);
            if(answer.getQuestion() != this) {
                answer.setQuestion(this);
            }
        }

    // TODO 질문 상태 (질문 등록, 질문 삭제)
}
