import React from "react";
import styled from "styled-components";
import SignUp_question from "../../img/SignUp_question.png";
import SignUp_unlock from "../../img/SignUp_unlock.png";
import SignUp_tags from "../../img/SignUp_tags.png";
import SignUp_badges from "../../img/SignUp_badges.png";
import Gmail from "../../img/Gmail.png";
import Github from "../../img/Github.png";
import Facebook from "../../img/Facebook.png";
import {
  ImgSrc,
  Text,
  Input,
  UnderText,
} from "../Style components/Login_styled";
import {
  GoogleButton,
  GithubButton,
  FacebookButton,
  SideWrapper,
  HText,
  SubImg,
  SubText,
  LittleText,
  ButtonWrapper,
  Form,
  SignupButton,
  Checkbox,
  CheckText,
  FootWrapper,
} from "../Style components/Signup_styled";

const Signup = () => {
  return (
    <>
      <SideWrapper>
        <HText>Join the Stack Overflow community</HText>
        <SubText top="20%">
          <SubImg src={SignUp_question} />
          Get unstuck — ask a question
        </SubText>
        <SubText top="35%">
          <SubImg src={SignUp_unlock} />
          Unlock new privileges like voting and commenting
        </SubText>
        <SubText top="50%">
          <SubImg src={SignUp_tags} />
          Save your favorite tags, filters, and jobs
        </SubText>
        <SubText top="65%">
          <SubImg src={SignUp_badges} />
          Earn reputation and badges
        </SubText>
        <LittleText top="80%">
          Collaborate and share knowledge with a private group for FREE.
        </LittleText>
        <LittleText top="86%" color="#0173cc">
          Get Stack Overflow for Teams free for up to 50 users.
        </LittleText>
      </SideWrapper>
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
        <Text top="5%">display name</Text>
        <Input top="10%" />
        <Text top="20%">Email</Text>
        <Input top="25%" />
        <Text top="35%">Password</Text>
        <Input top="40%" />
        <UnderText color="#6f7780" top="50%" left="9%">
          Passwords must contain at least eight characters, including at least 1
          letter and 1 number.
        </UnderText>
        <Checkbox type="checkbox" top="68%" left="9%"></Checkbox>
        <CheckText top="68%" left="15%">
          Opt-in to receive occasional product updates, user research
          invitations, company announcements, and digests.
        </CheckText>
        <SignupButton top="83%" left="9%">
          Sign up
        </SignupButton>
        <FootWrapper>
          <UnderText top="50%" left="9%">
            Already have an account?
          </UnderText>
          <UnderText color="#0c96fe" top="50%" left="57%">
            Log in
          </UnderText>
        </FootWrapper>
      </Form>
    </>
  );
};

export default Signup;
