package com.idle.stackoverflow.exception;

import lombok.Getter;

public enum ExceptionCode {
    USER_NOT_FOUND(404, "USER NOT FOUND"),
    USER_EXISTS(409, "USER EXISTS"),
    QUESTION_NOT_FOUND(404, "QUESTION NOT FOUND"),
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
