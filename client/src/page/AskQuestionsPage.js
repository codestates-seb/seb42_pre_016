import React from "react";
import { createGlobalStyle } from "styled-components";
import Head from "../components/Header/Head";
import Sidebar from "../components/Sidebar/Sidebar";
import AskQuestions from "../components/AskQuestions/AskQuestions";

const GlobalStyle = createGlobalStyle`
body {
    box-sizing: border-box;
    background: #f0f2f4;
}
`;

const AskQuestionsPage = () => {
  return (
    <div>
      <GlobalStyle />
      <Head />
      <Sidebar />
      <AskQuestions />
    </div>
  );
};

export default AskQuestionsPage;
