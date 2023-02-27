package com.idle.stackoverflow.auth.filter;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.idle.stackoverflow.auth.dto.LoginDto;
import com.idle.stackoverflow.auth.jwt.JwtTokenizer;
import com.idle.stackoverflow.user.entity.User;
import lombok.SneakyThrows;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

public class JwtAuthenticationFilter extends UsernamePasswordAuthenticationFilter {  // JWT. UsernamePasswordAuthenticationFilter는 폼로그인 방식에서 사용하는 디폴트 Security Filter.
    private final AuthenticationManager authenticationManager;
    private final JwtTokenizer jwtTokenizer;

    public JwtAuthenticationFilter(AuthenticationManager authenticationManager, JwtTokenizer jwtTokenizer) {     // AuthenticationManager와 JwtTokenizer를 DI 받고 있다.
        this.authenticationManager = authenticationManager; // DI 받은 AuthenticationManager는 로그인 인증 정보(Username/Password)를 전달 받아 UserDetailsService와 인터랙션 한뒤 인증 여부를 판단
        this.jwtTokenizer = jwtTokenizer;  // DI 받은 JwtTokenizer는 클라이언트가 인증에 성공할 경우, JWT를 생성 및 발급하는 역할을 한다.
    }

    @SneakyThrows // 메서드 이름에서도 알 수 있듯이 메서드 내부에서 인증을 시도하는 로직을 구현하면 된다
    @Override
    public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response) {

        ObjectMapper objectMapper = new ObjectMapper();  //  클라이언트에서 전송한 Username과 Password를 DTO 클래스로 역직렬화(Deserialization)하기 위해 ObjectMapper 인스턴스를 생성한다.
        LoginDto loginDto = objectMapper.readValue(request.getInputStream(), LoginDto.class);  // objectMapper.readValue(request.getInputStream(), LoginDto.class)를 통해 ServletInputStream 을 LoginDto 클래스의 객체로 역직렬화(Deserialization)한다.

        UsernamePasswordAuthenticationToken authenticationToken =  // Username과 Password 정보를 포함한 UsernamePasswordAuthenticationToken을 생성한다
                new UsernamePasswordAuthenticationToken(loginDto.getUsername(), loginDto.getPassword());

        return authenticationManager.authenticate(authenticationToken);  // 3-4 UsernamePasswordAuthenticationToken을 AuthenticationManager에게 전달하면서 인증 처리를 위임한다.
    }

    @Override  // successfulAuthentication() 메서드는 클라이언트의 인증 정보를 이용해 인증에 성공할 경우 호출 된다.
    protected void successfulAuthentication(HttpServletRequest request,
                                            HttpServletResponse response,
                                            FilterChain chain,
                                            Authentication authResult) throws ServletException, IOException {
        User user = (User) authResult.getPrincipal();  // AuthenticationManager 내부에서 인증에 성공하면 인증된 Authentication 객체가 생성되면서 principal 필드에 User 객체가 할당 된다.

        String accessToken = delegateAccessToken(user);  // delegateAccessToken(member) 메서드를 이용해 Access Token을 생성한다.
        String refreshToken = delegateRefreshToken(user); // delegateRefreshToken(member) 메서드를 이용해 Refresh Token을 생성한다.

        response.setHeader("Authorization", "Bearer " + accessToken);  //  response header(Authorization)에 Access Token을 추가한다. Acceess Token은 request header에 추가해서 클라이언트 측의 자격을 증명하는데 사용 된다.
        response.setHeader("Refresh", refreshToken);  //  Refresh Token은 Access Token이 만료될 경우, 클라이언트 측이 Access Token을 새로 발급받기 위해 클라이언트에게 추가적으로 제공 될 수 있다.

        this.getSuccessHandler().onAuthenticationSuccess(request, response, authResult);   // 로그인 인증에 성공하고, JWT를 생성해서 response header에 추가한 뒤, AuthenticationSuccessHandler의 onAuthenticationSuccess() 메서드를 호출
    }

    private String delegateAccessToken(User user) {   // Access Token을 생성하는 로직이다.
        Map<String, Object> claims = new HashMap<>();
        claims.put("username", user.getEmail());
        claims.put("roles", user.getRoles());

        String subject = user.getEmail();
        Date expiration = jwtTokenizer.getTokenExpiration(jwtTokenizer.getAccessTokenExpirationMinutes());

        String base64EncodedSecretKey = jwtTokenizer.encodeBase64SecretKey(jwtTokenizer.getSecretKey());

        String accessToken = jwtTokenizer.generateAccessToken(claims, subject, expiration, base64EncodedSecretKey);

        return accessToken;
    }

    private String delegateRefreshToken(User user) {    // Refresh Token을 생성하는 로직이다.
        String subject = user.getEmail();
        Date expiration = jwtTokenizer.getTokenExpiration(jwtTokenizer.getRefreshTokenExpirationMinutes());
        String base64EncodedSecretKey = jwtTokenizer.encodeBase64SecretKey(jwtTokenizer.getSecretKey());

        String refreshToken = jwtTokenizer.generateRefreshToken(subject, expiration, base64EncodedSecretKey);

        return refreshToken;
    }
}
