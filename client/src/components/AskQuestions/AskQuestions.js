import React from "react";
import styled from "styled-components";
import Head from "../Header/Head";
import Sidebar from "../Sidebar/Sidebar";

const AskQuestionsWrapper = styled.div`
    background-color: #f8f8f8;
    width: 100%;
    height: 100%;
    position: relative;
`

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
`

const QuestionTip = styled.div`
    background-color: #edf4fa;
    border: solid 1px #b1cdec;
    padding: 25px;
    width: 790px;
    .tip-title{
        font-size: 25px;
        margin-bottom: -5px;
    }
    .tip-steps{
        font-weight: bold;
        margin-bottom: 10px;
    }
    .tip-steps-details{
        margin-left: 20px;
    }
`
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
`

const NextButton = styled.button`
    background-color: #5494fb;
    color: white;
    width: 60px;
    height: 40px;
    border-radius: 5px;
`

const Problem = styled.div`
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
`

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
    }
`

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
`

const PostButton = styled.button`
    background-color: #5494fb;
    color: white;
    width: 160px;
    height: 40px;
    border-radius: 5px;
    font-size: 15px;

`
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
  }
`



const AskQuestions = () => {
    return (
        <AskQuestionsWrapper>
        <AskQuestionContainer>
        <h1>Ask a public question</h1>
        <QuestionTip>
            <div className="tip-title">Writing a good question</div>
            <p><div>You’re ready to ask a programming-related question and this form will help guide you through the process.</div>
            Looking to ask a non-programming question? See the topics here to find a relevant site.</p>
            <div className="tip-steps">Steps</div>
            <div className="tip-steps-details">
            <li>Summarize your problem in a one-line title.</li>
            <li>Describe your problem in more detail.</li>
            <li>Describe what you tried and what you expected to happen.</li>
            <li>Add “tags” which help surface your question to members of the community.</li>
            <li>Review your question and post it to the site.</li>
            </div>
    </QuestionTip>
    <Title>
        <div className="title">Title</div>
        <div className="title-description">Be specific and imagine you’re asking a question to another person.</div>
        <input className="title-input" type="text" placeholder="  e.g. Is there an R function for finding the index of an element in a vector?"></input>
        <NextButton>Next</NextButton>
    </Title>
    <Problem>
        <div className="title">
        What are the details of your problem?
        </div>
        <div className="title-description">Introduce the problem and expand on what you put in the title. Minimum 20 characters.</div>
        <div><input type='text' placeholder="편집기가 들어갑니다"></input></div>
        <NextButton>Next</NextButton>
    </Problem>
    <Expect>
        <div className="title">
        What did you try and what were you expecting?
        </div>
        <div className="title-description">Describe what you tried, what you expected to happen, and what actually resulted. Minimum 20 characters.</div>
        <div><input type='text' placeholder="편집기가 들어갑니다"></input></div>
        <NextButton>Next</NextButton>
    </Expect>
    <Tags>
        <div className="title">Tags</div>
        <div className="title-description">Add up to 5 tags to describe what your question is about. Start typing to see suggestions.</div>
        <input className="title-input" type="text" placeholder="  e.g. (vba css json)"></input>
        <NextButton>Next</NextButton>
    </Tags>
    <PostButton>Post your question</PostButton>
    <DiscardButton>Discard draft</DiscardButton>
        </AskQuestionContainer>
        </AskQuestionsWrapper>
    )
}

export default AskQuestions;