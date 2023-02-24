import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import Editor from "./Editor";

const EditorWrap = styled.div`
  border-radius: 4px;
`;

const ErrorMassage = styled.p`
  margin-top: 4px;
  padding: 2px;
  font-size: 12px;
  color: #d0393e;
`;

const AnswerButton = styled.button`
  background: #0a95ff;
  border: transparent;
  border-radius: 4px;
  margin: 10px 0px 15px 0px;
  padding: 10px;

  color: #ffffff;

  &:hover {
    background: #0074cc;
  }
`;

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
