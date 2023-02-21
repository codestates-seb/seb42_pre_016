import React from "react";
import styled from "styled-components";
import Head from "../components/Header/Head";
import Sidebar from "../components/Sidebar/Sidebar";
import QuestionList from "../components/Questions/QuestionList";
import AskQuestions from "../components/AskQuestions/AskQuestions";

const WrapperBody = styled.div`
  margin: 0 auto;
  display: flex;
`;

const Mainpage = () => {
  return (
    <div>
      <Head />
      <WrapperBody>
        <Sidebar />
        <QuestionList/>
      </WrapperBody>
    </div>
  );
};

export default Mainpage;
