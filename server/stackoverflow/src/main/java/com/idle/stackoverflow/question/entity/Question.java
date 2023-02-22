package com.idle.stackoverflow.question.entity;


import com.idle.stackoverflow.tag.entity.Tag;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;


@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Question {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    @Column(name = "question_id")
    private Long questionId;

    @Column(name = "title")
    private String title;

    @Column(name = "content")
    private String content;

    @Column(name = "created_at", nullable = false)
    private LocalDateTime createTime = LocalDateTime.now();

    @Column(name = "updated_at", nullable = false)
    private LocalDateTime updateTime = LocalDateTime.now();



//    @OneToMany(mappedBy = "questionId")
//    private List<Tag> tags = new ArrayList<>();

//    public Question(String title) {
//        this.title = title;
//    }
//
//    public Question(String title, String content, LocalDateTime createTime, LocalDateTime updateTime) {
//        this.title = title;
//        this.content = content;
//        this.createTime = createTime;
//        this.updateTime = updateTime;
//    }
//
//    public void addTag(Tag tag) {
//        tags.add(tag);
//    }
}
