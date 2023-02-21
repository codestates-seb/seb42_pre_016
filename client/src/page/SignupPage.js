import React from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import HeadLogout from "../components/Header/HeadLogout";
import Signup from "../components/Signup/Signup";
import SidebarDropdown from "../components/Sidebar/SidebarDropdown";

const GlobalStyle = createGlobalStyle`
body {
    box-sizing: border-box;
    background: #f0f2f4;
}
`;

const SignupPage = () => {
  return (
    <>
      <GlobalStyle />
      <HeadLogout />
      <SidebarDropdown />
      <Signup />
    </>
  );
};

export default SignupPage;
