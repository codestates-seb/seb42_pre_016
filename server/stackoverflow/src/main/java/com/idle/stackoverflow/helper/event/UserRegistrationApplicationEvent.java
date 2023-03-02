package com.idle.stackoverflow.helper.event;

import com.idle.stackoverflow.user.entity.User;
import lombok.Getter;

@Getter
public class UserRegistrationApplicationEvent {
    private User user;

    public UserRegistrationApplicationEvent(User user) {
        this.user = user;
    }
}
