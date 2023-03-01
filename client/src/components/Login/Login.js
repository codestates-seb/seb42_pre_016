import React,{ useState } from "react";
import { useNavigate } from 'react-router-dom';
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
import axios from "axios";



const Login = () => {
  const [inputUsername, setUsername] = useState("");
  const [inputPassord, setPassword] = useState("");

  const navigate = useNavigate();


  const handleChangename = (event) => {
    setUsername(event.target.value);
  };

  const handleChangePass = (event) => {
    setPassword(event.target.value);
  };

  const checkLogin = async () => { 
    await axios
    .post(
      `/api/auth/login`,
      {
        username : `${inputUsername}`,
        password : `${inputPassord}`
      },
      {
        headers: { "ngrok-skip-browser-warning": "12" },
      }
    ).then(() => {
      alert("login success")
      navigate('/');
    }).catch((err) =>{
      console.log(err);
      alert("login fail")
    })
  };
  
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
        <Input top="21%"
          type="email"
          name = "username"
          defaultValue={inputUsername}
          onChange={handleChangename}
        />
        <Text top="43%">Password</Text>
        <UnderText color="#0f79ce" top="44%" left="60%">
          Forgot Password?
        </UnderText>
        <Input top="53%"
          type="password"
          name="password"
          defaultValue={inputPassord}
          onChange={handleChangePass}  
        />
        <LoginButton type="button" onClick={() => checkLogin()}>Log in</LoginButton>
      </Form>
    </>
  );
};

export default Login;
