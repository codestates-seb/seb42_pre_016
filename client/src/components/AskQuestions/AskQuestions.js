import React, { useState } from "react";
import styled from "styled-components";
import WritingHand from "../../img/WritingHand.png";
import axios from "axios";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const AskQuestions = () => {
  const [inputTitle, setInputTitle] = useState("");
  const [content, setContent] = useState("");

  const handleEditorChange = (event, editor) => {
    const data = editor.getData();
    const cutData = data.slice(3, data.length - 4); //앞뒤 <p></p> 마크다운 제거
    // setContent(cutData);
    setContent(data);
    console.log("내용 : ", cutData);
  };

  const handleChange = (event) => {
    setInputTitle(event.target.value);
    console.log("제목 : ", event.target.value);
  };

  const postQuestion = async () => {
    await axios
      .post(
        `/api/questions/ask`,
        {
          userId: 1,
          title: `${inputTitle}`,
          content: `${content}`,
        },
        {
          headers: { "ngrok-skip-browser-warning": "12" },
        }
      )
      .then(() => {
        // 이전 페이지로 이동
        window.history.back();
      })

      .catch((err) => {
        console.log(err);
      });
  };

  //제목, 내용 초기화
  const handleClearClick = () => {
    setInputTitle("");
    setContent("");
  };

  return (
    <AskQuestionsWrapper>
      <Space />
      <AskQuestionContainer>
        <h1>Ask a public question</h1>
        <QuestionTip>
          <div className="tip-title">Writing a good question</div>
          <div>
            <p>
              You’re ready to ask a programming-related question and this form
              will help guide you through the process. Looking to ask a
              non-programming question? See the topics here to find a relevant
              site.
            </p>
          </div>
          <div className="tip-steps">Steps</div>
          <div className="tip-steps-details">
            <li>Summarize your problem in a one-line title.</li>
            <li>Describe your problem in more detail.</li>
            <li>Describe what you tried and what you expected to happen.</li>
            <li>
              Add “tags” which help surface your question to members of the
              community.
            </li>
            <li>Review your question and post it to the site.</li>
          </div>
        </QuestionTip>
        <Title>
          <div className="title">Title</div>
          <div className="title-description">
            Be specific and imagine you’re asking a question to another person.
          </div>
          <input
            className="title-input"
            type="text"
            value={inputTitle}
            onChange={handleChange}
            placeholder="  e.g. Is there an R function for finding the index of an element in a vector?"
          ></input>
          {/* <NextButton>Next</NextButton> */}
        </Title>
        <Problem>
          <div className="title">What are the details of your problem?</div>
          <div className="title-description">
            Introduce the problem and expand on what you put in the title.
            Minimum 20 characters.
          </div>
          <EditorContainer>
            <CKEditor
              editor={ClassicEditor}
              id="questionEditor"
              // onReady={editor => {
              //   console.log('Editor is ready to use!', editor);
              // }}
              data={content}
              onChange={handleEditorChange}
            />
          </EditorContainer>
        </Problem>
        <PostButton type="button" onClick={() => postQuestion()}>
          Post your question
        </PostButton>
        <DiscardButton onClick={handleClearClick}>Discard draft</DiscardButton>
      </AskQuestionContainer>
      <WritingTip>
        <div className="writing-tip-title">Writing a good title</div>
        <div className="writing-tip-description">
          <WritingIcon src={WritingHand} />
          <p>Your title should summarize the problem.</p>
          <p>
            You might find that you have a better idea of your title after
            writing out the rest of the question.
          </p>
        </div>
      </WritingTip>
      <Space />
    </AskQuestionsWrapper>
  );
};

export default AskQuestions;

const AskQuestionsWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  display: flex;
  flex: 1 1 auto;
`;

const AskQuestionContainer = styled.div`
  width: fit-content;
  height: auto;
  margin-left: 150px;
  box-sizing: border-box;
  position: relative;
  h1 {
    margin-top: 50px;
    margin-bottom: 70px;
  }
