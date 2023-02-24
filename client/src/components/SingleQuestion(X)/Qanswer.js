import React from "react";
import Editor from "../Question/Editor";
import {
  AnswerWrapper,
  H2Text,
  H3Text,
  AnswerButton,
} from "../Style components/Question_styled";

const Qanswer = () => {
  return (
    <div>
      <AnswerWrapper>
        <H2Text>
          Know someone who can answer? Share a link to this question via email,
          Twitter, or Facebook.
        </H2Text>
        <H3Text>Your Answer</H3Text>
        <AnswerButton>Post Your Answer</AnswerButton>
        <Editor />
      </AnswerWrapper>
    </div>
  );
};

export default Qanswer;
