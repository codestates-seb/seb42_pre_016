import React from "react";
import styled from "styled-components";
import { Space } from "../AskQuestions/AskQuestions";
import QuestionEditor from "../Editor/Editor";

// Edit Notice div your edit will be placed ..
// Title
// Body - Editor, Question 원문
// 세이브버튼, 취소버튼
// 오른쪽에 EditTips
const QuestionEditWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  display: flex;
  /* flex: 1 1 auto; */
`

const QuestionEditContainer = styled.div`
  width: fit-content;
  height: auto;
  margin-left: 10px;
  box-sizing: border-box;
  position: relative;

`

const EditNotice = styled.div`
    background-color: #fcf7e4;
    border: solid 1px #e3d085;
    padding: 0px 20px;
    width: 745px;
    margin: 25px;
`

const Title = styled.div`
  background-color: white;
  /* padding: 20px; */
  width: 790px;
  margin-top: 20px;
  font-weight: bold;
  font-size: 18px;
  margin-left: 25px;

  .title-input {
    width: 99%;
    margin-top: 5px;
    height: 30px;
    border: solid 1px #91989f;
    font-size: 15px;
  }
`;

const BodyWrapper = styled.div`
    width: 790px;
`

const Body = styled.div`
  background-color: white;
  /* padding: 20px; */
  width: 790px;
  margin-top: 20px;
  font-weight: bold;
  font-size: 18px;
  margin-left: 25px;

`

const QuestionText = styled.div`
  background-color: white;
  width: 790px;
  margin-top: 20px;
  font-size: 18px;
  margin-left: 25px;
  border: 1px black dotted;
`

const EditorContainer = styled.div`
  width: 100%;
  height: auto;
  margin-left: 25px;
  margin-top: 5px;
  .ck.ck-editor__editable:not(.ck-editor__nested-editable) {
    min-height: 300px;
    width: 769.5px;
    margin-bottom: 20px;
  }
`;

const ButtonWrapper = styled.div`
    margin-left: 25px;
    margin-top: 40px;
    margin-bottom: 40px;
`

const SaveEditsButton = styled.button`
  background-color: #0c96fe;
  box-shadow: 1px 1px 2px #ffffffb1 inset;
  border: solid 0.5px #4b80a6;
  color: white;
  width: 110px;
  height: 40px;
  border-radius: 5px;
  font-size: 15px;
  margin-bottom: 30px;
  &:hover {
    background-color: #3172c6;
  }
`;

const CancelButton = styled.button`
  background-color: transparent;
  color: #0c96fe;
  width: 80px;
  height: 40px;
  border-radius: 5px;
  font-size: 15px;
  margin-left: 10px;
  border: none;
  &:hover {
    background-color: #f1f8fe;
  }
`;

const EditingTip = styled.div`
  box-shadow: 1px 1px 10px 0px rgba(0, 0, 0, 0.13);
  /* border: solid 1px #cfc390; */
  width: 380px;
  height: fit-content;
  position: sticky;
  top: 80px;
  .editing-tip-title {
    text-justify: center;
    border: solid 1px #cfc390;
    background-color: #faf3d8;
    font-size: 20px;
    padding: 15px;
  }
  .editing-tip-description {
    border: solid 1px #cfc390;
    background-color: #fffcf1;
    height: fit-content;
    padding-top: 10px;
    padding-bottom: 10px;
    margin-top: -1px;
    font-size: 15px;
    align-content: center;
    
    li {
        margin-top: 10px;
        margin-bottom: 10px;
        margin-left: 20px;
    }
  }
`;



const QuestionEdit = () => {
    return (
        <QuestionEditWrapper>
        <QuestionEditContainer>
        <Space />
            <EditNotice>
                <p>Your edit will be placed in a queue until it is peer reviewed.</p>
                <p>We welcome edits that make the post easier to understand and more valuable for readers. Because community members review edits, please try to make the post substantially better than how you found it, for example, by fixing grammar or adding additional resources and hyperlinks.</p>
            </EditNotice>
        <Title>
            Title
            <input type="text" className="title-input" placeholder=" Question 원문 제목"/>
        </Title>
        <BodyWrapper>
            <Body>Body</Body>
            <EditorContainer>
                <QuestionEditor />
            </EditorContainer>
        </BodyWrapper>
        <QuestionText>Questions 원문이 들어갑니다.</QuestionText>
        <ButtonWrapper>
            <SaveEditsButton>Save edits</SaveEditsButton>
            <CancelButton>Cancel</CancelButton>
        </ButtonWrapper>
        </QuestionEditContainer>
        <EditingTip>
            <div className="editing-tip-title">How to Edit</div>
            <div className="editing-tip-description">
                <li>Correct minor typos or mistakes</li>
                <li>Clarify meaning without changing it</li>
                <li>Add related resources or links</li>
                <li>Always respect the author’s intent</li>
                <li>Don’t use edits to reply to the author</li>
            </div>
        </EditingTip>
        </QuestionEditWrapper>
    
        
    )
};

export default QuestionEdit;