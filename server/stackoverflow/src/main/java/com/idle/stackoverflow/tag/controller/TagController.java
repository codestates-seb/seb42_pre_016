package com.idle.stackoverflow.tag.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/stackoverflow.com/tags")
public class TagController {
    @PostMapping
    public ResponseEntity postTag() {
        return ResponseEntity.created(null).build();
    }

    @PatchMapping("/{tag-id}")
    public ResponseEntity patchTag() {
        return ResponseEntity.ok(null);
    }

    @GetMapping("/{tag-id}")
    public ResponseEntity getTag() {
        return ResponseEntity.ok(null);
    }

    @GetMapping
    public ResponseEntity getTags() {
        return ResponseEntity.ok(null);
    }

    @DeleteMapping("/{tag-id}")
    public ResponseEntity deleteTag() {
        return ResponseEntity.noContent().build();
    }
}
