package com.idle.stackoverflow.answer.repository;

import com.idle.stackoverflow.answer.entity.Answer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AnswerRepository extends JpaRepository<Answer, Long> {
}
