package com.idle.stackoverflow.question.repository;

import com.idle.stackoverflow.question.entity.Question;
import com.idle.stackoverflow.user.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;


public interface QuestionRepository extends JpaRepository<Question, Long> {
}
