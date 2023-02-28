import React, { useState } from "react";
import {
  AHeadWrapper,
  H4Text,
  ASideWrapper,
  Button,
  Button2,
  ABodyWrapper,
  AMainWrapper,
  ArrowDownSvg,
  ArrowUpSvg,
  BookmarkSvg,
  HistorySvg,
  AEditWrapper,
  EditText,
} from "../Style components/Question_styled";

const Answers = () => {
  const [vote, setVote] = useState(0);

  return (
    <div>
      <ABodyWrapper>
        <AHeadWrapper>
          <H4Text>
            In the Finn example（tfc_end2end_example） ， I cannot run this cell
          </H4Text>
        </AHeadWrapper>
        <ASideWrapper>
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
        </ASideWrapper>
        <AMainWrapper></AMainWrapper>
        <AEditWrapper>
          <EditText>Edit</EditText>
        </AEditWrapper>
      </ABodyWrapper>
    </div>
  );
};

export default Answers;
