import React from "react";
import { createGlobalStyle } from "styled-components";
import Head from "../components/Header/Head";
import SidebarDropdown from "../components/Sidebar/SidebarDropdown";
import Logout from "../components/Logout/Logout";

const GlobalStyle = createGlobalStyle`
body {
    box-sizing: border-box;
    background: #f0f2f4;
}
`;

const LogputPage = () => {
  return (
    <div>
      <GlobalStyle />
      <Head />
      <SidebarDropdown />
      <Logout />
    </div>
  );
};

export default LogputPage;
