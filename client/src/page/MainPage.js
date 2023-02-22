import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import Head from "../components/Header/Head";
import Sidebar from "../components/Sidebar/Sidebar";
import QuestionList from "../components/Questions/QuestionList";
import Footer from "../components/Footer/Footer";

const WrapperBody = styled.div`
  margin: 0 auto;
  display: flex;
`;

const GlobalStyle = createGlobalStyle`
body {
    box-sizing: border-box;
    background: #f0f2f4;
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
    </div>
  );
};

export default Mainpage;
