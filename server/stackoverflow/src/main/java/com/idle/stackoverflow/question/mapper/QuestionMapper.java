package com.idle.stackoverflow.question.mapper;


import com.idle.stackoverflow.question.dto.QuestionPatchDto;
import com.idle.stackoverflow.question.dto.QuestionPostDto;
import com.idle.stackoverflow.question.dto.QuestionResponseDto;
import com.idle.stackoverflow.question.entity.Question;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface QuestionMapper {
    Question questionPostToQuestion(QuestionPostDto questionPostDto);
    Question questionPatchToQuestion(QuestionPatchDto questionPatchDto);
    QuestionResponseDto questionToQuestionResponse(Question question);

}
