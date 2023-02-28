package com.idle.stackoverflow.auth.filter;

import com.idle.stackoverflow.auth.jwt.JwtTokenizer;
import com.idle.stackoverflow.auth.utils.CustomAuthorityUtils;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.SignatureException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;
import java.util.Map;

public class JwtVerificationFilter extends OncePerRequestFilter { // OncePerRequestFilter를 확장해서 request 당 한번만 실행되는 Security Filter를 구현할 수 있다
    private final JwtTokenizer jwtTokenizer;
    private final CustomAuthorityUtils authorityUtils;

    public JwtVerificationFilter(JwtTokenizer jwtTokenizer,                   // JwtTokenizer는 JWT를 검증하고 Claims(토큰에 포함된 정보)를 얻는데 사용, CustomAuthorityUtils는 JWT 검증에 성공하면 Authentication 객체에 채울 사용자의 권한을 생성하는데 사용
                                 CustomAuthorityUtils authorityUtils) {
        this.jwtTokenizer = jwtTokenizer;
        this.authorityUtils = authorityUtils;
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        /*Map<String, Object> claims = verifyJws(request);    //  verifyJws() 메서드는 JWT를 검증하는데 사용되는 private 메서드이다.
        setAuthenticationToContext(claims);   // setAuthenticationToContext() 메서드는 Authentication 객체를 SecurityContext에 저장하기 위한 private 메서드이다.*/

        try {                                                       // 일반적으로 알고 있는 예외 처리 방식과는 다르게 Exception을 catch한 후에 Exception을 다시 throw 한다든지하는 처리를 하지 않고, 단순히 request.setAttribute()를 설정하는 일 밖에 하지 않는다
            Map<String, Object> claims = verifyJws(request);
            setAuthenticationToContext(claims);
        } catch (SignatureException se) {
            request.setAttribute("exception", se);
        } catch (ExpiredJwtException ee) {
            request.setAttribute("exception", ee);
        } catch (Exception e) {
            request.setAttribute("exception", e);
        }

        filterChain.doFilter(request, response);  // 문제없이 JWT의 서명 검증에 성공하고, Security Context에 Authentication을 저장한 뒤에는 Security Filter를 호출한다.
    }

    @Override
    protected boolean shouldNotFilter(HttpServletRequest request) throws ServletException {  //  OncePerRequestFilter의 shouldNotFilter()를 오버라이드 한 것으로, 특정 조건에 부합하면(true이면) 해당 Filter의 동작을 수행하지 않고 다음 Filter로 건너뛰도록 해줍
        String authorization = request.getHeader("Authorization");   // Authorization header의 값을 얻은 후

        return authorization == null || !authorization.startsWith("Bearer");   // Authorization header의 값이 null이거나 Authorization header의 값이 “Bearer”로 시작하지 않는다면 해당 Filter의 동작을 수행하지 않도록 정의한다.
    }


    private Map<String, Object> verifyJws(HttpServletRequest request) {
        String jws = request.getHeader("Authorization").replace("Bearer ", "");  // request의 header에서 JWT를 얻고 있다. 클라이언트가 response header로 전달 받은 JWT를 request header에 추가해서 서버 측에 전송한 것이다.
        String base64EncodedSecretKey = jwtTokenizer.encodeBase64SecretKey(jwtTokenizer.getSecretKey());  // JWT 서명(Signature)을 검증하기 위한 Secret Key를 얻는다.
        Map<String, Object> claims = jwtTokenizer.getClaims(jws, base64EncodedSecretKey).getBody();  //  JWT에서 Claims를 파싱한다.

        return claims;

    }

    private void setAuthenticationToContext(Map<String, Object> claims) {
        String username = (String) claims.get("username");  //  JWT에서 파싱한 Claims에서 username을 얻는다.
        List<GrantedAuthority> authorities = authorityUtils.createAuthorities((List)claims.get("roles"));  //  JWT의 Claims에서 얻은 권한 정보를 기반으로 List<GrantedAuthority 를 생성한다.
        Authentication authentication = new UsernamePasswordAuthenticationToken(username, null, authorities);  // username과 List<GrantedAuthority 를 포함한 Authentication 객체를 생성한다.
        SecurityContextHolder.getContext().setAuthentication(authentication);  //  SecurityContext에 Authentication 객체를 저장한다.
    }
}
