import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../../api/axios";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { EditorWrap, ErrorMassage, AnswerButton } from "./Qustion.styled";

const AnswerForm = () => {
  const [body, setBody] = useState("");
  const answerRef = useRef();

  const urlStr = window.location.href;
  const url = new URL(urlStr);
  const urlParams = url.searchParams.get("questID"); //url파라미터값
  console.log(urlParams);

  //* post 요청
  const addAnswer = async (id, body) => {
    await axios
      .post(
        `/api/answers`,
        {
          content: body,
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

  console.log(body);

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
