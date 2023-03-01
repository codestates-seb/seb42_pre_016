import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { Space } from "../AskQuestions/AskQuestions";
import axios from "axios";
import { useNavigate, useParams, useLocation, Link } from "react-router-dom";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const AnswerEdit = () => {
  const { state } = useLocation();
  const selectedQuestionId = state.questionId;
  const selectedAnswerId = state.answerId;
  const selectedUserId = state.userId;

  const { id } = useParams();
  const [question, setQuestion] = useState({});
  const [answer, setAnswer] = useState({});
  const [answers, setAnswers] = useState([]);
  const editARef = useRef();
  const navigate = useNavigate();

  const getQuestion = async () => {
    await axios
      .get(`/api/questions/${selectedUserId}`, {
        headers: { "ngrok-skip-browser-warning": "12" },
      })
      .then((res) => {
        setQuestion(res.data.data);
        setAnswers(res.data.data.answers); //댓글 전체 목록
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //* 질문 / 답변 원문 가져오기
  useEffect(() => {
    getQuestion();
    answers.filter((val) => {
      if (val.answerId === selectedAnswerId) {
        setAnswer(val);
        console.log(val);
      }
    });
  }, []);

  //* 제출버튼
  const handleSubmit = (e) => {
    e.preventDefault();
    editAnswer(); //patch 요청
    window.location.replace(`/questions/?questID=${selectedQuestionId}`);
  };

  //* 취소버튼
  const handleCancel = () => {
    window.location.replace(`/questions/?questID=${selectedQuestionId}`);
  };

  //* 답변 수정 patch 요청
  const editAnswer = async () => {
    await axios
      .patch(
        `/api/answers/${selectedAnswerId}`,
        {
          content: `${answer.content}`,
        },
        {
          headers: {
            "ngrok-skip-browser-warning": "12",
          },
        }
      )
      .then(() => {
        window.location.replace(`/questions/?questID=${selectedQuestionId}`);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // 질문 제목 (링크) 질문 params ?questID=(숫자)
  // 답변 에디터 내에 답변 내용 똑같이 복붙 getquestion-answer
  // 답변 에디터 아래에 답변 내용 getquestions-answer
  return (
    <AnswerEditWrapper>
      <AnswerEditContainer>
        <Space />
        <EditNotice>
          <p>Your edit will be placed in a queue until it is peer reviewed.</p>
          <p>
            We welcome edits that make the post easier to understand and more
            valuable for readers. Because community members review edits, please
            try to make the post substantially better than how you found it, for
            example, by fixing grammar or adding additional resources and
            hyperlinks.
          </p>
        </EditNotice>
        <QuestionText>
          <Link to={`/questions/?questID=${selectedQuestionId}`}>
            <div className="h1">{question.title}</div>
          </Link>
          {question.content}
        </QuestionText>
        <BodyWrapper>
          <Answer>Answer</Answer>
          <EditorContainer>
            {answer.content && (
              <CKEditor
                ref={editARef}
                editor={ClassicEditor}
                // onFocus={(event, editor) => {
                //   if (answer.content) {
                //     editor.setData(answer.content);
                //   }
                // }}
                onReady={(editor) => {
                  editor.setData(answer.content);
                }}
                onChange={(event, editor) => {
                  const data = editor.getData();
                  const cutData = data.slice(3, data.length - 4); //앞뒤 <p></p> 마크다운 제거
                  editor.setData(cutData);
                  // answer.content = cutData;
                }}
              />
            )}
          </EditorContainer>
          <AnswerText>{answer.content}</AnswerText>
        </BodyWrapper>
        <ButtonWrapper>
          <SaveEditsButton onClick={handleSubmit}>Save edits</SaveEditsButton>
          <CancelButton onClick={handleCancel}>Cancel</CancelButton>
        </ButtonWrapper>
      </AnswerEditContainer>
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
    </AnswerEditWrapper>
  );
};

const AnswerEditWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  display: flex;
  /* flex: 1 1 auto; */
`;

const AnswerEditContainer = styled.div`
  width: fit-content;
  height: auto;
  margin-left: 10px;
  box-sizing: border-box;
  position: relative;
`;

const EditNotice = styled.div`
  background-color: #fcf7e4;
  border: solid 1px #e3d085;
  padding: 0px 20px;
  width: 745px;
  margin: 25px;
`;

const BodyWrapper = styled.div`
  width: 790px;
`;

const Answer = styled.div`
  background-color: white;
  padding: 20px;
  width: 790px;
  margin-top: 25px;
  margin-bottom: 20px;
  font-size: 23px;
  margin-left: 25px;
`;

const QuestionText = styled.form`
  background-color: white;
  padding: 20px 5px;
  width: 780px;
  margin-top: 20px;
  font-size: 17px;
  margin-left: 25px;
  border-bottom: 1px black dotted;
  .h1 {
    font-size: 22px;
    margin: 3px 0;
  }
`;

const AnswerText = styled.form`
  background-color: white;
  width: 790px;
  margin-top: 20px;
  font-size: 18px;
  margin-left: 25px;
  border: 1px black dotted;
`;

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
`;

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

export default AnswerEdit;
