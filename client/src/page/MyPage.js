import React from "react";
import Head from "../components/Header/Head";
import Sidebar from "../components/Sidebar/Sidebar";
import MyPage from "../components/Mypage/Mypage";

const Mypage = () => {
  return (
    <div>
      <Head />
      <Sidebar />
      <MyPage />
    </div>
  );
};

export default Mypage;
