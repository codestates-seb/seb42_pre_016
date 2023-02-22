import React from "react";
import { createGlobalStyle } from "styled-components";
import Head from "../components/Header/Head";
import AskQuestions from "../components/AskQuestions/AskQuestions";
import Footer from "../components/Footer/Footer";
import SidebarDropdown from "../components/Sidebar/SidebarDropdown";

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
      <SidebarDropdown />
      <AskQuestions />
      <Footer />
    </div>
  );
};

export default AskQuestionsPage;
