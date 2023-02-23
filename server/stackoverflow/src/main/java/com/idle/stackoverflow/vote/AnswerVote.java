package com.idle.stackoverflow.vote;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class AnswerVote {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long answerVoteId;
    private Long answerVoteUp;
    private Long answerVoteDown;
    private Long answerId; // 답변과 매핑 FK (one)
}
