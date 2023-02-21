import React from "react";
import {
  HeadWrapper,
  H1Text,
  AskButton,
  SubWrapper,
  SubText,
  Line,
} from "../Style components/Question_styled";

const Qheader = () => {
  return (
    <div>
      <HeadWrapper>
        <H1Text>
          In the Finn example（tfc_end2end_example） ， I cannot run this cell
        </H1Text>
        <AskButton>Ask Question</AskButton>
        <SubWrapper left="2%">
          <SubText color="#6f7780">Asked</SubText>
          <SubText left="45px">Today</SubText>
        </SubWrapper>
        <SubWrapper left="9.5%">
          <SubText color="#6f7780">Modified</SubText>
          <SubText left="60px">Today</SubText>
        </SubWrapper>
        <SubWrapper left="18%">
          <SubText color="#6f7780">Viewed</SubText>
          <SubText left="50px">6times</SubText>
        </SubWrapper>
        <Line />
      </HeadWrapper>
    </div>
  );
};

export default Qheader;
