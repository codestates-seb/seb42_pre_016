package com.idle.stackoverflow.question.service;

import com.idle.stackoverflow.answer.entity.Answer;
import com.idle.stackoverflow.exception.BusinessLogicException;
import com.idle.stackoverflow.exception.ExceptionCode;
import com.idle.stackoverflow.question.entity.Question;
import com.idle.stackoverflow.question.repository.QuestionRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class QuestionService {
    private final QuestionRepository questionRepository;

    public QuestionService(QuestionRepository questionRepository) {
        this.questionRepository = questionRepository;
    }

    public Question createQuestion(Question question) {
        return questionRepository.save(question);   // 질문 등록
    }

    public Question updateQuestion(Question question) {
        Question findQuestion = findVerifiedQuestion(question.getQuestionId()); // 질문 검증
        Optional.ofNullable(question.getTitle()).ifPresent(title -> findQuestion.setTitle(title));  // 제목 업데이트
        Optional.ofNullable(question.getContent()).ifPresent(content -> findQuestion.setContent(content));  // 상태 업데이트
        findQuestion.setModifiedAt(LocalDateTime.now());    // 수정 시간 업데이트
        return questionRepository.save(findQuestion);   // 질문 등록
    }

    public Question findQuestion(long questionId) {
//        return findVerifiedQuestion(questionId);    // 질문 검증
        Question findQuestion = questionRepository.findById(questionId).orElseThrow(() -> new BusinessLogicException(ExceptionCode.QUESTION_NOT_FOUND));
        return findQuestion;
    }

    public Page<Question> findQuestions(int page, int size) {
        // 신규 질문 정렬
        return questionRepository.findAll(PageRequest.of(page, size, Sort.by("createdAt").descending()));
    }

    public void deleteQuestion(long questionId) {
        Question findQuestion = findVerifiedQuestion(questionId);   // 질문 검증
        questionRepository.delete(findQuestion);    // 질문 삭제
    }

    // 질문 검증
    public Question findVerifiedQuestion(long questionId) {
        Optional<Question> optionalQuestion = questionRepository.findById(questionId);
        Question findQuestion = optionalQuestion.orElseThrow(() -> new BusinessLogicException(ExceptionCode.QUESTION_NOT_FOUND));
        return findQuestion;
    }

    public Question QuestionVoteUp(long questionId) {
        Question findQuestion = findVerifiedQuestion(questionId);   // 질문 검증
        findQuestion.setQuestionVoteCnt(findQuestion.getQuestionVoteCnt() +1);
        return questionRepository.save(findQuestion);
    }

    public Question QuestionVoteDown(long questionId) {
        Question findQuestion = findVerifiedQuestion(questionId);   // 질문 검증
        findQuestion.setQuestionVoteCnt(findQuestion.getQuestionVoteCnt() -1);
        return questionRepository.save(findQuestion);
    }
}
