import styled from "styled-components";

export const QuestionContainer = styled.div`
  flex: 0 1 auto;
  display: flex;
  flex-direction: column;
  width: 1000px;

  padding: 24px;
`;

export const QuestionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;

  h1 {
    font-size: 27px;
    width: 700px;
    overflow-wrap: break-word;
  }
  a {
    color: #3b4045;
  }
`;

export const AskButton = styled.button`
  width: 120px;
  padding: 10px;
  color: #ffffff;
  font-size: 13px;
  border: 1px solid #39739d;
  border-radius: 4px;
  background: #0a95ff;

  &:hover {
    background: #0074cc;
  }
`;

export const AskDate = styled.div`
  display: flex;

  font-size: 13px;
  color: #6a737c;
  border-bottom: 1px solid #d6d9dc;
  padding-bottom: 8px;
  margin-bottom: 16px;

  div {
    margin: 0px 16px 8px 0px;
  }
  time {
    color: #232629;
  }
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
`;

export const QuestionArea = styled.div`
  display: flex;
  width: 100%;
`;

export const LeftBtn = styled.div`
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
  }

  .count {
    font-size: 21px;
    color: #6a737c;
  }

  .icon {
    cursor: pointer;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  .post-area {
    width: 700px;
    overflow-wrap: break-word;
    font-size: 15px;
    margin: 10px 0px;
  }
  .writer-area {
    display: flex;
    justify-content: space-between;
    margin: 16px 0px;

    font-size: 13px;

    span {
      margin: 4px;
      color: #6a737c;
    }
    a {
      margin: 4px;
      color: #6a737c;
    }
    span:first-child {
      margin-left: 0px;
    }
  }

  .user-info {
    display: flex;
    flex-direction: column;
    width: 200px;
    padding: 7px;
    border-radius: 4px;
    background: #d9eaf7;

    .asked {
      margin-bottom: 4px;
      color: #6a737c;
    }

    .user-container {
      display: flex;
      align-items: center;
    }

    .user {
      margin: 4px 6px 0px 0px;
    }

    .user-name {
      color: #0074cc;
    }
  }

  .flex {
    display: flex;
    flex-direction: column;
  }
`;

export const AnswerArea = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    color: #3b4045;
  }

  .answer-count {
    margin: 20px 0px;
  }
`;

export const AnswerContent = styled.div`
  display: flex;
  padding: 16px 0px;
  border-bottom: 1px solid #e3e6e8;
`;

export const AnswerCreate = styled.div`
  .answer-header {
    margin: 20px 0px;
  }
`;

export const DeleteButton = styled.button`
  background: #0a95ff;
  border: transparent;
  border-radius: 4px;
  margin-top: 10px;
  padding: 10px;
  color: #ffffff;

  &:hover {
    background: #0074cc;
  }
`;
