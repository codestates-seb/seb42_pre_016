package com.idle.stackoverflow.exception;

import lombok.Getter;

import javax.persistence.SequenceGenerator;

public enum ExceptionCode {
    ANSWER_NOT_FOUND(404,"Answer not found");

    @Getter
    private final int status;

    @Getter
    private  final String message;

    ExceptionCode(int status, String message) {
        this.status = status;
        this.message = message;
    }

}
