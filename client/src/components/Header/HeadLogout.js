import React from "react";
import styled from "styled-components";
import Logo from "../../img/logo-stackoverflow.png";
import Sidebar from "../../img/sidebar.png";
import {
  HeadBar,
  Line,
  LogoSrc,
  SearchInput,
} from "../Style components/Head_styled";
import {
  SidebarSrc,
  StatusButton,
  LoginButton,
  SignupButton,
} from "../Style components/HeadLogout_styled";

const HeadLogout = () => {
  return (
    <>
      <Line />
      <HeadBar>
        <SidebarSrc src={Sidebar} />
        <LogoSrc src={Logo} />
        <StatusButton>About</StatusButton>
        <StatusButton>Products</StatusButton>
        <StatusButton>ForTeams</StatusButton>
        <SearchInput placeholder="       Search..."></SearchInput>
        <LoginButton>Log in</LoginButton>
        <SignupButton>Sign up</SignupButton>
      </HeadBar>
    </>
  );
};

export default HeadLogout;
