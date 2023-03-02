package com.idle.stackoverflow.answer.mapper;

import com.idle.stackoverflow.answer.dto.AnswerDto;
import com.idle.stackoverflow.answer.entity.Answer;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface AnswerMapper {
    Answer answerPostToAnswer(AnswerDto.Post requestBody);

    Answer answerPatchToAnswer(AnswerDto.Patch requestBody);

    default AnswerDto.Response answerToAnswerResponse(Answer answer) {
        AnswerDto.Response response = new AnswerDto.Response(
                answer.getAnswerId(),
                answer.getContent(),
                answer.getCreatedAt(),
                answer.getModifiedAt(),
                answer.getAnswerVoteCnt(),
                answer.getUser().getUserId(),
                answer.getQuestion().getQuestionId()
        );
        return response;
    }
}
