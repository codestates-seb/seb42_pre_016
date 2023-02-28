package com.idle.stackoverflow.auth.utils;

import com.google.gson.Gson;
import com.idle.stackoverflow.response.ErrorResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class ErrorResponder {    //  클라이언트에게 전송하기 위한 ErrorResponder 클래스, ErrorResponder 클래스는 ErrorResponse를 출력 스트림으로 생성하는 역할을 한다.
    public static void sendErrorResponse(HttpServletResponse response, HttpStatus status) throws IOException {
        Gson gson = new Gson();
        ErrorResponse errorResponse = ErrorResponse.of(status);
        response.setContentType(MediaType.APPLICATION_JSON_VALUE);
        response.setStatus(status.value());
        response.getWriter().write(gson.toJson(errorResponse, ErrorResponse.class));
    }
}
