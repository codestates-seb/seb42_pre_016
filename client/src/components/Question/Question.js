import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import AnswerVoteForm from "./AnswerVoteForm";
import AnswerForm from "./AnswerForm";
import {
  QuestionContainer,
  AskButton,
  AskDate,
  Section,
  QuestionArea,
  LeftBtn,
  Content,
  AnswerArea,
  AnswerContent,
  AnswerCreate,
  DeleteButton,
  QuestionHeader,
} from "./Qustion.styled";

const Question = () => {
  const { id } = useParams();
  const [singleQ, setSingleQ] = useState({});
  const [dataA, setDataA] = useState([]);
  const [content, setContent] = useState();
  // vote (isVote: 서버에 등록된 투표 이력, isClickVote: 현재 누른 버튼)
  const [isVotedQ, setIsVotedQ] = useState("");
  const [voteA, setVoteA] = useState(0);

  return (
    <QuestionContainer>
      <QuestionHeader>
        <h1>타이틀 제목</h1>
        <div>
          <AskButton>Ask Question</AskButton>
        </div>
      </QuestionHeader>

      <AskDate>
        <div>Asked today</div>
        <div>Modified today</div>
        <div>view 6 times</div>
      </AskDate>

      <Section>
        <QuestionArea>
          <LeftBtn>
            <div className="btn_frame">
              <svg
                className="icon"
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill={isVotedQ === "UPVOTE" ? "#f48225" : "#babfc4"}
              >
                <path id="UPVOTE" d="M2 25h32L18 9 2 25Z"></path>
              </svg>
            </div>
            <div className="count">0</div>
            <div className="btn_frame">
              <svg
                className="icon"
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill={isVotedQ === "DOWNVOTE" ? "#f48225" : "#babfc4"}
              >
                <path id="DOWNVOTE" d="M2 11h32L18 27 2 11Z"></path>
              </svg>
            </div>
          </LeftBtn>

          {/* 게시글 내용 */}
          <Content>
            <div className="post-area">질문글 내용</div>
            <div className="writer-area">
              <div>
                <span>Share</span>
                <Link to={`/edit/question/${singleQ.id}`}>Edit</Link>
                <span>Follow</span>
              </div>
              <div>
                <span>
                  Edited <time>{`${singleQ.modifiedAt}`.slice(0, 10)}</time>
                </span>
              </div>
              <div className="flex">
                <div className="user-info">
                  <span className="asked">asked 29 secs ago</span>
                  <div className="user-container">
                    <div className="user">
                      <svg
                        className="user-icon"
                        width="24"
                        heigth="24"
                        viewBox="0 0 1000 1000"
                      >
                        <path d="M500,10C227,10,10,227,10,500s217,490,490,490s490-217,490-490S773,10,500,10z M500,206c77,0,140,63,140,140c0,77-63,140-140,140c-77,0-140-63-140-140C360,269,423,206,500,206z M801,773c-77,77-182,133-301,133s-224-49-301-133c-21-21-21-56,0-77c77-84,182-140,301-140s224,56,301,140C822,717,822,752,801,773z" />
                      </svg>
                    </div>
                    <span className="user-name">Haizel</span>
                  </div>
                </div>
              </div>
            </div>
          </Content>
        </QuestionArea>

        {/* 답변 갯수 */}
        <AnswerArea>
          <div className="answer-count">
            <h1>1 Answer</h1>
          </div>
          {/* 답변 내용 */}
          <AnswerContent key={dataA.id}>
            <AnswerVoteForm
              id={dataA.id}
              voteCount={dataA.voteCount}
              voteA={voteA}
              setVoteA={setVoteA}
            />
            <Content>
              <div className="post-area">답변 내용</div>
              <div className="writer-area">
                <div>
                  <span>Share</span>
                  <Link to={`/edit/answer/${dataA.id}`}>Edit</Link>
                  <span>Follow</span>
                </div>
                <div>
                  <span>
                    Edited <time>{`${dataA.modifiedAt}`.slice(0, 10)}</time>
                  </span>
                </div>
                <div className="flex">
                  <div className="user-info">
                    <span className="asked">
                      Asked <time>{`${dataA.createdAt}`.slice(0, 10)}</time>
                    </span>
                    <div className="user-container">
                      <div className="user">
                        <svg
                          className="user-icon"
                          width="24"
                          heigth="24"
                          viewBox="0 0 1000 1000"
                        >
                          <path d="M500,10C227,10,10,227,10,500s217,490,490,490s490-217,490-490S773,10,500,10z M500,206c77,0,140,63,140,140c0,77-63,140-140,140c-77,0-140-63-140-140C360,269,423,206,500,206z M801,773c-77,77-182,133-301,133s-224-49-301-133c-21-21-21-56,0-77c77-84,182-140,301-140s224,56,301,140C822,717,822,752,801,773z" />
                        </svg>
                      </div>
                      <span className="user-name">{dataA.memberName}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Content>
          </AnswerContent>

          {/* 답변 작성 */}
          <AnswerCreate>
            <div className="answer-header">
              <h1>Your Answer</h1>
            </div>
            <AnswerForm />
          </AnswerCreate>
        </AnswerArea>
      </Section>
    </QuestionContainer>
  );
};

export default Question;
