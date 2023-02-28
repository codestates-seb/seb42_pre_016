package com.idle.stackoverflow.auth.handler;

import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Slf4j
public class UserAuthenticationSuccessHandler implements AuthenticationSuccessHandler { // AuthenticationSuccessHandler 인터페이스에는 onAuthenticationSuccess() 추상 메서드가 정의되어 있으며, onAuthenticationSuccess() 메서드를 구현해서 추가 처리를 하면 된다.

    @Override  // 단순히 로그만 출력하고 있지만 Authentication 객체에 사용자 정보를 얻은 후, HttpServletResponse로 출력 스트림을 생성하여 response를 전송할 수 있다는 사실을 기억
    public void onAuthenticationSuccess(HttpServletRequest request,
                                               HttpServletResponse response,
                                               Authentication authentication) throws IOException {

        log.info("# Authenticated successfully");



    }
}
