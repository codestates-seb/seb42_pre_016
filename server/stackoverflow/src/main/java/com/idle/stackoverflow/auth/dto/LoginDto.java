package com.idle.stackoverflow.auth.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.Setter;


@Getter
public class LoginDto {                   // JWT.
    private String username;
    private String password;

}
