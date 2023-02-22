import React from "react";
import { createGlobalStyle } from "styled-components";
import Head from "../components/Header/Head";
import Sidebar from "../components/Sidebar/Sidebar";
import MyPage from "../components/Mypage/Mypage";
import Footer from "../components/Footer/Footer";

const GlobalStyle = createGlobalStyle`
body {
    box-sizing: border-box;
    background: #f0f2f4;
    margin: 0;
}
`;

const Mypage = () => {
  return (
    <div>
      <GlobalStyle />
      <Head />
      <Sidebar />
      <MyPage />
      <Footer />
    </div>
  );
};

export default Mypage;
