import React from "react";
import { createGlobalStyle } from "styled-components";
import HeadDrop from "../components/Header/HeadDrop";
import AskQuestions from "../components/AskQuestions/AskQuestions";
import Footer from "../components/Footer/Footer";

const GlobalStyle = createGlobalStyle`
body {
    box-sizing: border-box;
    background:  #ffffff;
    margin: 0;
}
`;

const AskQuestionsPage = () => {
  return (
    <div>
      <GlobalStyle />
      <HeadDrop />
      <AskQuestions />
      <Footer />
    </div>
  );
};

export default AskQuestionsPage;
