package com.idle.stackoverflow.answer.controller;

import com.idle.stackoverflow.answer.dto.AnswerDto;
import com.idle.stackoverflow.answer.entity.Answer;
import com.idle.stackoverflow.answer.mapper.AnswerMapper;
import com.idle.stackoverflow.answer.service.AnswerService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/stackoverflow.com/answers")
public class AnswerController {
    private final static String ANSWER_DEFAULT_URL = "/stackoverflow.com/answers"; // default URL 경로
    private final AnswerService answerService;
    private final AnswerMapper mapper;

    public AnswerController(AnswerService answerService, AnswerMapper mapper) { // 생성자 DI
        this.answerService = answerService;
        this.mapper = mapper;
    }

    @PostMapping
    public ResponseEntity postAnswer(@RequestBody AnswerDto.Post requestBody) {
        Answer answer = mapper.answerPostToAnswer(requestBody);
        answerService.createAnswer(answer); // DB에 저장

        URI location =
                UriComponentsBuilder
                        .newInstance()
                        .path(ANSWER_DEFAULT_URL + "/{question-id}")
                        .buildAndExpand(answer.getQuestionId())
                        .toUri(); // "/stackoverflow.com/{question-id}"

        return ResponseEntity.created(location).build();
    }

    @PatchMapping("/{answer-id}")
    public ResponseEntity patchAnswer(@PathVariable("answer-id") long answerId,
                                      @RequestBody AnswerDto.Patch requestBody) {
        requestBody.setAnswerId(answerId);

        Answer answer = mapper.answerPatchToAnswer(requestBody);
        Answer response = answerService.updateAnswer(answer);

        return new ResponseEntity<>(mapper.answerToAnswerResponse(response), HttpStatus.OK);
    }

    @GetMapping("/{question-id}") // 일단 전체 목록 조회, 할 수 있으면 페이지네이션 적용
    public ResponseEntity getAnswers(@PathVariable("question-id") long questionId) {
        List<Answer> answers = answerService.findAnswers(questionId);

        List<AnswerDto.Response> response = mapper.answersToAnswerResponse(answers);
        return new ResponseEntity(response, HttpStatus.OK);
    }

    @DeleteMapping("/{answer-id}")
    public ResponseEntity deleteAnswer(@PathVariable("answer-id") long answerId) {
        answerService.deleteAnswer(answerId);
        return ResponseEntity.noContent().build();
    }
}
