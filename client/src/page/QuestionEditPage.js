import React from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import Head from "../components/Header/Head";
import Sidebar from "../components/Sidebar/Sidebar";
import Footer from "../components/Footer/Footer";
import QuestionEdit from "../components/Edit/QuestionEdit";

const GlobalStyle = createGlobalStyle`
body {
    box-sizing: border-box;
    background:  #ffffff;
    margin: 0;
}
`;
const WrapperBody = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
`;

const QuestionEditPage = () => {
  return (
    <div>
      <GlobalStyle />
      <Head />
      <WrapperBody>
      <Sidebar />
      <QuestionEdit />
      </WrapperBody>
      <Footer />
    </div>
  );
};

export default QuestionEditPage;
