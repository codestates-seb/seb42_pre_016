package com.idle.stackoverflow.answer.service;

import com.idle.stackoverflow.answer.entity.Answer;
import com.idle.stackoverflow.answer.repository.AnswerRepository;
import com.idle.stackoverflow.exception.BusinessLogicException;
import com.idle.stackoverflow.exception.ExceptionCode;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class AnswerService {

    private  final AnswerRepository answerRepository;

    public AnswerService(AnswerRepository answerRepository) {
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
        Optional.ofNullable(answer.getVoteCnt()).ifPresent(voteCnt -> findAnswer.setVoteCnt(voteCnt));

        findAnswer.setModifiedAt(LocalDateTime.now()); // 수정 시간 업데이트

        return answerRepository.save(findAnswer);
    }

    public List<Answer> findAnswers(long questionId) { // 해당 질문 Id에 해당하는 답변리스트 반환

        return answerRepository.findByQuestionId(questionId); // 특정 ID 찾게 해야하는데...
    }

    public void deleteAnswer(long answerId) {
        Answer findAnswer = findVerifiedAnswer(answerId);
        answerRepository.delete(findAnswer);
    }

    // 이미 존재하는 answer인지 검증
    private Answer findVerifiedAnswer(Long answerId) { // public으로 해야할 수도
        Optional<Answer> optionalAnswer =
                answerRepository.findById(answerId);
        Answer findAnswer =
                optionalAnswer.orElseThrow(()->
                        new BusinessLogicException(ExceptionCode.ANSWER_NOT_FOUND));
        return findAnswer;
    }

}
