import React, { useState } from "react";
import {
  SideWrapper,
  Button,
  Button2,
  BodyWrapper,
  MainWrapper,
  ArrowDownSvg,
  ArrowUpSvg,
  BookmarkSvg,
  HistorySvg,
  EditWrapper,
  EditText,
  Line,
} from "../Style components/Question_styled";

const Qbody = () => {
  const [vote, setVote] = useState(0);

  return (
    <div>
      <BodyWrapper>
        <SideWrapper>
          <Button onClick={() => setVote(vote + 1)}>
            <ArrowUpSvg />
          </Button>
          <span>{vote}</span>
          <Button onClick={() => setVote(vote - 1)}>
            <ArrowDownSvg />
          </Button>
          <Button2>
            <BookmarkSvg />
          </Button2>
          <Button>
            <HistorySvg />
          </Button>
        </SideWrapper>
        <MainWrapper>{/* 본문 내용은 여기에 ! */}</MainWrapper>
        <EditWrapper>
          <EditText>Edit</EditText>
        </EditWrapper>
      </BodyWrapper>
    </div>
  );
};

export default Qbody;
