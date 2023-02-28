package com.idle.stackoverflow.answer.service;

import com.idle.stackoverflow.answer.entity.Answer;
import com.idle.stackoverflow.answer.repository.AnswerRepository;
import com.idle.stackoverflow.exception.BusinessLogicException;
import com.idle.stackoverflow.exception.ExceptionCode;
import com.idle.stackoverflow.question.service.QuestionService;
import com.idle.stackoverflow.user.service.UserService;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
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
        // 존재하는 answer인지 검증
        Answer findAnswer = findVerifiedAnswer(answer.getAnswerId());

        Optional.ofNullable(answer.getContent())
                .ifPresent(content -> findAnswer.setContent(content));

        // voteCnt는 빼야 할 듯 투표 업데이트 된다고 수정시간 업데이트 될 순 없으니...
//        Optional.ofNullable(answer.getVoteCnt()).ifPresent(voteCnt -> findAnswer.setVoteCnt(voteCnt));

        findAnswer.setModifiedAt(LocalDateTime.now()); // 수정 시간 업데이트

        return answerRepository.save(findAnswer);
    }

    public Answer answerVoteUp(long answerId) {
        // 존재하는 answer인지 검증
        Answer findAnswer = findVerifiedAnswer(answerId);
        findAnswer.setAnswerVoteCnt(findAnswer.getAnswerVoteCnt()+1);
        return answerRepository.save(findAnswer);
    }

    public Answer answerVoteDown(long answerId) {
        // 존재하는 answer인지 검증
        Answer findAnswer = findVerifiedAnswer(answerId);
        findAnswer.setAnswerVoteCnt(findAnswer.getAnswerVoteCnt()-1);
        return answerRepository.save(findAnswer);
    }


    /*
    * questionId에 해당하는 answers목록 조회 QuestionController에 적용함
    public List<Answer> findAnswers() { // 해당 질문 Id에 해당하는 답변리스트 반환

        return answerRepository.findAll();
    }*/

    public void deleteAnswer(long answerId) {
        Answer findAnswer = findVerifiedAnswer(answerId);
        answerRepository.delete(findAnswer);
    }

    // 이미 존재하는 answer인지 검증
    public Answer findVerifiedAnswer(Long answerId) {
        Optional<Answer> optionalAnswer =
                answerRepository.findById(answerId);
        Answer findAnswer =
                optionalAnswer.orElseThrow(()->
                        new BusinessLogicException(ExceptionCode.ANSWER_NOT_FOUND));
        return findAnswer;
    }

}
