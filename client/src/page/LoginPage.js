import React from "react";
import { createGlobalStyle } from "styled-components";
import Login from "../components/Login/Login";
import SidebarDropdown from "../components/Sidebar/SidebarDropdown";
import HeadLogout from "../components/Header/HeadLogout";

const GlobalStyle = createGlobalStyle`
body {
    box-sizing: border-box;
    background: #f0f2f4;
}
`;

const LoginPage = () => {
  return (
    <>
      <HeadLogout />
      <GlobalStyle />
      <SidebarDropdown />
      <Login />
    </>
  );
};

export default LoginPage;
