package com.idle.stackoverflow.answer.controller;

import com.idle.stackoverflow.answer.dto.AnswerDto;
import com.idle.stackoverflow.answer.entity.Answer;
import com.idle.stackoverflow.answer.mapper.AnswerMapper;
import com.idle.stackoverflow.answer.service.AnswerService;
import com.idle.stackoverflow.question.entity.Question;
import com.idle.stackoverflow.question.service.QuestionService;
import com.idle.stackoverflow.response.SingleResponseDto;
import com.idle.stackoverflow.user.entity.User;
import com.idle.stackoverflow.user.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/stackoverflow.com/answers")
public class AnswerController {
    private final static String ANSWER_DEFAULT_URL = "/stackoverflow.com/answers"; // default URL 경로
    private final AnswerService answerService;
    private final AnswerMapper mapper;

    private final UserService userService;

    private final QuestionService questionService;

    public AnswerController(AnswerService answerService,
                            AnswerMapper mapper,
                            UserService userService,
                            QuestionService questionService) {
        this.answerService = answerService;
        this.mapper = mapper;
        this.userService = userService;
        this.questionService = questionService;
    }

    @PostMapping
    public ResponseEntity postAnswer(@RequestBody AnswerDto.Post requestBody) {
        Answer answer = mapper.answerPostToAnswer(requestBody);

        User user = userService.findVerifiedUser(requestBody.getUserId());
        Question question = questionService.findVerifiedQuestion(requestBody.getQuestionId());

        answer.setUser(user);
        answer.setQuestion(question);

        answerService.createAnswer(answer); // DB에 저장

        /*
        * Answer는 get요청 없어짐
        URI location =
                UriComponentsBuilder
                        .newInstance()
                        .path(ANSWER_DEFAULT_URL + "/{question-id}")
                        .buildAndExpand(answer.getQuestion().getQuestionId())
                        .toUri(); // "/stackoverflow.com/{question-id}"*/

        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @PatchMapping("/{answer-id}")
    public ResponseEntity patchAnswer(@PathVariable("answer-id") long answerId,
                                      @RequestBody AnswerDto.Patch requestBody) {
        requestBody.setAnswerId(answerId);

        Answer answer = mapper.answerPatchToAnswer(requestBody);
        Answer response = answerService.updateAnswer(answer);

        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.answerToAnswerResponse(response)), HttpStatus.OK);
    }

    @PatchMapping("/voteUp/{answer-id}")
    public ResponseEntity answerVoteUp(@PathVariable("answer-id") long answerId) {
        Answer voteUp = answerService.answerVoteUp(answerId);

        AnswerDto.Response response = mapper.answerToAnswerResponse(voteUp);
        return new ResponseEntity<>(
                new SingleResponseDto<>(response), HttpStatus.OK);
    }

    @PatchMapping("/voteDown/{answer-id}")
    public ResponseEntity answerVoteDown(@PathVariable("answer-id") long answerId) {
        Answer voteUp = answerService.answerVoteDown(answerId);

        AnswerDto.Response response = mapper.answerToAnswerResponse(voteUp);
        return new ResponseEntity<>(
                new SingleResponseDto<>(response), HttpStatus.OK);
    }

   /*
   * questionId에 해당하는 answers목록 조회 QuestionController에 적용함
   @GetMapping("/{question-id}") // 일단 전체 목록 조회, 할 수 있으면 페이지네이션 적용
    public ResponseEntity getAnswers(@PathVariable("question-id") long questionId) {
        List<Answer> answers = answerService.findAnswers();

        List<AnswerDto.Response> response = mapper.answersToAnswerResponse(answers);
        return new ResponseEntity(response, HttpStatus.OK);
    }*/

    @DeleteMapping("/{answer-id}")
    public ResponseEntity deleteAnswer(@PathVariable("answer-id") long answerId) {
        answerService.deleteAnswer(answerId);
        return ResponseEntity.noContent().build();
    }
}
