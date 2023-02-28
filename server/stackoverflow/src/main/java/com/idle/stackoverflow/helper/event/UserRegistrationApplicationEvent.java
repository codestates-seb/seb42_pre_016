package com.idle.stackoverflow.helper.event;

import com.idle.stackoverflow.user.entity.User;
import lombok.Getter;

@Getter                                                 // JWT 진행 중 추가한 클래스.
public class UserRegistrationApplicationEvent {
    private User user;
    public UserRegistrationApplicationEvent(User user) {
        this.user = user;
    }
}
