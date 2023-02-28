import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const AnswerVoteForm = ({ id, voteCount, voteA, setVoteA }) => {
  const [isVotedA, setIsVotedA] = useState("");

  //* VoteUp 버튼 눌렀을 때
  const ClickAnswerVoteUp = (e) => {
    //첫투표라면
    if (isVotedA === "" && e.target.id) {
      PatchAnswerVoteUp(e.target.id);
    } else {
      return;
    }
  };

  //* VoteUp - patch 요청 보내기
  const PatchAnswerVoteUp = async () => {
    await axios
      .patch(`/api/answers/voteUp/1`, {
        headers: {
          "ngrok-skip-browser-warning": "12",
        },
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //* VoteDown 버튼 눌렀을 때
  const ClickAnswerVoteDown = (e) => {
    //첫투표라면
    if (isVotedA === "" && e.target.id) {
      PatchAnswerVoteDown(e.target.id);
    }
  };

  //* VoteUp - patch 요청 보내기
  const PatchAnswerVoteDown = async () => {
    await axios
      .patch(`/api/answers/voteDown/1`, {
        headers: {
          "ngrok-skip-browser-warning": "12",
        },
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //* 투표 정보 즉각 업데이트 (투표 post 또는 patch 할 때마다 발생하도록)
  useEffect(() => {
    PatchAnswerVoteUp();
    PatchAnswerVoteDown();
  }, [isVotedA]);

  return (
    <div>
      <VoteBtn>
        <div className="btn_frame">
          <svg
            className="icon"
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill={isVotedA ? "#f48225" : "#babfc4"}
          >
            <path
              id="UPVOTE"
              d="M2 25h32L18 9 2 25Z"
              onClick={(e) => {
                ClickAnswerVoteUp(e);
              }}
            ></path>
          </svg>
        </div>
        <div className="count">{voteCount}</div>
        <div className="btn_frame">
          <svg
            className="icon"
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill={isVotedA ? "#f48225" : "#babfc4"}
          >
            <path
              id="DOWNVOTE"
              d="M2 11h32L18 27 2 11Z"
              onClick={(e) => {
                ClickAnswerVoteDown(e);
              }}
            ></path>
          </svg>
        </div>
      </VoteBtn>
    </div>
  );
};

export default AnswerVoteForm;

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