`;

const QuestionTip = styled.div`
  background-color: #edf4fa;
  border: solid 1px #b1cdec;
  padding: 25px;
  width: 790px;
  .tip-title {
    font-size: 25px;
    margin-bottom: -5px;
  }
  .tip-steps {
    font-weight: bold;
    margin-bottom: 10px;
  }
  .tip-steps-details {
    margin-left: 20px;
  }
`;

const WritingTip = styled.div`
  box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.43);
  position: relative;
  border: solid 1px #d5d8da;
  width: 450px;
  height: fit-content;
  position: relative;
  left: 20px;
  top: 452px;
  .writing-tip-title {
    border: solid 1px #d5d8da;
    background-color: #f8f9f9;
    font-size: 20px;
    padding: 15px;
  }
  .writing-tip-description {
    border: solid 1px #d5d8da;
    height: 120px;
    font-size: 15px;
    align-content: center;
  }
  p {
    display: flex;
    height: auto;
    flex-direction: column;
    position: relative;
    top: 11px;
    margin-right: 12px;
  }
`;
const WritingIcon = styled.img`
  width: 60px;
  height: 60px;
  display: flex;
  float: left;
  margin-right: 20px;
  position: relative;
  top: 25px;
  left: 10px;
`;
const Title = styled.div`
  background-color: white;
  border: solid 1px #91989f;
  padding: 20px;
  width: 800px;
  margin-top: 20px;
  .title {
    font-weight: bold;
    font-size: 18px;
  }
  .title-description {
    font-size: 15px;
    margin-top: 5px;
  }
  .title-input {
    width: 99%;
    margin-top: 10px;
    margin-bottom: 10px;
    height: 30px;
  }
`;

const NextButton = styled.button`
  background-color: #0c96fe;
  box-shadow: 1px 1px 2px #ffffffb1 inset;
  border: solid 0.5px #4b80a6;
  margin: 7px 0;
  color: white;
  width: 50px;
  height: 37px;
  border-radius: 5px;
`;

const Problem = styled.div`
  background-color: white;
  border: solid 1px #91989f;
  padding: 20px;
  width: 800px;
  margin-top: 20px;
  margin-bottom: 20px;
  .title {
    font-weight: bold;
    font-size: 18px;
  }
  .title-description {
    font-size: 15px;
    margin-top: 5px;
    margin-bottom: 10px;
  }
`;

const Expect = styled.div`
  background-color: white;
  border: solid 1px #91989f;
  padding: 20px;
  width: 800px;
  margin-top: 20px;
  .title {
    font-weight: bold;
    font-size: 18px;
  }
  .title-description {
    font-size: 15px;
    margin-top: 5px;
    margin-bottom: 10px;
  }
`;

const Tags = styled.div`
  background-color: white;
  border: solid 1px #91989f;
  padding: 20px;
  width: 800px;
  margin-top: 20px;
  margin-bottom: 20px;
  .title {
    font-weight: bold;
    font-size: 18px;
  }
  .title-description {
    font-size: 15px;
    margin-top: 5px;
  }
  .title-input {
    width: 99%;
    margin-top: 10px;
    margin-bottom: 10px;
    height: 30px;
  }
`;

const PostButton = styled.button`
  background-color: #0c96fe;
  box-shadow: 1px 1px 2px #ffffffb1 inset;
  border: solid 0.5px #4b80a6;
  color: white;
  width: 160px;
  height: 40px;
  border-radius: 5px;
  font-size: 15px;
  margin-bottom: 30px;
  &:hover {
    background-color: #3172c6;
    cursor: pointer;
  }
`;

const DiscardButton = styled.button`
  background-color: transparent;
  color: red;
  width: 120px;
  height: 40px;
  border-radius: 5px;
  font-size: 15px;
  margin-left: 20px;
  border: none;
  &:hover {
    background-color: #f9f1f1;
    cursor: pointer;
  }
`;

const EditorContainer = styled.form`
  width: 99%;
  height: auto;
  .ck.ck-editor__editable:not(.ck-editor__nested-editable) {
    min-height: 300px;
    margin-bottom: 20px;
  }
`;

export const Space = styled.div`
  display: flex;
  flex: 1 1 auto;
  width: 5%;
`;
