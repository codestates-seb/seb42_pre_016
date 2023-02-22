package com.idle.stackoverflow.question.service;



import com.idle.stackoverflow.question.entity.Question;
import com.idle.stackoverflow.question.repository.QuestionRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class QuestionService {

    LocalDateTime createTime = LocalDateTime.now();
    LocalDateTime updateTime = LocalDateTime.now();



    private final QuestionRepository questionRepository;

    public QuestionService(QuestionRepository questionRepository) {
        this.questionRepository = questionRepository;
    }

    public Question createQuestion(Question question) {

        Question createdQuestion = question;
        return createdQuestion;

//        return questionRepository.save(question);

    }
    public Question updateQuestion(Question question) {

        Question updatedQuestion = question;
        return updatedQuestion;

//        return questionRepository.save(question);
    }
    public Question findQuestion(long questionId) {
        Question question =
                new Question(questionId,"title", "content", createTime, updateTime);
        return question;

        // stub 데이터, 레포 추가
    }
    public List<Question> findQuestions() {
        List<Question> questions = List.of(
                new Question(1L, "title", "content", createTime, updateTime),
                new Question(2L,"title2","content2", createTime, updateTime)
        );
        return questions;

        // stub 데이터
    }

    public void deleteQuestion(long questionId) {



    }

//    public Question findVerifiedQuestion(long questionId) {
//        Optional<Question> optionalQuestion = questionRepository.findById(questionId);
//        question findQuestion =
//                optionalQuestion.orElseThrow(() ->
//                        new BusinessLogicException(ExceptionCode.)
//    }



}
