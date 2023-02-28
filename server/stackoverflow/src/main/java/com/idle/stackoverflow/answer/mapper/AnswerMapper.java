package com.idle.stackoverflow.answer.mapper;

import com.idle.stackoverflow.answer.dto.AnswerDto;
import com.idle.stackoverflow.answer.entity.Answer;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface AnswerMapper {
    Answer answerPostToAnswer(AnswerDto.Post requestBody); // DTO -> Entity
    Answer answerPatchToAnswer(AnswerDto.Patch requestBody); // DTO -> Entity
    default AnswerDto.Response answerToAnswerResponse(Answer answer) { // Entity -> DTO
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

//    questionId에 해당하는 answers목록 조회 QuestionController에 적용함
//    List<AnswerDto.Response> answersToAnswerResponse(List<Answer> answers); // List<Entity> -> List<DTO>
}
