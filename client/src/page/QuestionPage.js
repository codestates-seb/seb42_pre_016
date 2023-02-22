import React from "react";
import { createGlobalStyle } from "styled-components";
import Head from "../components/Header/Head";
import Sidebar from "../components/Sidebar/Sidebar";
import Question from "../components/SingleQuestion/Question";
import Footer from "../components/Footer/Footer";

const GlobalStyle = createGlobalStyle`
body {
    box-sizing: border-box;
    background: #f0f2f4;
    margin: 0;
}
`;

const SingleQuestionsPage = () => {
  return (
    <div>
      <GlobalStyle />
      <Head />
      <Sidebar />
      <Question />
      <Footer />
    </div>
  );
};

export default SingleQuestionsPage;
