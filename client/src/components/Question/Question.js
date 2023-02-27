import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import instance from "../../api/axios";
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
  // const id = 1;
  const [Question, setQuestion] = useState({});
  const [Answer, setAnswer] = useState([]);
  const [content, setContent] = useState();
  const [loading, setLoading] = useState(false);

  // vote (isVote: 서버에 등록된 투표 이력, isClickVote: 현재 누른 버튼)
  const [VoteQ, setVoteQ] = useState("");
  const [voteA, setVoteA] = useState(0);

  //* 질문 총 정보(data) 가져오기
  useEffect(() => {
    setLoading(true);
    const getQuestion = async () => {
      await axios
        .get(`/api/questions/9`, {
          headers: { "ngrok-skip-browser-warning": "12" },
        })
        .then((res) => {
          setQuestion(res.data.data);
          setContent(res.data.data.content);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    setLoading(false);
    getQuestion();
  }, [loading]);

  //* 질문 id에 맞는 답변 목록 받아오기
  const getAnswer = async () => {
    await axios
      .get(`/api/questions/9`, {
        headers: { "ngrok-skip-browser-warning": "12" },
      })
      .then((res) => {
        setAnswer(res.data.data.answers);
        console.log(res.data.data.answers);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //* 질문 content 가져오기
  useEffect(() => {
    setContent(content);
  }, [content]);

  //* 질문 삭제
  const DeleteQuestion = async () => {
    await axios
      .delete(`/api/questions/9`, {
        headers: { "ngorok-skip-browser-warning": "20230227" },
      })
      // 삭제 후 다시 메인페이지로 이동한다.
      .then(() => {
        window.location.replace("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //* 답변 삭제
  const DeleteAnswer = async (id) => {
    await instance
      .delete(`/api/answers/${id}`)
      .then(() => {
        //질문 페이지 다시 렌더링
        getAnswer();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <QuestionContainer>
      <QuestionHeader>
        <h1>{Question.title}</h1>
        <div>
          <Link to="/askquestions">
            <AskButton>Ask Question</AskButton>
          </Link>
        </div>
      </QuestionHeader>

      <AskDate>
        <div>
          Asked <time>{`${Question.createdAt}`.slice(0, 10)}</time>
        </div>
        <div>
          Modified <time>{`${Question.modifiedAt}`.slice(0, 10)}</time>
        </div>
        <div>view 6</div>
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
                fill={VoteQ === "UPVOTE" ? "#f48225" : "#babfc4"}
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
                fill={VoteQ === "DOWNVOTE" ? "#f48225" : "#babfc4"}
              >
                <path id="DOWNVOTE" d="M2 11h32L18 27 2 11Z"></path>
              </svg>
            </div>
          </LeftBtn>

          {/* 게시글 내용 */}
          <Content>
            <div className="post-area">{content}</div>
            <div className="writer-area">
              <div>
                <span>Share</span>
                <Link to={`/edit/question/${Question.id}`}>Edit</Link>
                <span>Follow</span>
              </div>
              <div></div>
              <div className="flex">
                <div className="user-info">
                  <span className="asked">
                    Asked <time>{`${Question.createdAt}`.slice(0, 10)}</time>
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
                    <span className="user-name">Haizel</span>
                  </div>
                </div>
                <DeleteButton onClick={DeleteQuestion}>Delete</DeleteButton>
              </div>
            </div>
          </Content>
        </QuestionArea>

        {/* 답변 갯수 */}
        <AnswerArea>
          <div className="answer-count">
            <h1> Answer</h1>
          </div>
          {/* 답변 내용 */}
          {Answer.map((SingleA) => (
            <AnswerContent key={SingleA.id}>
              <AnswerVoteForm
                id={SingleA.id}
                voteCount={SingleA.voteCount}
                voteA={voteA}
                setVoteA={setVoteA}
              />
              <Content>
                <div className="post-area">답변 내용</div>
                <div className="writer-area">
                  <div>
                    <span>Share</span>
                    <Link to={`/edit/answer/${SingleA.id}`}>Edit</Link>
                    <span>Follow</span>
                  </div>
                  <div>
                    <span>
                      Edited <time>{`${SingleA.modifiedAt}`.slice(0, 10)}</time>
                    </span>
                  </div>
                  <div className="flex">
                    <div className="user-info">
                      <span className="asked">
                        Asked <time>{`${SingleA.createdAt}`.slice(0, 10)}</time>
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
                        <span className="user-name">{SingleA.memberName}</span>
                      </div>
                    </div>
                    <DeleteButton onClick={DeleteQuestion}>Delete</DeleteButton>
                  </div>
                </div>
              </Content>
            </AnswerContent>
          ))}

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
