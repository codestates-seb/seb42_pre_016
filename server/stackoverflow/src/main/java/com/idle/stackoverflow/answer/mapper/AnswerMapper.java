package com.idle.stackoverflow.answer.mapper;

import com.idle.stackoverflow.answer.dto.AnswerDto;
import com.idle.stackoverflow.answer.entity.Answer;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface AnswerMapper {
    Answer answerPostToAnswer(AnswerDto.Post requestBody); // DTO -> Entity
    Answer answerPatchToAnswer(AnswerDto.Patch requestBody); // DTO -> Entity
    AnswerDto.Response answerToAnswerResponse(Answer answer); // Entity -> DTO
    List<AnswerDto.Response> answersToAnswerResponse(List<Answer> answers); // List<Entity> -> List<DTO>
}
