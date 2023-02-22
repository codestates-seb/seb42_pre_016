import React from "react";
import { createGlobalStyle } from "styled-components";
import Login from "../components/Login/Login";
import HeadLogout from "../components/Header/HeadLogout";

const GlobalStyle = createGlobalStyle`
body {
    box-sizing: border-box;
    background: #f0f2f4;
    margin: 0;
}
`;

const LoginPage = () => {
  return (
    <>
      <HeadLogout />
      <GlobalStyle />
      <Login />
    </>
  );
};

export default LoginPage;
