package com.idle.stackoverflow.user.repository;

import com.idle.stackoverflow.user.entity.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    // find + By + SQL 쿼리문에서 WEHERE 절의 컬럼명 + (WHERE 절 컬럼의 조건이 되는 데이터)
    // -> 조건이 맞는 데이터를 테이블에서 조회
    // -> 이미 테이블에 등록된 주소가 있는지 확인하기 위한 용도의 쿼리 메서드
//    Optional<User> findByUserId(long userId);
    Optional<User> findByEmail(String email);
    Page<User> findAllByUserStatus(User.UserStatus status, Pageable pageable);
}
