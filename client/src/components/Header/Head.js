import React from "react";
import styled from "styled-components";
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
        <LogoSrc src={Logo} />
        <ProductsButton>Products</ProductsButton>
        <SearchInput placeholder="       Search..."></SearchInput>
        <MyHome src={MyPhoto} />
        <Number>1</Number>
        <InboxSrc src={Inbox} />
        <AchievementsSrc src={Achievements} />
        <QuestionsSrc src={Questions} />
        <CommunitySrc src={Community} />
        <Space />
      </HeadBar>
    </>
  );
};

export default Head;
