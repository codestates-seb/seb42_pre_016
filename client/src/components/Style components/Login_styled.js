import styled from "styled-components";

export const LogoWapper = styled.div`
  display: flex;
  justify-content: center;
  width: 288.45px;
  height: 37.8px;
  position: absolute;
  top: 30%;
  left: 35%;
`;

export const LogoSrc = styled.img`
  width: 45px;
  height: 42px;
  margin-bottom: 20px;
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 288.45px;
  position: absolute;
  top: 34%;
  left: 35%;
`;

export const GoogleButton = styled.button`
  width: 288.45px;
  height: 37.8px;
  border-radius: 6px;
  background: #ffffff;
  color: ${(props) => props.color};
  border: solid 1px #cbcbcbe6;
  position: relative;
  cursor: pointer;
  margin-bottom: 10px;
`;

export const GithubButton = styled.button`
  width: 288.45px;
  height: 37.8px;
  border-radius: 6px;
  background: #2f3339;
  color: ${(props) => props.color};
  border: solid 1px #cbcbcbe6;
  position: relative;
  cursor: pointer;
  margin-bottom: 10px;
`;

export const FacebookButton = styled.button`
  width: 288.45px;
  height: 37.8px;
  border-radius: 6px;
  background: #385399;
  color: ${(props) => props.color};
  border: solid 1px #cbcbcbe6;
  position: relative;
  cursor: pointer;
  margin-bottom: 10px;
`;

export const Form = styled.form`
  width: 288.45px;
  height: 234.2px;
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 2px 2px 5px #c2c2c2;
  position: absolute;
  top: 47%;
  left: 35%;
`;

export const ImgSrc = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 5px;
  margin-bottom: -4px;
`;

export const Text = styled.span`
  width: 100px;
  height: 32.59px;
  font-weight: 600;
  font-size: 15px;
  position: absolute;
  top: ${(props) => props.top};
  left: 8%;
`;

export const Input = styled.input`
  width: 240.45px;
  height: 32.59px;
  border: solid 1px #c2c2c2;
  border-radius: 5px;
  position: absolute;
  top: ${(props) => props.top};
  left: 8%;
`;

export const LoginButton = styled.button`
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
  cursor: pointer;
`;

export const UnderText = styled.span`
  width: 250px;
  height: 32.59px;
  color: ${(props) => props.color};
  font-size: 12.5px;
  position: absolute;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
`;
