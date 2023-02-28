import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../../api/axios";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { EditorWrap, ErrorMassage, AnswerButton } from "./Qustion.styled";

const AnswerForm = () => {
  const { id } = useParams();
  const [body, setBody] = useState("");
  const answerRef = useRef();

  //* 유효성 검사 : 댓글 길이는 30자를 넘어야 한다.
  // const [isError, setIsError] = useState(false);
  // const bodyLength = body.length;

  // const onLetters = () => {
  //   const data = answerRef.getInstance().getMarkdown();
  //   console.log(data);
  //   data.length <= 30 ? setIsError(true) : setIsError(false);
  //   setBody(data);
  // };

  // //* 제출 버튼
  // const onSubmit = () => {
  //   addAnswer(id, body);
  // };

  //* post 요청
  const addAnswer = async (id, body) => {
    await axios
      .post(
        `/api/answers`,
        {
          content: body,
          userId: 1,
          questionId: id,
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

  return (
    <div>
      <EditorWrap>
        <CKEditor
          ref={answerRef}
          editor={ClassicEditor}
          onChange={(event, editor) => {
            const data = editor.getData();
            setBody(data);
            console.log(data);
          }}
        />
      </EditorWrap>
      <AnswerButton onClick={() => addAnswer(id, body)}>
        Post Your Answer
      </AnswerButton>
    </div>
  );
};

export default AnswerForm;
