package com.idle.stackoverflow.config;

import com.idle.stackoverflow.auth.filter.JwtAuthenticationFilter;
import com.idle.stackoverflow.auth.filter.JwtVerificationFilter;
import com.idle.stackoverflow.auth.handler.UserAccessDeniedHandler;
import com.idle.stackoverflow.auth.handler.UserAuthenticationEntryPoint;
import com.idle.stackoverflow.auth.handler.UserAuthenticationFailureHandler;
import com.idle.stackoverflow.auth.handler.UserAuthenticationSuccessHandler;
import com.idle.stackoverflow.auth.jwt.JwtTokenizer;
import com.idle.stackoverflow.auth.utils.CustomAuthorityUtils;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.Arrays;

import static org.springframework.security.config.Customizer.withDefaults;

@Configuration
public class SecurityConfiguration {
    private final JwtTokenizer jwtTokenizer;
    private final CustomAuthorityUtils authorityUtils;  // SessionCreationPolicy 설정 추가

    public SecurityConfiguration(JwtTokenizer jwtTokenizer,
                                 CustomAuthorityUtils authorityUtils) {
        this.jwtTokenizer = jwtTokenizer;
        this.authorityUtils = authorityUtils;                 // CustomAuthorityUtils 추가
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http                                             // .frameOptions().sameOrigin() 을 호출하면 동일 출처로부터 들어오는 request만 페이지 렌더링을 허용한다.
                .headers().frameOptions().sameOrigin()
                .and()
                .csrf().disable()      //  CSRF(Cross-Site Request Forgery) 공격에 대한 Spring Security에 대한 설정을 비활성화
                .cors(withDefaults())   //  CORS 설정을 추가. CorsConfigurationSource Bean을 제공함으로써 CorsFilter를 적용할 수 있다.
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)   // 세션을 생성하지 않도록 설정. SessionCreationPolicy 의 설정 값으로는 아래와 같이 총 네 개의 값을 사용할 수 있다.
                .and()   // 추가
                .formLogin().disable()  // CSR 방식으로 JSON 포맷을 이용한 Username과 Password를 전송하는 방식을 사용할 것이므로 폼 로그인 방식을 비활성화.
                .httpBasic().disable()  // HTTP Basic인증은 Header에 실어서 인증을 하는 방식으로 HTTP Basic 인증 비활성화.
                .exceptionHandling()    // 추가
                .authenticationEntryPoint(new UserAuthenticationEntryPoint())   // UserAuthenticationEntryPoint를 사용할 수 있도록 SecurityConfiguration에 추가
                .accessDeniedHandler(new UserAccessDeniedHandler())  // UserAccessDeniedHandler를 사용할 수 있도록 SecurityConfiguration에 추가
                .and()
                .apply(new CustomFilterConfigurer())  // 추가
                .and()   // 추가
                .authorizeHttpRequests(authorize -> authorize
                        .antMatchers(HttpMethod.POST, "/*/users").permitAll()   // 회원 등록의 경우, 접근 권한 여부와 상관없이 누구나 접근이 가능해야 하므로, 회원등록에 사용되는 URL(”/stackoverflow.com/users/signup”)과 HTTP Method(여기서는 POST)에 해당된다면 접근을 허용
                        .antMatchers(HttpMethod.PATCH, "/*/users/**").hasRole("USER")  // 회원 정보 수정의 경우, 일반 사용자(USER) 권한만 가진 사용자만 접근이 가능하도록 허용 ( UserController의 patchUser() 핸들러 메서드에 대한 접근 권한 부여 설정이라는 사실을 기억하기)
                        .antMatchers(HttpMethod.GET, "/%/users").hasRole("USER")  // 모든 회원 정보의 목록은 관리자(ADMIN) 권한을 가진 사용자만 접근이 가능하여야 할 것이기에 회원 정보 목록 조회 요청을 처리하는 UserController의 getUsers() 핸들러 메서드에 대한 접근 권한 부여 설정에 해당한다.
                        .antMatchers(HttpMethod.GET, "/%/users/**").hasRole("USER")  // 특정 회원에 대한 정보 조회는, 일반 사용자(USER)와 관리자(ADMIN) 권한을 가진 사용자 모두 접근이 가능하면 된다. 특정 회원 정보 조회 요청을 처리하는 UserController의 getUser() 핸들러 메서드에 대한 접근 권한 부여 설정에 해당된다.
                        .antMatchers(HttpMethod.DELETE, "/*/users/**").hasRole("USER")  // 특정 회원을 삭제하는 요청은, 해당 사용자가 탈퇴같은 처리를 할 수 있어야 하므로 일반 사용자(USER) 권한만 가진 사용자만 접근이 가능하도록 허용. 특정 회원 정보 삭제 요청을 처리하는 UserController의 deleteUser() 핸들러 메서드에 대한 접근 권한 부여 설정에 해당
                        .anyRequest().permitAll()       // ‘**’는 하위 URL로 어떤 URL이 오더라도 매치가 된다는 의미
                );
        return http.build();
    }

    @Bean           // PasswordEncoder Bean 객체를 생성한다.
    public PasswordEncoder passwordEncoder() {
        return PasswordEncoderFactories.createDelegatingPasswordEncoder();
    }

    @Bean         // CorsConfigurationSource Bean 생성을 통해 구체적인 CORS 정책을 설정한다.
    CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowedOrigins(Arrays.asList("*"));   // setAllowedOrigins()을 통해 모든 출처에 대해 스크립트 기반의 HTTP 통신을 허용
        configuration.setAllowedMethods(Arrays.asList("GET", "POST", "PATCH", "DELETE"));  // setAllowedMethods()를 통해 파라미터로 지정한 HTTP Method에 대한 HTTP 통신을 허용
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource(); // CorsConfigurationSource 인터페이스의 구현 클래스인 UrlBasedCorsConfigurationSource 클래스의 객체를 생성
        source.registerCorsConfiguration("/**", configuration);    // 모든 URL에 앞에서 구성한 CORS 정책(CorsConfiguration)을 적용
        return source;
    }

    public class CustomFilterConfigurer extends AbstractHttpConfigurer<CustomFilterConfigurer, HttpSecurity> { // AbstractHttpConfigurer를 상속해서 Custom Configurer를 구현할 수 있다
        @Override
        public void configure(HttpSecurity builder) throws Exception {  // configure() 메서드를 오버라이드해서 Configuration을 커스터마이징할 수 있다.
            AuthenticationManager authenticationManager = builder.getSharedObject(AuthenticationManager.class); // getSharedObject() 를 통해서 Spring Security의 설정을 구성하는 SecurityConfigurer 간에 공유되는 객체를 얻을 수 있다.

            JwtAuthenticationFilter jwtAuthenticationFilter = new JwtAuthenticationFilter(authenticationManager, jwtTokenizer); // JwtAuthenticationFilter를 생성하면서 JwtAuthenticationFilter에서 사용되는 AuthenticationManager와 JwtTokenizer를 DI 해준다.
            jwtAuthenticationFilter.setFilterProcessesUrl("/stackoverflow.com/auth/login");  // setFilterProcessesUrl() 메서드를 통해 디폴트 request URL인 “/login”을 “/stackoverflow.com/auth/login”으로 변경
            jwtAuthenticationFilter.setAuthenticationSuccessHandler(new UserAuthenticationSuccessHandler()); // AuthenticationSuccessHandler 등록
            jwtAuthenticationFilter.setAuthenticationFailureHandler(new UserAuthenticationFailureHandler()); //  AuthenticationFailureHandler 등록

            JwtVerificationFilter jwtVerificationFilter = new JwtVerificationFilter(jwtTokenizer, authorityUtils);  // JwtVerificationFilter의 인스턴스를 생성하면서 JwtVerificationFilter에서 사용되는 객체들을 생성자로 DI 해준다.

            builder
                    .addFilter(jwtAuthenticationFilter)     // addFilter() 메서드를 통해 JwtAuthenticationFilter를 Spring Security Filter Chain에 추가한다.
                    .addFilterAfter(jwtVerificationFilter, JwtAuthenticationFilter.class);  // JwtVerificationFilter가 JwtAuthenticationFilter가 수행된 바로 다음에 동작하도록 JwtAuthenticationFilter 뒤에 추가한다.

        }
    }

}
