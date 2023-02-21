import React from "react";
import { createGlobalStyle } from "styled-components";
import Head from "../components/Header/Head";
import Sidebar from "../components/Sidebar/Sidebar";
import Question from "../components/SingleQuestion/Question";

const SingleQuestionsPage = () => {
  return (
    <div>
      <Head />
      <Sidebar />
      <Question />
    </div>
  );
};

export default SingleQuestionsPage;
