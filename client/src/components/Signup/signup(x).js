import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
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

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  position: absolute;
  width: 1000px;
  height: 1000px;
  top: 10%;
  left: 20%;
  flex: 1 0 auto;
`;

export const SideWrapper = styled.form`
  display: flex;
  justify-content: flex-start;
  position: absolute;
  width: 500px;
  height: 285px;
  top: 41%;
  left: 12%;
  flex: 1 0 auto;
`;

export const HText = styled.div`
  display: flex;
  justify-content: flex-start;
  position: absolute;
  font-size: 27.2px;
  font-weight: 500;
`;

export const SubImg = styled.img`
  display: flex;
  flex-direction: row;
  width: 26px;
  height: 26px;
  margin: 0 5px;
`;

export const SubText = styled.p`
  width: 410px;
  font-size: 15px;
  font-weight: 500;
  display: flex;
  justify-content: flex-start;
  position: absolute;
  top: ${(props) => props.top};
`;

export const LittleText = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 500px;
  color: ${(props) => props.color || "#717c83"};
  font-size: 12px;
  position: absolute;
  top: ${(props) => props.top};
`;

export const Form = styled.form`
  width: 288.45px;
  height: 400px;
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 2px 2px 5px #c2c2c2;
  position: absolute;
  top: 39%;
  left: 58%;
`;

export const SignupButton = styled.button`
  width: 240.45px;
  height: 37.8px;
  border-radius: 5px;
  box-shadow: 1px 1px 2px #ffffffb1 inset;
  background: #0c96fe;
  border: solid 1px #0c96fe;
  color: white;
  position: absolute;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  cursor: pointer;
`;

export const Checkbox = styled.input`
  display: flex;
  position: absolute;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
`;

export const CheckText = styled.span`
  width: 210px;
  height: 32.59px;
  color: ${(props) => props.color};
  font-size: 12.5px;
  position: absolute;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
`;

export const GoogleButton = styled.button`
  width: 288.45px;
  height: 37.8px;
  border-radius: 6px;
  background: #ffffff;
  color: ${(props) => props.color};
  border: solid 1px #cbcbcbe6;
  position: absolute;
  top: 26.5%;
  left: 58%;
  cursor: pointer;
`;

export const GithubButton = styled.button`
  width: 288.45px;
  height: 37.8px;
  border-radius: 6px;
  background: #2f3339;
  color: ${(props) => props.color};
  border: solid 1px #cbcbcbe6;
  position: absolute;
  top: 30.5%;
  left: 58%;
  cursor: pointer;
`;

export const FacebookButton = styled.button`
  width: 288.45px;
  height: 37.8px;
  border-radius: 6px;
  background: #385399;
  color: ${(props) => props.color};
  border: solid 1px #cbcbcbe6;
  position: absolute;
  top: 34.5%;
  left: 58%;
  cursor: pointer;
`;

export const FootWrapper = styled.form`
  display: flex;
  justify-content: flex-start;
  position: absolute;
  width: 288.45px;
  height: 20px;
  top: 105%;
  left: 12%;
`;

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  //* 오류메세지 상태 저장
  const [emailMessage, setEmailMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");

  //* 유효성 검사
  const [isEmail, setIsEmail] = useState(false);
  const [isPassword, setIsPassword] = useState(false);

  //* name Handler
  const onNameHandler = (e) => {
    setName(e.currentTarget.value);
  };

  //* email Handler
  const onEmailHandler = (e) => {
    const currentEmail = e.currentTarget.value;
    const emailRegExp = /\S+@\S+\.\S+/; //mail 정규 표현식
    setEmail(currentEmail);
    if (!emailRegExp.test(currentEmail)) {
      //이메일 형식이 아니라면
      setEmailMessage("Please enter a valid email address.");
      setIsEmail(false);
    } else {
      setEmailMessage("");
      setIsEmail(true);
    }
  };

  //* password Handler
  const onPasswordHandler = (e) => {
    const currentPwd = e.currentTarget.value;
    const pwdRegExp = /\S+@\S+\.\S+/; //mail 정규 표현식
    setPassword(currentPwd);
    if (!pwdRegExp.test(currentPwd)) {
      //이메일 형식이 아니라면
      setPasswordMessage("Please enter a valid email address.");
      setIsPassword(false);
    } else {
      setPasswordMessage("");
      setIsPassword(true);
    }
  };

  //* signup POST 요청 날리기
  const onSubmitHandler = async (e) => {
    //빈 내용으로 요청가지 않겠금 방지
    e.preventDefault();
    await axios
      .post(
        `/api/users/signup`,
        {
          displayName: name,
          email: email,
          password: password,
        },
        {
          headers: {
            "ngrok-skip-browser-warning": "12",
          },
        }
      )
      .then((res) => {
        console.log(res);
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Wrapper>
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
        {/* 회원가입창 */}
        <Form onSubmit={onSubmitHandler}>
          <Text top="5%">Display name</Text>
          <Input top="10%" value={name} onChange={onNameHandler} />
          <Text top="20%">Email</Text>
          <Input top="25%" value={email} onChange={onEmailHandler} />
          <Text top="35%">Password</Text>
          <Input top="40%" value={password} onChange={onPasswordHandler} />
          <UnderText color="#6f7780" top="50%" left="9%">
            Passwords must contain at least eight characters, including at least
            1 letter and 1 number.
          </UnderText>
          <Checkbox type="checkbox" top="67.5%" left="9%"></Checkbox>
          <CheckText top="68%" left="17%">
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
            <Link to="/login">
              <UnderText color="#0c96fe" top="50%" left="57%">
                Log in
              </UnderText>
            </Link>
          </FootWrapper>
        </Form>
      </Wrapper>
    </>
  );
};

export default Signup;
