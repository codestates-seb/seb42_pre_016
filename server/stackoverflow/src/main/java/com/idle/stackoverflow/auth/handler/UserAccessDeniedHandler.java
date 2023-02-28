package com.idle.stackoverflow.auth.handler;

import com.idle.stackoverflow.auth.utils.ErrorResponder;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.web.access.AccessDeniedHandler;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;


@Slf4j
public class UserAccessDeniedHandler implements AccessDeniedHandler { // AccessDeniedHandler를 구현한 MemberAccessDeniedHandler
    @Override  // UserAccessDeniedHandler클래스는 요청한 리소스에 대해 적절한 권한이 없을 경우 호출되는 핸들러로써, 처리하고자 하는 로직을 handle() 메서드에 구현하면 된다.
    public void handle(HttpServletRequest request, HttpServletResponse response, AccessDeniedException accessDeniedException) throws IOException, ServletException {
        ErrorResponder.sendErrorResponse(response, HttpStatus.FORBIDDEN);  //  적절한 권한인지 확인하는 과정에서 AccessDeniedException이 발생하면 ErrorResponse를 생성해서 클라이언트에게 전송한다.
        log.warn("Forbidden error happened: {}", accessDeniedException.getMessage());
    }
}
