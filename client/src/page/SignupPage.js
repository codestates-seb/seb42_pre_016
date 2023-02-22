import React from "react";
import { createGlobalStyle } from "styled-components";
import HeadLogout from "../components/Header/HeadLogout";
import Signup from "../components/Signup/Signup";

const GlobalStyle = createGlobalStyle`
body {
    box-sizing: border-box;
    background: #f0f2f4;
    margin: 0;
}
`;

const SignupPage = () => {
  return (
    <>
      <GlobalStyle />
      <HeadLogout />
      <Signup />
    </>
  );
};

export default SignupPage;
