import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const AnswerVoteForm = ({ id, voteCount, voteA, setVoteA }) => {
  const urlStr = window.location.href;
  const url = new URL(urlStr);
  const urlParams = url.searchParams.get("questID"); //url파라미터값

  const [isVotedA, setIsVotedA] = useState(false);

  //* Answer VoteUp 버튼 눌렀을 때
  const ClickAnswerVoteUp = (e) => {
    //첫투표라면
    if (voteA === false && e.target.id) {
      PatchAnswerVoteUp(e.target.id);
      setVoteA(true);
      //두번 눌렀다면
    } else if (voteA !== false) {
      alert("이미 투표했습니다.");
    }
  };

  //* Answer VoteUp - patch 요청 보내기
  const PatchAnswerVoteUp = async () => {
    await axios
      .patch(`/api/answers/voteUp/${id}`, {
        headers: {
          "ngrok-skip-browser-warning": "12",
        },
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //* Answer VoteDown 버튼 눌렀을 때
  const ClickAnswerVoteDown = (e) => {
    //첫투표라면
    if (voteA === false && e.target.id) {
      PatchAnswerVoteDown();
      setVoteA(true);
      //두번 눌렀다면
    } else if (voteA !== false) {
      alert("이미 투표했습니다.");
    }
  };

  //* Question VoteDown - patch 요청 보내기
  const PatchAnswerVoteDown = async () => {
    await axios
      .patch(`/api/answers/voteDown/${id}`, {
        headers: {
          "ngrok-skip-browser-warning": "12",
        },
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //* Answer Vote 결과가 바뀔 때마다 투표수 바로 업데이트
  useEffect(() => {
    setVoteA(voteA);
  }, [voteA]);

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
            fill={isVotedA === "DOWNVOTE" ? "#f48225" : "#babfc4"}
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
