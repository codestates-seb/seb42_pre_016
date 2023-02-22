import React, { Component } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  width: 1100px;
  height: 300px;
  position: absolute;
  left: 3%;
  background: pink;

  .ck-editor__editable_inline {
    width: 1100px;
    min-height: 260px;
  }
`;

class Editor extends Component {
  render() {
    return (
      <Wrapper>
        <div className="editorbox">
          <CKEditor
            editor={ClassicEditor}
            data=" "
            onReady={(editor) => {
              console.log("Editor is ready to use!", editor);
            }}
            onChange={(event, editor) => {
              const data = editor.getData();
              console.log({ event, editor, data });
            }}
            onBlur={(event, editor) => {
              console.log("Blur.", editor);
            }}
            onFocus={(event, editor) => {
              console.log("Focus.", editor);
            }}
          />
        </div>
      </Wrapper>
    );
  }
}

export default Editor;

// config={({ height: 500 }, { width: 700 }, { allowedContent: true })}
