import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../img/logo-stackoverflow.png";
import MyPhoto from "../../img/myphoto.jpeg";
import Inbox from "../../img/inbox.png";
import Achievements from "../../img/achievements.png";
import Questions from "../../img/questions.png";
import Community from "../../img/community.png";
import {
  HeadBar,
  Line,
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

const Head = () => {
  return (
    <>
      <Line />
      <HeadBar>
        <Space />
        <Link to="/">
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
