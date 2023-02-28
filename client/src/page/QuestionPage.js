import React from "react";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import Head from "../components/Header/Head";
import Sidebar from "../components/Sidebar/Sidebar";
import Question from "../components/Question/Question";
import Footer from "../components/Footer/Footer";

const GlobalStyle = createGlobalStyle`
body {
    box-sizing: border-box;
    background:  #ffffff;
    margin: 0;
}
`;

const WrapperBody = styled.div`
  margin: 0 auto;
  display: flex;
`;

export const Space = styled.span`
  display: flex;
  flex: 1 1 auto;
  width: 10px;
`;

const SingleQuestionsPage = () => {
  return (
    <div>
      <GlobalStyle />
      <Head />
      <WrapperBody>
        <Sidebar />
        <Question />
        <Space />
      </WrapperBody>
      <Footer />
    </div>
  );
};

export default SingleQuestionsPage;
