package com.idle.stackoverflow.user.entity;

import com.idle.stackoverflow.answer.entity.Answer;
import com.idle.stackoverflow.audit.Auditable;
import com.idle.stackoverflow.question.entity.Question;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity(name = "USERS")
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class User extends Auditable {            // ------------------- JWT. Auditable 클래스 상속
    @Id // 테이블 기본키 할당
    @GeneratedValue(strategy = GenerationType.IDENTITY) // 테이블 IDENTITY 기본키 생성
    @Column(name = "USER_ID")
    private Long userId; // 유저 식별 번호


    @Column(nullable = false)
    private String displayName;    // 닉네임

    @Column(nullable = false)     //  JWT. updatable, unique 추가
    private String email;   // 이메일


    @Column(length = 100, nullable = false)            // ------------------------------ JWT 패스워드 추가. 컬럼 길이 100 설정
    private String password;

    @Column(nullable = false)
    private LocalDateTime createdAt = LocalDateTime.now();  // 생성 시간

    @Column(nullable = false)
    private LocalDateTime modifiedAt = LocalDateTime.now(); // 수정 시간

    @Enumerated(value = EnumType.STRING)
    @Column(nullable = false)
    private UserStatus userStatus = UserStatus.USER_ACTIVE; // 유저 상태
    @OneToMany(mappedBy = "user")   // mappedBy : 외래키
    private List<Question> questions = new ArrayList<>();

    @OneToMany(mappedBy = "user")
    private List<Answer> answers = new ArrayList<>();
    @ElementCollection(fetch = FetchType.EAGER)
    private List<String> roles = new ArrayList<>();         ///   -------- JWT. 사용자 권한을 등록하기 위한 권한 테이블 생성.


    // 연관관계 매핑 메서드
    public void addQuestion(Question question) {
        questions.add(question);

        if (question.getUser() != this) {
            question.setUser(this);
        }
    }
    public void addAnswer(Answer answer) {
        answers.add(answer);

        if (answer.getUser() != this) {
            answer.setUser(this);
        }
    }

    public enum UserStatus {  // 유저 상태
        USER_ACTIVE("활동 상태"),
        USER_QUIT("회원 탈퇴");

        @Getter
        private String status;

        UserStatus(String status) {
            this.status = status;
        }
    }
}
