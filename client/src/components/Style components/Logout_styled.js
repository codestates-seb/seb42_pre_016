import styled from "styled-components";
import { FootWrapper } from "./Signup_styled";

export const Wrapper = styled.div`
  width: 527px;
  height: 500px;
  display: flex;
  justify-content: center;
  position: absolute;
  top: 25%;
  left: 30%;
`;

export const Head = styled.div`
  width: 527px;
  height: 55px;
  margin: 0 0 24px;
  font-size: 25px;
  justify-content: center;
  text-align: center;
`;

export const Form = styled.form`
  width: 288.45px;
  height: 400px;
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 2px 2px 5px #c2c2c2;
  position: absolute;
  top: 17%;
`;

export const Text = styled.span`
  width: 100px;
  height: 20px;
  font-size: 14px;
  color: #0f79ce;
  position: absolute;
  top: ${(props) => props.top};
  left: 8%;
`;

export const Line = styled.hr`
  width: 230px;
  border: solid 0.1px #d1cfcfe6;
  position: absolute;
  top: 60%;
  left: 8%;
`;

export const Checkbox = styled.input`
  position: absolute;
  top: 69%;
  left: 8%;
`;

export const CheckText = styled.span`
  width: 210px;
  height: 32.59px;
  color: black;
  font-size: 12.5px;
  position: absolute;
  top: 69%;
  left: 8%;
`;
