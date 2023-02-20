import styled from "styled-components";

export const HeadBar = styled.div`
  width: 100%;
  height: 50px;
  background: #f7faf9;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  position: relative;
  box-sizing: border-box;
  outline: none;
  padding-top: 7px;
`;

export const Line = styled.hr`
  border: solid 2px #f48024;
`;

export const LogoSrc = styled.img`
  width: 150px;
  height: 30px;
  margin-left: 10px;
  box-sizing: border-box;
  &:hover {
    background: #d7d7dabf;
  }
`;

export const ProductsButton = styled.button`
  width: 78.47px;
  height: 35px;
  background: #fffff8;
  border-radius: 1000px;
  border: none;
  padding: 10px;
  margin-left: 12px;
  cursor: pointer;
  color: #373736;
  &:hover {
    color: #000000;
    background: #dfdedec6;
  }
`;

export const SearchInput = styled.input`
  width: 774px;
  height: 33px;
  margin-left: 10px;
  border: solid 1px #c2c2c2;
  border-radius: 5px;
  background-image: url(https://cdn1.iconfinder.com/data/icons/hawcons/32/698627-icon-111-search-256.png);
  background-position: left;
  background-size: contain;
  background-repeat: no-repeat;
  background-size: 28px;
  &:hover {
    border: #0c7de7;
    box-shadow: 5px 3px 7px #3fa2ff;
  }
`;

export const MyHome = styled.img`
  width: 25px;
  height: 25px;
  margin-left: 20px;
  margin-top: 5px;
  box-sizing: border-box;
  border-radius: 5px;
  &:hover {
    background: #d7d7dabf;
  }
`;

export const Number = styled.span`
  font-weight: bold;
  font-size: 12px;
  margin-top: 10px;
  margin-left: 4px;
`;

export const InboxSrc = styled.img`
  width: 28px;
  height: 24px;
  margin-left: 30px;
  margin-top: 5px;
  box-sizing: border-box;
  &:hover {
    background: #d7d7dabf;
  }
`;

export const AchievementsSrc = styled.img`
  width: 28px;
  height: 24px;
  margin-left: 18px;
  margin-top: 5px;
  box-sizing: border-box;
  &:hover {
    background: #d7d7dabf;
  }
`;

export const QuestionsSrc = styled.img`
  width: 28px;
  height: 24px;
  margin-left: 18px;
  margin-top: 5px;
  box-sizing: border-box;
  &:hover {
    background: #d7d7dabf;
  }
`;

export const CommunitySrc = styled.img`
  width: 28px;
  height: 24px;
  margin-left: 18px;
  margin-right: 20px;
  margin-top: 5px;
  box-sizing: border-box;
  &:hover {
    background: #d7d7dabf;
  }
`;
