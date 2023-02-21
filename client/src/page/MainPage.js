import React from "react";
import Head from "../components/Header/Head";
import Sidebar from "../components/Sidebar/Sidebar";
import QuestionList from "../components/Questions/QuestionList";

const Mainpage = () => {
  return (
    <div>
      <Head />
      <Sidebar />
      <QuestionList/>
    </div>
  );
};

export default Mainpage;
