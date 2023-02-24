import { useState, useEffect } from "react";
import styled from "styled-components";

const VoteBtn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding-right: 16px;

  .btn_frame {
    height: 36px;
    background: inherit;
    border: none;
    padding: 0;
    overflow: visible;
    cursor: pointer;
  }

  .count {
    font-size: 21px;
    color: #6a737c;
  }

  .icon {
    cursor: pointer;
  }
`;

const AnswerVoteForm = () => {
  const [isVotedA, setIsVotedA] = useState("");

  return (
    <div>
      <VoteBtn>
        <div className="btn_frame">
          <svg
            className="icon"
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill={isVotedA === "UPVOTE" ? "#f48225" : "#babfc4"}
          >
            <path id="UPVOTE" d="M2 25h32L18 9 2 25Z"></path>
          </svg>
        </div>
        <div className="count">0</div>
        <div className="btn_frame">
          <svg
            className="icon"
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill={isVotedA === "DOWNVOTE" ? "#f48225" : "#babfc4"}
          >
            <path id="DOWNVOTE" d="M2 11h32L18 27 2 11Z"></path>
          </svg>
        </div>
      </VoteBtn>
    </div>
  );
};

export default AnswerVoteForm;
