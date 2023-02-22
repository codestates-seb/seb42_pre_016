import React from "react";
import { createGlobalStyle } from "styled-components";
import Head from "../components/Header/Head";
import Sidebar from "../components/Sidebar/Sidebar";
import Question from "../components/SingleQuestion/Question";
import Footer from "../components/Footer/Footer";

const SingleQuestionsPage = () => {
  return (
    <div>
      <Head />
      <Sidebar />
      <Question />
      <Footer />
    </div>
  );
};

export default SingleQuestionsPage;
