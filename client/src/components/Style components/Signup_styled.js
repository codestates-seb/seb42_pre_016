import styled from "styled-components";

//* new styled component

export const Container = styled.section`
  display: flex;
  background-color: rgb(237, 239, 240);
  justify-content: center;
  margin-top: 120px;
`;

export const LeftSideContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 290px 30px 20px 100px;
  font-size: 17px;
  .greyfont {
    color: grey;
    font-size: 14px;
  }
  & link {
    font-size: 12px;
    font-weight: 500;
  }
  & h1 {
    justify-content: flex-start;
    font-size: 27.2px;
    font-weight: 500;
    margin-left: 10px;
    margin-bottom: 5px;
  }
`;

export const SignupContainer = styled.section`
  width: 400px;
  display: flex;
  flex-direction: column;
  margin: 50px 40px 20px 100px;

  .social-signup-container {
    width: 360px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
  }
  .social-signup-container > button {
    margin: 4px 0px;
    padding: 14px;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    font-weight: 500;
    border-radius: 5px;
    text-decoration: none;
    cursor: pointer;
    > span {
      margin-left: 6px;
    }
  }

  .google {
    color: #2f3337;
    background-color: #ffffff;
    border: 1px solid #cbcbcbe6;
    &:hover {
      background-color: #f5f5f5;
      color: #2f3337;
    }
  }
  .github {
    color: #ffffff;
    background-color: #2f3337;
    border-color: transparent;
    &:hover {
      background-color: #000000;
      color: #ffffff;
    }
  }
  .facebook {
    color: #ffffff;
    background-color: #385499;
    border-color: transparent;
    &:hover {
      background-color: #364984;
      color: #ffffff;
    }
  }

  .message {
    color: red;
  }

  .account-signup-container {
    width: 320px;
    height: 550px;
    margin-bottom: 30px;
    padding: 30px 20px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px #a7a7a7;
    background-color: #ffffff;
    > div {
      margin-bottom: 25px;
    }
    & input {
      border: solid 1px #c2c2c2;
      width: 310px;
      height: 38px;
      margin-top: 7px;
      &:focus {
        border: 1px solid #92c3e9;
        border-radius: 5px;
        box-shadow: 0px 0px 0px 5px #d9eaf7;
        outline: 0;
      }
    }

    .checkbox {
      margin-top: 30px;
      width: 12px;
      height: 12px;
    }
    .checkbox-wrap {
      font-size: 13px;
    }

    .password-valid {
      font-size: 14px;
      color: #717c83;
      margin-top: 0rem;
    }

    .name {
      margin-bottom: 10px;
    }

    & button {
      width: 310px;
      height: 40px;
      margin: 10px 0;
      border: none;
      border-radius: 5px;
      box-shadow: 1px 1px 2px #ffffffb1 inset;
      background: #0c96fe;
      border: solid 1px #0c96fe;
      font-size: 17px;
      color: #ffffff;
      :hover {
        cursor: pointer;
        background-color: #0074cc;
      }
    }
  }
  & a {
    font-weight: 500;
    color: #0b79ce;
    :hover {
      color: #4da4de;
      cursor: pointer;
    }
  }
`;

export const Policy = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  font-size: 13px;
  margin-top: 10px;
  color: #717c83;
`;
