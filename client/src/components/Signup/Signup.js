import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import question from "../../img/quesiton.png";
import arrow from "../../img/arrow.png";
import bookmark from "../../img/bookmark.png";
import trophy from "../../img/trophy.png";
import { ReactComponent as Google } from "../../img/google-icon.svg";
import { ReactComponent as Github } from "../../img/github-icon.svg";
import { ReactComponent as Facebook } from "../../img/facebook-icon.svg";
import {
  Container,
  LeftSideContainer,
  SignupContainer,
  Policy,
} from "../Style components/Signup_styled";

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
    const pwdRegExp = /^(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/; //password 정규 표현식
    setPassword(currentPwd);
    if (!pwdRegExp.test(currentPwd)) {
      //비밀번호 형식이 아니라면
      setPasswordMessage("Please enter a valid Password.");
      console.log(
        "비밀번호는 소문자 영문/숫자/특수문자(#?!@$ %^&*-)를 포함한 8자리 이상이여야 합니다."
      );
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
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const passwordVaild = `Passwords must contain at least eight characters, including at least 1 special letter and 1 number.`;
  const signupCheckbox = `Opt-in to receive occasional product updates, user research invitations, company announcements, and digests.`;

  return (
    <>
      <div>
        <Container>
          <LeftSideContainer>
            <h1>Join the Stack Overflow community</h1>
            <div>
              <br />
              <div>
                <img
                  className="signupImage"
                  width="24"
                  alt="question"
                  src={question}
                />{" "}
                Get unstuck — ask a question
              </div>
              <br />
              <div>
                <img
                  className="signupImage"
                  width="24"
                  alt="arrow"
                  src={arrow}
                />{" "}
                Unlock new privileges like voting and commenting
              </div>
              <br />
              <div>
                <img
                  className="signupImage"
                  width="24"
                  alt="bookmark"
                  src={bookmark}
                />{" "}
                Save your favorite tags, filters, and jobs
              </div>
              <br />
              <div>
                <img
                  className="signupImage"
                  width="24"
                  alt="trophy"
                  src={trophy}
                />{" "}
                Earn reputation and badges
              </div>
              <br />
              <div className="greyfont">
                Collaborate and share knowledge with a private group for FREE.
              </div>
              <div>
                <Link
                  to="https://stackoverflow.co/teams/?utm_source=so-owned&utm_medium=product&utm_campaign=free-50&utm_content=public-sign-up"
                  className="signuplink"
                >
                  <div>
                    Get Stack Overflow for Teams free for up to 50 users.
                  </div>
                </Link>
              </div>
            </div>
          </LeftSideContainer>
          <SignupContainer>
            {/* oauth 로그인 폼 */}
            <section className="social-signup-container">
              <button className="google">
                <Google />
                <span>Sign up with Google</span>
              </button>
              <button className="github">
                <Github />
                <span>Sign up with Github</span>
              </button>
              <button className="facebook">
                <Facebook />
                <span>Sign up with Facebook</span>
              </button>
            </section>
            {/*이메일 비밀번호 입력창*/}
            <section className="account-signup-container">
              <form onSubmit={onSubmitHandler}>
                <div className="name">
                  <label htmlFor="name" className="name-label">
                    Display name
                  </label>
                  <div className="name-input">
                    <input
                      id="name"
                      value={name}
                      onChange={onNameHandler}
                    ></input>
                  </div>
                </div>
                <div className="email">
                  <label htmlFor="email" className="email-label">
                    Email
                  </label>
                  <div className="email-input">
                    <input
                      id="email"
                      value={email}
                      onChange={onEmailHandler}
                    ></input>
                    <p className="message">{emailMessage}</p>
                  </div>
                </div>
                <div className="password">
                  <label htmlFor="password" className="password-label">
                    Password
                  </label>
                  <div className="password-input">
                    <input
                      id="password"
                      type="password"
                      value={password}
                      onChange={onPasswordHandler}
                    ></input>
                    <p className="message">{passwordMessage}</p>
                  </div>
                  <div className="password-valid">{passwordVaild}</div>
                </div>
                <div className="checkbox-wrap">
                  <input className="checkbox" type="checkbox" />
                  <label>{signupCheckbox}</label>
                </div>
                <div className="Signup">
                  <button className="signup-btn" type="submit">
                    Sign up
                  </button>
                </div>
              </form>
              <Policy>
                By clicking “Sign up”, you agree to our
                <Link
                  to="https://stackoverflow.com/legal/terms-of-service/public"
                  className="signuplink"
                >
                  <div> terms of service,</div>
                </Link>
                <Link
                  to="https://stackoverflow.com/legal/privacy-policy"
                  className="signuplink"
                >
                  <div> privacy policy</div>
                </Link>
                and
                <Link
                  to="https://stackoverflow.com/legal/cookie-policy"
                  className="signuplink"
                >
                  <div>cookie policy</div>
                </Link>
              </Policy>
            </section>
          </SignupContainer>
        </Container>
      </div>
    </>
  );
};

export default Signup;
