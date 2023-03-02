import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { Link } from "react-router-dom";

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
  /* background-color: #0a95ff; */
  box-sizing: border-box;
  padding: 24px;
  width: 1500px;
  flex: 1 1 auto;
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

const timecheck = (createdAtUTC) => {
  const createdAt = Date.parse(createdAtUTC);
  const diffSeconds = Math.round((Date.now() - createdAt) / 1000);

  if (diffSeconds < 60) {
    if (diffSeconds === 1) return "1 sec ago";
    return `${diffSeconds} secs ago`;
  }

  const diffMinutes = Math.round(diffSeconds / 60);

  if (diffMinutes < 60) {
    if (diffMinutes === 1) return "1 sec ago";
    return `${diffMinutes} mins ago`;
  }

  const diffHours = Math.round(diffMinutes / 60);

  if (diffHours < 24) {
    if (diffHours === 1) return "1 hour ago";
    return `${diffHours} hours ago`;
  }

  const diffDays = Math.round(diffHours / 24);

  if (diffDays < 3) {
    if (diffDays === 1) return "yesterday";
    return "2 days ago";
  }

  const dateCreatedAt = new Date(createdAt - 32400000);
  //한국시간으로 변환 32400000

  const month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  return `${
    month[dateCreatedAt.getMonth()]
  } ${dateCreatedAt.getDate()}, ${dateCreatedAt.getFullYear()} at ${String(
    dateCreatedAt.getHours()
  ).padStart(2, "0")}:${String(dateCreatedAt.getMinutes()).padStart(2, "0")}`;
  // 시간 두자리수 표기법 padStart 사용하기
};

const Questiontitle = styled.div`
  flex-basis: 50%;
  font-size: 28px;
  line-height: 20px;
  color: #0074cc;
`;

const ListLeft = styled.div`
  font-size: 13px;
  line-height: 17px;
  color: #6a737c;
  width: 80px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  span {
    display: block;
    margin-bottom: 5px;
  }

  span:first-child {
    color: #0c0d0e;
  }
`;

const ListMain = styled.div`
  color: #6a737c;
  display: flex;
  gap: 15px;
  flex-basis: 100%;
  position: relative;
`;

const List = styled.li`
  border-top: 1px solid rgb(219, 222, 224);
  padding: 20px;
  display: flex;
  width: 100%;
  gap: 15px;
`;

const WriterAndtime = styled.div`
  font-size: 12px;
  line-height: 12px;
  position: absolute;
  right: 0px;
  top: 45px;
`;

const Author = styled.span`
  margin-right: 3px;
  color: #0074cc;
`;

const CreatedAt = styled.span`
  color: #525960;
`;

export const Space = styled.div`
  display: flex;
  flex: 1 1 auto;
  width: 5%;
`;

const QuestionList = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    axios
      .get("/api/questions", {
        headers: { "ngrok-skip-browser-warning": "12" },
      })
      .then((res) => {
        setQuestions(res.data.data);
      });
  }, []);

  return (
    <>
      <MainStyle>
        <div className="title">
          <h1>All Questions</h1>
          <Link to="/askquestions">
            <QustionButton>Ask Question</QustionButton>
          </Link>
        </div>

        {questions.map((question) => {
          return (
            <div className="question_data" key={question.questionId}>
              <List>
                <ListLeft>
                  <span>{`${question.questionVoteCnt} votes`} </span>
                  <span>{`${question.answerCnt} answer`}</span>
                  <span>{`${question.questionViewCnt} views`}</span>
                </ListLeft>
                <ListMain>
                  <Link to={`/questions/?questID=${question.questionId}`}>
                    <Questiontitle>{question.title}</Questiontitle>
                  </Link>

                  <WriterAndtime>
                    <Author>{question.userId}</Author>
                    <CreatedAt>
                      {`asked ${timecheck(question.createdAt)}`}
                    </CreatedAt>
                  </WriterAndtime>
                </ListMain>
              </List>
            </div>
          );
        })}
      </MainStyle>
      <Space />
    </>
  );
};

export default QuestionList;
