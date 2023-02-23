import React from "react";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import Checkicon from "../img/checkicon.png";
import HeadLogout from "../components/Header/HeadLogout";

const GlobalStyle = createGlobalStyle`
body {
    box-sizing: border-box;
    background: #f0f2f4;
    margin: 0;
}
`;

const ImgSrc = styled.img`
  width: 30px;
  height: 30px;
  margin-left: -15px;
  margin-bottom: 3px;
`;

const SucceccAlert = styled.div`
  position:absolute;
  top:50%; left:50%;
  transform: translate(-50%, -50%);
  margin : 20px; 
  padding : 30px;
  border : 1px solid green;
  background : #DFEFE4;
  border-radius : 5px;
  width: 500px;
  height: 80px;

  > h1 {
    margin-top: -55px;
    margin-left: 20px;
    font-size: 20px;
    font-weight: 600px;
    text-align: left;
    letter-spacing: 0px;
  }
  > p {
    margin-left: 20px;
  }
`

const SignupSuccess = () => {
  return (
    <>
      <HeadLogout />
      <GlobalStyle />
      <SucceccAlert>
        <ImgSrc src={Checkicon} />
        <h1>Registration email sent to test@gmail.com Open this email to finish signup.</h1>
        <p>If you don't see this email in your inbox within 15 minute, look for it in your junk mail folder.</p>
      </SucceccAlert>
    </>
  );
};

export default SignupSuccess;
