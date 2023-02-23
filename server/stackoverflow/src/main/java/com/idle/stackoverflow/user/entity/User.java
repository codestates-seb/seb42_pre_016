package com.idle.stackoverflow.user.entity;

import com.idle.stackoverflow.answer.entity.Answer;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity(name = "USERS")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class User {
    @Id // 테이블 기본키 할당
    @GeneratedValue(strategy = GenerationType.IDENTITY) // 테이블 IDENTITY 기본키 생성
    private Long userId; // 유저 식별 번호

    @Column(nullable = false)
    private String displayName;    // 닉네임

    @Column(nullable = false)
    private String email;   // 이메일

    @Column
    private LocalDateTime createdAt = LocalDateTime.now();  // 생성 시간

    @Column
    private LocalDateTime modifiedAt = LocalDateTime.now(); // 수정 시간

    // FIXME 회원 상태 기능 삭제
    @Enumerated(value = EnumType.STRING)
    @Column
    private UserStatus userStatus = UserStatus.USER_ACTIVE; // 유저 상태

    // TODO QUESTION, ANSWER 매핑

    @OneToMany(mappedBy = "user")
    private List<Answer> answers = new ArrayList<>();

    public User(Long userId) {
        this.userId = userId;
    }

    public User(Long userId, String displayName, String email) {
        this.userId = userId;
        this.displayName = displayName;
        this.email = email;
    }

    public void addAnswer(Answer answer) {
        answers.add(answer);
    }

    // FIXME 회원 상태 기능 삭제
    public enum UserStatus {  // 유저 상태
        USER_ACTIVE("활동 상태"),
        USER_SLEEP("휴먼 상태"),
        USER_QUIT("회원 탈퇴");

        @Getter
        private String status;

        UserStatus(String status) {
            this.status = status;
        }
    }
}
