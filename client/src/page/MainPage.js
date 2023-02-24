import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import Head from "../components/Header/Head";
import Sidebar from "../components/Sidebar/Sidebar";
import QuestionList from "../components/Questions/QuestionList";
import Footer from "../components/Footer/Footer";
import AskQuestions from "../components/AskQuestions/AskQuestions";
import QuestionEditPage from "./QuestionEditPage";
import AnswerEdit from "../components/Edit/AnswerEdit";
import AnswerEditPage from "./AnswerEditPage";

const WrapperBody = styled.div`
  margin: 0 auto;
  display: flex;
`;

const GlobalStyle = createGlobalStyle`
body {
    box-sizing: border-box;
    background:  #ffffff;
    margin: 0;
}
`;

const Mainpage = () => {
  return (
    <div>
      <GlobalStyle />
      <Head />
      <WrapperBody>
        <Sidebar />
        <QuestionList />
      </WrapperBody>
      <Footer />
      {/* <AnswerEditPage /> */}
    </div>
  );
};

export default Mainpage;
