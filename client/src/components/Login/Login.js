import React from "react";
import LogoLogin from "../../img/Logo_Login.png";
import Gmail from "../../img/Gmail.png";
import Github from "../../img/Github.png";
import Facebook from "../../img/Facebook.png";
import {
  LogoWapper,
  LogoSrc,
  GoogleButton,
  GithubButton,
  FacebookButton,
  Form,
  ImgSrc,
  Text,
  Input,
  LoginButton,
  UnderText,
} from "../Style components/Login_styled";

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
