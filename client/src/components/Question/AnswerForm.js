import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import axios from "../../api/axios";
import Editor from "./Editor";
import { EditorWrap, ErrorMassage, AnswerButton } from "./Qustion.styled";

const AnswerForm = () => {
  return (
    <div>
      <EditorWrap>
        <Editor />
      </EditorWrap>
      <AnswerButton>Post Your Answer</AnswerButton>
    </div>
  );
};

export default AnswerForm;
