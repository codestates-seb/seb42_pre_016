import React from "react";
import { createGlobalStyle } from "styled-components";
import HeadDrop from "../components/Header/HeadDrop";
import Logout from "../components/Logout/Logout";

const GlobalStyle = createGlobalStyle`
body {
    box-sizing: border-box;
    background: #f0f2f4;
    margin: 0;
}
`;

const LogoutPage = () => {
  return (
    <div>
      <GlobalStyle />
      <HeadDrop />
      <Logout />
    </div>
  );
};

export default LogoutPage;
