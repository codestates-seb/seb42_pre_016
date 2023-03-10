import styled from "styled-components";

export const Space = styled.span`
  display: flex;
  flex: 1 1 auto;
  width: 20px;
`;

export const HeadBar = styled.div`
  height: 55px;
  background: #f7faf9;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  border-top: 3px solid hsl(27, 90%, 55%);
  position: relative;
  box-sizing: border-box;
  outline: none;
  margin-left: -10px;
  margin-right: -20px;
  padding: 7px 0px;

  > .navbar-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 100%;
    background-color: hsl(210, 8%, 97.5%);
    position: relative;
    margin: 0px 7px;

    > .menuBtn {
      background: #f7faf9;
      border: none;
      justify-content: center;
      align-items: center;
      height: 48px;
      padding: 0px 16px;
      cursor: pointer;
      :hover {
        border: none;
        background-color: #e2e6e8;
      }
    }
    > .dropdown-menu2 {
      position: absolute;
      top: 45px;
      left: 0;
      box-shadow: 0px 0 5px 0px #e2e6e8;
    }
  }
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
  background: #f7faf9;
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
  background-attachment: auto;
  background-size: contain;
  background-repeat: no-repeat;
  background-size: 28px;
  padding-left: 40px;
  &:hover {
    border: #0c7de7;
    box-shadow: 5px 3px 7px #3fa2ff;
  }
  &:focus {
    border: #0c7de7;
    box-shadow: 5px 3px 7px #3fa2ff;
    border: 1px solid var(--blue-600);
    outline: 3px solid var(--blue-100);
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
