import React from "react";
import styled from "styled-components";
import LogoLogin from "../../img/Logo_Login.png";
import Gmail from "../../img/Gmail.png";
import Github from "../../img/Github.png";
import Facebook from "../../img/Facebook.png";

const LogoWapper = styled.div`
  display: flex;
  justify-content: center;
  width: 288.45px;
  height: 37.8px;
  position: absolute;
  top: 30%;
  left: 35%;
`;

const LogoSrc = styled.img`
  width: 45px;
  height: 42px;
`;

const GoogleButton = styled.button`
  width: 288.45px;
  height: 37.8px;
  border-radius: 6px;
  background: #ffffff;
  color: ${(props) => props.color};
  border: solid 1px #cbcbcbe6;
  position: absolute;
  top: 35%;
  left: 35%;
`;

const GithubButton = styled.button`
  width: 288.45px;
  height: 37.8px;
  border-radius: 6px;
  background: #2f3339;
  color: ${(props) => props.color};
  border: solid 1px #cbcbcbe6;
  position: absolute;
  top: 38.5%;
  left: 35%;
`;

const FacebookButton = styled.button`
  width: 288.45px;
  height: 37.8px;
  border-radius: 6px;
  background: #385399;
  color: ${(props) => props.color};
  border: solid 1px #cbcbcbe6;
  position: absolute;
  top: 42%;
  left: 35%;
`;

const Form = styled.form`
  width: 288.45px;
  height: 234.2px;
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 2px 2px 5px #c2c2c2;
  position: absolute;
  top: 47%;
  left: 35%;
`;

const ImgSrc = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 5px;
  margin-bottom: -4px;
`;

const Text = styled.span`
  width: 75px;
  height: 32.59px;
  font-weight: 600;
  font-size: 15px;
  position: absolute;
  top: ${(props) => props.top};
  left: 8%;
`;

const Input = styled.input`
  width: 240.45px;
  height: 32.59px;
  border: solid 1px #c2c2c2;
  border-radius: 5px;
  position: absolute;
  top: ${(props) => props.top};
  left: 8%;
`;

const LoginButton = styled.button`
  width: 240.45px;
  height: 37.8px;
  border-radius: 5px;
  box-shadow: 1px 1px 2px #ffffffb1 inset;
  background: #0c96fe;
  border: solid 1px #0c96fe;
  color: white;
  position: absolute;
  top: 73%;
  left: 8%;
`;

const UnderText = styled.span`
  width: 200px;
  height: 32.59px;
  color: ${(props) => props.color};
  font-size: 12.5px;
  position: absolute;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
`;

const Login = () => {
  return (
    <>
      <LogoWapper>
        <LogoSrc src={LogoLogin} />
      </LogoWapper>
      <GoogleButton color="black">
        <ImgSrc src={Gmail} />
        Log in with Google
      </GoogleButton>
      <GithubButton color="white">
        <ImgSrc src={Github} />
        Log in with GitHub
      </GithubButton>
      <FacebookButton color="white">
        <ImgSrc src={Facebook} />
        Log in with Facebook
      </FacebookButton>
      <Form>
        <Text top="12%">Email</Text>
        <Input top="21%" />
        <Text top="43%">Password</Text>
        <UnderText color="#0f79ce" top="44%" left="60%">
          Forgot Password?
        </UnderText>
        <Input top="53%" />
        <LoginButton>Log in</LoginButton>
      </Form>
    </>
  );
};

export default Login;
