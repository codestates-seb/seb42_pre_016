package com.idle.stackoverflow.question.service;

import com.idle.stackoverflow.exception.BusinessLogicException;
import com.idle.stackoverflow.exception.ExceptionCode;
import com.idle.stackoverflow.question.entity.Question;
import com.idle.stackoverflow.question.repository.QuestionRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class QuestionService {
    private final QuestionRepository questionRepository;

    public QuestionService(QuestionRepository questionRepository) {
        this.questionRepository = questionRepository;
    }

    public Question createQuestion(Question question) {

        return questionRepository.save(question);
    }
    public Question updateQuestion(Question question) {

        Question updatedQuestion = question;
        return updatedQuestion;

//        return questionRepository.save(question);
    }

    public Question findQuestion(long questionId) {
        return findVerifiedQuestion(questionId);    // 질문 검증
    }

    public List<Question> findQuestions() {
        return null;
    }

    public void deleteQuestion(long questionId) {



    }

    // 질문 검증
    private Question findVerifiedQuestion(long questionId) {
        Optional<Question> optionalQuestion = questionRepository.findById(questionId);
        Question findQuestion = optionalQuestion.orElseThrow(() -> new BusinessLogicException(ExceptionCode.QUESTION_NOT_FOUND));
        return findQuestion;
    }
}
