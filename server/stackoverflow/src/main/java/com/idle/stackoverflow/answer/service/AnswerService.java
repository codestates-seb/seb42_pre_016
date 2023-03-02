package com.idle.stackoverflow.answer.service;

import com.idle.stackoverflow.answer.entity.Answer;
import com.idle.stackoverflow.answer.repository.AnswerRepository;
import com.idle.stackoverflow.exception.BusinessLogicException;
import com.idle.stackoverflow.exception.ExceptionCode;
import com.idle.stackoverflow.question.service.QuestionService;
import com.idle.stackoverflow.user.service.UserService;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Optional;

@Service
public class AnswerService {
    private final UserService userService;
    private final QuestionService questionService;
    private  final AnswerRepository answerRepository;

    public AnswerService(UserService userService,
                         QuestionService questionService,
                         AnswerRepository answerRepository) {
        this.userService = userService;
        this.questionService = questionService;
        this.answerRepository = answerRepository;
    }

    public Answer createAnswer(Answer answer) {
        return answerRepository.save(answer);
    }

    public Answer updateAnswer(Answer answer) {
        Answer findAnswer = findVerifiedAnswer(answer.getAnswerId());

        Optional.ofNullable(answer.getContent()).ifPresent(content -> findAnswer.setContent(content));
        findAnswer.setModifiedAt(LocalDateTime.now());

        return answerRepository.save(findAnswer);
    }

    public Answer answerVoteUp(long answerId) {
        Answer findAnswer = findVerifiedAnswer(answerId);
        findAnswer.setAnswerVoteCnt(findAnswer.getAnswerVoteCnt() +1);
        return answerRepository.save(findAnswer);
    }

    public Answer answerVoteDown(long answerId) {
        Answer findAnswer = findVerifiedAnswer(answerId);
        findAnswer.setAnswerVoteCnt(findAnswer.getAnswerVoteCnt() -1);
        return answerRepository.save(findAnswer);
    }

    public void deleteAnswer(long answerId) {
        Answer findAnswer = findVerifiedAnswer(answerId);
        answerRepository.delete(findAnswer);
    }

    public Answer findVerifiedAnswer(Long answerId) {
        Optional<Answer> optionalAnswer = answerRepository.findById(answerId);
        Answer findAnswer = optionalAnswer.orElseThrow(()-> new BusinessLogicException(ExceptionCode.ANSWER_NOT_FOUND));
        return findAnswer;
    }
}
