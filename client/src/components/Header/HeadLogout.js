import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Logo from "../../img/logo-stackoverflow.png";
import Sidebar from "../../img/sidebar.png";
import {
  HeadBar,
  Line,
  LogoSrc,
  SearchInput,
  Space,
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
        <Space />
        <SidebarSrc src={Sidebar} />
        <Link to="/">
          <LogoSrc src={Logo} />
        </Link>
        <StatusButton>About</StatusButton>
        <StatusButton>Products</StatusButton>
        <StatusButton>ForTeams</StatusButton>
        <SearchInput placeholder="Search..."></SearchInput>
        <Link to="/login">
          <LoginButton>Log in</LoginButton>
        </Link>
        <Link to="/signup">
          <SignupButton>Sign up</SignupButton>
        </Link>
        <Space />
      </HeadBar>
    </>
  );
};

export default HeadLogout;
