package com.idle.stackoverflow.tag.dto;

import lombok.Getter;

@Getter
public class TagPatchDto {

    private long tagId;

    private String name;

    public TagPatchDto(long tagId) {
        this.tagId = tagId;
    }
}
