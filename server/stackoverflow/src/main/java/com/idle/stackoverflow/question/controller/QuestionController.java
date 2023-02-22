package com.idle.stackoverflow.question.controller;



import com.idle.stackoverflow.question.dto.QuestionPatchDto;
import com.idle.stackoverflow.question.dto.QuestionPostDto;
import com.idle.stackoverflow.question.dto.QuestionResponseDto;
import com.idle.stackoverflow.question.entity.Question;
import com.idle.stackoverflow.question.mapper.QuestionMapper;
import com.idle.stackoverflow.question.service.QuestionService;
import com.idle.stackoverflow.response.SingleResponseDto;
import com.idle.stackoverflow.utils.UriCreator;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/stackoverflow.com/questions")
public class QuestionController {
    private final static String QUESTION_DEFAULT_URL = "/stackoverflow.com/questions";   // url 추가
    private final QuestionService questionService;
    private final QuestionMapper mapper;

    public QuestionController(QuestionService questionService, QuestionMapper mapper) {
        this.questionService = questionService;
        this.mapper = mapper;
    }

    @PostMapping("/ask")
    public ResponseEntity postQuestion(@RequestBody QuestionPostDto questionPostDto) {

        Question question = mapper.questionPostToQuestion(questionPostDto);
        questionService.createQuestion(question); // db
        URI location = UriCreator.createUri(QUESTION_DEFAULT_URL, question.getQuestionId());

        return ResponseEntity.created(location).build();
    }

    @PatchMapping("/{question-id}")
    public ResponseEntity patchQuestion(@PathVariable("question-id") long questionId,
                                         @RequestBody QuestionPatchDto questionPatchDto) {
        questionPatchDto.setQuestionId(questionId);
        Question question = questionService.updateQuestion(mapper.questionPatchToQuestion(questionPatchDto));

        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.questionToQuestionResponse(question)),
                HttpStatus.OK);

    }

    @GetMapping("/{question-id}")
    public ResponseEntity getQuestion(@PathVariable("question-id") long questionId) {
        Question question = questionService.findQuestion(questionId);

        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.questionToQuestionResponse(question)),
                HttpStatus.OK);



    }

    @GetMapping
    public ResponseEntity getQuestions() {
        List<Question> questions = questionService.findQuestions();

        List<QuestionResponseDto> response =
                questions.stream()
                        .map(question -> mapper.questionToQuestionResponse(question))
                        .collect(Collectors.toList());

        return new ResponseEntity<>(response, HttpStatus.OK);           // 수정?
    }

    @DeleteMapping("/{question-id}")
    public ResponseEntity deleteQuestion(@PathVariable("question-id") long questionId) {

        questionService.deleteQuestion(questionId);

        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }

}
