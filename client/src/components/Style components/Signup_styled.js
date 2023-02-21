import styled from "styled-components";

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
  font-size: 27px;
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
  left: 45%;
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
  top: 27.5%;
  left: 45%;
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
  top: 31%;
  left: 45%;
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
  left: 45%;
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
