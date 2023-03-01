import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GrMenu, GrClose } from "react-icons/gr"; // 햄버거 버튼, x 버튼
import { Dropdown } from "../Sidebar/Dropdown";
import Logo from "../../img/logo-stackoverflow.png";
import MyPhoto from "../../img/myphoto.jpeg";
import Inbox from "../../img/inbox.png";
import Achievements from "../../img/achievements.png";
import Questions from "../../img/questions.png";
import Community from "../../img/community.png";
import {
  HeadBar,
  LogoSrc,
  ProductsButton,
  SearchInput,
  MyHome,
  Number,
  InboxSrc,
  AchievementsSrc,
  QuestionsSrc,
  CommunitySrc,
  Space,
} from "../Style components/Head_styled";

const Head = (type) => {
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
        <Link to="/main">
          <LogoSrc src={Logo} />
        </Link>
        <ProductsButton>Products</ProductsButton>
        <SearchInput placeholder="Search..."></SearchInput>
        <Link to="/mypage">
          <MyHome src={MyPhoto} />
        </Link>
        <Number>1</Number>
        <InboxSrc src={Inbox} />
        <AchievementsSrc src={Achievements} />
        <QuestionsSrc src={Questions} />
        <Link to="/logout">
          <CommunitySrc src={Community} />
        </Link>
        <Space />
      </HeadBar>
    </>
  );
};

export default Head;
