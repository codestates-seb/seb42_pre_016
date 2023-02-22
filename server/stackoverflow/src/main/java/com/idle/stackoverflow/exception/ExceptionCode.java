package com.idle.stackoverflow.exception;

import lombok.Getter;

import javax.persistence.SequenceGenerator;

public enum ExceptionCode {
    USER_NOT_FOUND(404, "USER NOT FOUND"),
    USER_EXISTS(409, "USER EXISTS"),
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
