package com.idle.stackoverflow.question.controller;

import com.idle.stackoverflow.question.dto.QuestionPatchDto;
import com.idle.stackoverflow.question.dto.QuestionPostDto;
import com.idle.stackoverflow.question.dto.QuestionResponseDto;
import com.idle.stackoverflow.question.entity.Question;
import com.idle.stackoverflow.question.mapper.QuestionMapper;
import com.idle.stackoverflow.question.service.QuestionService;
import com.idle.stackoverflow.response.MultiResponseDto;
import com.idle.stackoverflow.response.SingleResponseDto;
import com.idle.stackoverflow.user.entity.User;
import com.idle.stackoverflow.user.service.UserService;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.constraints.Positive;
import java.util.List;

@RestController
@RequestMapping("/stackoverflow.com/questions")
public class QuestionController {
    private final QuestionService questionService;
    private final QuestionMapper mapper;
    private final UserService userService;

    public QuestionController(QuestionService questionService, QuestionMapper mapper, UserService userService) {
        this.questionService = questionService;
        this.mapper = mapper;
        this.userService = userService;
    }

    @PostMapping("/ask")
    public ResponseEntity postQuestion(@RequestBody QuestionPostDto questionPostDto) {
        Question question = mapper.questionPostToQuestion(questionPostDto);
        User user = userService.findVerifiedUser(questionPostDto.getUserId());
        question.setUser(user);
        questionService.createQuestion(question);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @PatchMapping("/{questions-id}")
    public ResponseEntity patchQuestion(@PathVariable("questions-id") long questionId,
                                         @RequestBody QuestionPatchDto questionPatchDto) {
        questionPatchDto.setQuestionId(questionId);
        Question question = questionService.updateQuestion(mapper.questionPatchToQuestion(questionPatchDto));
        return new ResponseEntity<>(new SingleResponseDto<>(mapper.questionToQuestionMainResponseDto(question)), HttpStatus.OK);
    }

    @GetMapping("/{question-id}")
    public ResponseEntity getQuestion(@PathVariable("question-id") long questionId) {
        Question question = questionService.findQuestion(questionId);
        return new ResponseEntity<>(new SingleResponseDto<>(mapper.questionToQuestionMainResponseDto(question)), HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity getQuestions(@Positive @RequestParam(required = false, defaultValue = "1") int page,
                                       @Positive @RequestParam(required = false, defaultValue = "100") int size) {
        Page<Question> pageQuestion = questionService.findQuestions(page -1, size);
        List<Question> questions = pageQuestion.getContent();
        return new ResponseEntity<>(new MultiResponseDto<>(mapper.questionMainResponseDtos(questions), pageQuestion), HttpStatus.OK);
    }

    @DeleteMapping("/{question-id}")
    public ResponseEntity deleteQuestion(@PathVariable("question-id") long questionId) {
        questionService.deleteQuestion(questionId);
        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }

    @PatchMapping("/voteUp/{question-id}")
    public ResponseEntity questionVoteUp(@PathVariable("question-id") long questionId) {
        Question voteUp = questionService.questionVoteUp(questionId);
        QuestionResponseDto responseDto = mapper.questionToQuestionResponse(voteUp);
        return new ResponseEntity<>(new SingleResponseDto<>(responseDto), HttpStatus.OK);
    }

    @PatchMapping("/voteDown/{question-id}")
    public ResponseEntity questionVoteDown(@PathVariable("question-id") long questionId) {
        Question voteDown = questionService.questionVoteDown(questionId);
        QuestionResponseDto responseDto = mapper.questionToQuestionResponse(voteDown);
        return new ResponseEntity<>(new SingleResponseDto<>(responseDto), HttpStatus.OK);
    }
}
