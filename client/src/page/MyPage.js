import React from "react";
import Head from "../components/Header/Head";
import Sidebar from "../components/Sidebar/Sidebar";
import MyPage from "../components/Mypage/Mypage";
import Footer from "../components/Footer/Footer";

const Mypage = () => {
  return (
    <div>
      <Head />
      <Sidebar />
      <MyPage />
      <Footer />
    </div>
  );
};

export default Mypage;
