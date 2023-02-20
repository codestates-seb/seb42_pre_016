import React from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import HeadLogout from "../components/Header/HeadLogout";
import Login from "../components/Login/Login";

const GlobalStyle = createGlobalStyle`
* {
    margin : 0;
    padding: 0;
}
body {
    box-sizing: border-box;
    background: #f0f2f4;
}
`;

const LoginPage = () => {
  return (
    <>
      <GlobalStyle />
      <HeadLogout />
      <Login />
    </>
  );
};

export default LoginPage;
