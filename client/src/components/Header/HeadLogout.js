import React, { useState } from "react";
import { GrMenu, GrClose } from "react-icons/gr"; // 햄버거 버튼, x 버튼
import { Dropdown } from "../Sidebar/Dropdown";
import { Link } from "react-router-dom";
import Logo from "../../img/logo-stackoverflow.png";
import {
  HeadBar,
  LogoSrc,
  SearchInput,
  Space,
} from "../Style components/Head_styled";
import {
  StatusButton,
  LoginButton,
  SignupButton,
} from "../Style components/HeadLogout_styled";

const HeadLogout = (type) => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <>
      <HeadBar>
        <Space />
        <div className="navbar-wrapper">
          <button className="menuBtn" onClick={handleClick}>
            {click ? <GrClose /> : <GrMenu />}
          </button>
          <div className="dropdown-menu2">
            {click ? <Dropdown page2={type.page2} /> : null}
          </div>
        </div>
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
