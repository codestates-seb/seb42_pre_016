import { useState, useEffect, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import AnswerVoteForm from "./AnswerVoteForm";
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
  EditorWrap,
  AnswerButton,
} from "./Qustion.styled";

const Question = () => {
  const urlStr = window.location.href;
  const url = new URL(urlStr);
  const urlParams = url.searchParams.get("questID"); //url파라미터값

  const { id } = useParams(); //vote에 있는 1도

  const [Question, setQuestion] = useState({});
  const [Answer, setAnswer] = useState([]);
  const [content, setContent] = useState();
  const [loading, setLoading] = useState(false);
  const [body, setBody] = useState("");
  const answerRef = useRef();

  //* vote (isVote: 서버에 등록된 투표 이력, isClickVote: 현재 누른 버튼)
  const [VoteQ, setVoteQ] = useState(false);
  const [voteA, setVoteA] = useState(false);

  //* 질문 총 정보(data) 가져오기
  useEffect(() => {
    setLoading(true);
    const getQuestion = async () => {
      await axios
        .get(`/api/questions/${urlParams}`, {
          headers: { "ngrok-skip-browser-warning": "12" },
        })
        .then((res) => {
          setQuestion(res.data.data);
          setContent(res.data.data.content);
          setAnswer(res.data.data.answers);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    setLoading(false);
    getQuestion();
  }, [loading, VoteQ, voteA]);

  //* 질문 id에 맞는 답변 목록 받아오기
  const getAnswer = async () => {
    await axios
      .get(`/api/questions/${urlParams}`, {
        headers: { "ngrok-skip-browser-warning": "12" },
      })
      .then((res) => {
        setAnswer(res.data.data.answers);
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
      .delete(`/api/questions/${urlParams}`, {
        headers: { "ngrok-skip-browser-warning": "12" },
      })
      // 삭제 후 다시 메인페이지로 이동
      .then(() => {
        window.location.replace("/main");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //* 답변 삭제
  const DeleteAnswer = async (id) => {
    await axios
      .delete(`/api/answers/${id}`, {
        headers: { "ngrok-skip-browser-warning": "12" },
      })
      .then(() => {
        //질문 페이지 다시 렌더링
        getAnswer();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //* 새 답변 post 요청
  const addAnswer = async () => {
    axios.defaults.withCredentials = true;
    await axios
      .post(
        `/api/answers`,
        {
          content: `${body}`,
          userId: 1,
          questionId: `${urlParams}`,
        },
        {
          headers: {
            "ngrok-skip-browser-warning": "12",
          },
        }
      )
      .then(() => {
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //* Question VoteUp 버튼 눌렀을 때
  const ClickQuestionVoteUp = (e) => {
    //첫투표라면
    if (VoteQ === false && e.target.id) {
      PatchQuestionVoteUp(e.target.id);
      setVoteQ(true);
      //두번 눌렀다면
    } else if (VoteQ !== false) {
      alert("이미 투표했습니다.");
    }
  };

  //* Question VoteUp - patch 요청 보내기
  const PatchQuestionVoteUp = async () => {
    await axios
      .patch(`/api/questions/voteUp/${urlParams}`, {
        headers: {
          "ngrok-skip-browser-warning": "12",
        },
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //* Question VoteDown 버튼 눌렀을 때
  const ClickQuestionVoteDown = (e) => {
    //첫투표라면
    if (VoteQ === false && e.target.id) {
      PatchQuestionVoteDown();
      setVoteQ(true);
      //두번 눌렀다면
    } else if (VoteQ !== false) {
      alert("이미 투표했습니다.");
    }
  };

  //* Question VoteDown - patch 요청 보내기
  const PatchQuestionVoteDown = async () => {
    await axios
      .patch(`/api/questions/voteDown/${urlParams}`, {
        headers: {
          "ngrok-skip-browser-warning": "12",
        },
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //* Question Vote 결과가 바뀔 때마다 투표수 바로 업데이트
  useEffect(() => {
    setVoteQ(VoteQ);
  }, [VoteQ]);

  //* 답변 투표에 따른 상태 변경 발생할 때마다 재실행
  useEffect(() => {
    getAnswer();
  }, [voteA]);

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
        <div>
          view <time>{`${Question.questionViewCnt}`.slice(0, 10)}</time>
        </div>
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
                <path
                  id="UPVOTE"
                  d="M2 25h32L18 9 2 25Z"
                  onClick={ClickQuestionVoteUp}
                ></path>
              </svg>
            </div>
            <div className="count">{Question.questionVoteCnt}</div>
            <div className="btn_frame">
              <svg
                className="icon"
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill={VoteQ === "DOWNVOTE" ? "#f48225" : "#babfc4"}
              >
                <path
                  id="DOWNVOTE"
                  d="M2 11h32L18 27 2 11Z"
                  onClick={ClickQuestionVoteDown}
                ></path>
              </svg>
            </div>
          </LeftBtn>

          {/* 게시글 내용 */}
          <Content>
            <div className="post-area">{content}</div>
            <div className="writer-area">
              <div>
                <span>Share</span>
                <Link to={`/questionedit/?questID=${urlParams}`}>Edit</Link>
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
            <h1>{Answer.length} Answer</h1>
          </div>
          {/* 답변 내용 */}
          {Answer.map((SingleA) => (
            <AnswerContent key={SingleA.answerId}>
              <AnswerVoteForm
                //AnswerVoteForm에 props으로 내려준다.
                id={SingleA.answerId}
                voteCount={SingleA.answerVoteCnt}
                voteA={voteA}
                setVoteA={setVoteA}
              />
              <Content>
                <div className="post-area">{SingleA.content}</div>
                <div className="writer-area">
                  <div>
                    <span>Share</span>
                    <Link
                      to={"/answeredit"}
                      state={{
                        questionId: Question.questionId,
                        answerId: SingleA.answerId,
                        userId: urlParams,
                      }}
                    >
                      Edit
                    </Link>
                    <span>Follow</span>
                  </div>
                  <div></div>
                  <div className="flex">
                    <div className="user-info">
                      <span className="asked">
                        Answered
                        <time>{`${SingleA.createdAt}`.slice(0, 10)}</time>
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
                        <span className="user-name">Amy</span>
                      </div>
                    </div>
                    <DeleteButton
                      onClick={() => DeleteAnswer(SingleA.answerId)}
                    >
                      Delete
                    </DeleteButton>
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

            {/* 답변 에디터 */}
            <EditorWrap>
              <CKEditor
                ref={answerRef}
                editor={ClassicEditor}
                onChange={(event, editor) => {
                  const data = editor.getData();
                  const cutData = data.slice(3, data.length - 4); //앞뒤 <p></p> 마크다운 제거
                  setBody(cutData);
                  console.log(cutData);
                }}
              />
            </EditorWrap>
            <AnswerButton onClick={() => addAnswer(id, body)}>
              Post Your Answer
            </AnswerButton>
          </AnswerCreate>
        </AnswerArea>
      </Section>
    </QuestionContainer>
  );
};

export default Question;
