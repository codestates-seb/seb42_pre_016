package com.idle.stackoverflow.question.mapper;


import com.idle.stackoverflow.answer.dto.AnswerDto;
import com.idle.stackoverflow.answer.entity.Answer;
import com.idle.stackoverflow.question.dto.QuestionMainResponseDto;
import com.idle.stackoverflow.question.dto.QuestionPatchDto;
import com.idle.stackoverflow.question.dto.QuestionPostDto;
import com.idle.stackoverflow.question.dto.QuestionResponseDto;
import com.idle.stackoverflow.question.entity.Question;
import org.mapstruct.Mapper;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Mapper(componentModel = "spring")
public interface QuestionMapper {
    Question questionPostToQuestion(QuestionPostDto questionPostDto);
    Question questionPatchToQuestion(QuestionPatchDto questionPatchDto);
    QuestionResponseDto questionToQuestionResponse(Question question);

    default List<AnswerDto.Response> QuestionAnswersToAnswerResponse(List<Answer> answers) {
        return answers
                .stream()
                .map(answer -> AnswerDto.Response
                        .builder()
                        .answerId(answer.getAnswerId())
                        .content(answer.getContent())
                        .createdAt(answer.getCreatedAt())
                        .modifiedAt(answer.getModifiedAt())
                        .voteCnt(answer.getVoteCnt())
                        .userId(answer.getUser().getUserId())
                        .questionId(answer.getQuestion().getQuestionId())
                        .build()).collect(Collectors.toList());
    }

    default QuestionMainResponseDto questionToQuestionMainResponseDto(Question question) {
        List<Answer> answers = question.getAnswers();

        QuestionMainResponseDto response = new QuestionMainResponseDto(
                question.getQuestionId(),
                question.getTitle(),
                question.getContent(),
                question.getCreatedAt(),
                question.getModifiedAt(),
                QuestionAnswersToAnswerResponse(answers)
        );

        return response;
    }

}
