import React from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import HeadLogout from "../components/Header/HeadLogout";
import Signup from "../components/Signup/Signup";

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

const SignupPage = () => {
  return (
    <div>
      <GlobalStyle />
      <HeadLogout />
      <Signup />
    </div>
  );
};

export default SignupPage;
