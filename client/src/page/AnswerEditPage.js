import React from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import Head from "../components/Header/Head";
import Sidebar from "../components/Sidebar/Sidebar";
import Footer from "../components/Footer/Footer";

const GlobalStyle = createGlobalStyle`
body {
    box-sizing: border-box;
    background:  #ffffff;
    margin: 0;
}
`;
const WrapperBody = styled.div`
  margin: 0 auto;
  display: flex;
`;

const Mypage = () => {
  return (
    <div>
      <GlobalStyle />
      <Head />
      <WrapperBody>
      <Sidebar />
      {/* 답변수정페이지 */}
      </WrapperBody>
      <Footer />
    </div>
  );
};

export default Mypage;
