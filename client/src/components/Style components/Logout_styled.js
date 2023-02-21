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
  left: 17%;
`;

export const Line = styled.hr`
  width: 230px;
  border: solid 0.1px #d1cfcfe6;
  position: absolute;
  top: 60%;
  left: 8%;
`;

export const Checkbox = styled.input`
  width: 12px;
  height: 12px;
  position: absolute;
  border: solid 1px #d1cfcfe6;
  border-radius: 3px;
  top: 67.5%;
  left: 8%;
`;

export const CheckText = styled.span`
  width: 210px;
  height: 32.59px;
  color: black;
  font-size: 12.5px;
  position: absolute;
  top: 68%;
  left: 15%;
`;

export const LogoutButton = styled.button`
  width: 70px;
  height: 35px;
  background: #0c96fe;
  color: #ffffff;
  border-radius: 3px;
  border: solid 0.5px #4b80a6;
  margin-left: 10px;
  box-shadow: 1px 1px 2px #ffffffb1 inset;
  cursor: pointer;
  &:hover {
    background: #006cbfe9;
  }
  position: absolute;
  top: 77%;
  left: 5%;
`;

export const CancelButton = styled.button`
  width: 70px;
  height: 35px;
  background: #ffffff;
  color: #0c96fe;
  border-radius: 3px;
  border: solid 0.5px #ffffff;
  margin-left: 10px;
  box-shadow: 1px 1px 2px #ffffffb1 inset;
  cursor: pointer;
  &:hover {
    background: #cbe6fb71;
  }
  position: absolute;
  top: 77%;
  left: 32%;
`;

export const Imgsrc = styled.img`
  width: 20px;
  height: 20px;
  position: absolute;
  top: ${(props) => props.top};
  left: 8%;
`;
