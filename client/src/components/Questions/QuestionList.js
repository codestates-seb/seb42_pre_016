import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { dummydata } from "../Questions/testdata2";

const QustionButton = styled.button`
  height: 33px;
  outline: none;
  margin: 0 3px;
  padding: 8px 10.4px;
  border-radius: 3px;
  border: 1px solid transparent;
  color: #ffffff;
  background-color: #0a95ff;

  cursor: pointer;
  box-shadow: rgba(255, 255, 255, 0.4) 0px 2px 0px 0px inset;
`;

const MainStyle = styled.div`
  padding: 24px;
  width: 100%;
  & .title {
    height: 38px;
    margin-bottom: 24px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;

    > h1 {
      margin-top: 5px;
      margin-right: 12px;
      margin-bottom: 12px;

      font-size: 27px;
      font-weight: 600px;
      text-align: left;
      letter-spacing: 0px;
    }
  }

  & .question_data {
    > .question {
      height: 47px;

      margin-top: 35px;
      color: #232629;
      font-size: 17px;
      font-weight: 450;
    }

    border-bottom: solid 1px #d6d9dc;
  }
`;

const Questiontitle = styled.div`
  font-size: 30px;
  line-height: 40px;
  color: #0074cc;
`;

const QuestionList = () => {
  return (
    <>
      <MainStyle>
        <div className="title">
          <h1>All Questions</h1>
          <Link to="/askquestions">
            <QustionButton>Ask Question</QustionButton>
          </Link>
        </div>
        {dummydata.map((data) => {
          return (
            <div className="question_data">
              {/* <div className="question">0 question</div> */}
              <Link to="/questions">
                <Questiontitle>{data.title}</Questiontitle>
              </Link>
            </div>
          );
        })}
      </MainStyle>
    </>
  );
};

export default QuestionList;
