import styled from "styled-components";

export const EditWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 20px;
  position: absolute;
  top: 88%;
  margin-left: 200px;
`;

export const AEditWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 20px;
  position: absolute;
  top: 85%;
  margin-left: 200px;
`;

export const EditText = styled.div`
  display: flex;
  font-size: 16px;
  color: #888888;
  cursor: pointer;
`;

export const HeadWrapper = styled.div`
  display: flex;
  width: 1200px;
  height: 120px;
  position: relative;
  left: 19%;
  margin-top: -1250px;
  /* background: #eafc91; */
`;

export const AHeadWrapper = styled.div`
  display: flex;
  width: 1480px;
  height: 50px;
  position: relative;
  top: 40%;
  margin-bottom: 480px;
  flex: 1 1 auto;
  margin-left: 60px;
`;

export const H1Text = styled.div`
  display: flex;
  font-size: 30px;
  position: absolute;
  left: 2%;
  top: 20%;
  flex: 1 1 auto;
`;

export const H4Text = styled.div`
  padding-left: 20px;
  display: flex;
  font-size: 20px;
  position: relative;
  top: 25%;
  flex: 1 1 auto;
`;

export const AskButton = styled.button`
  width: 130px;
  height: 45px;
  font-size: 16px;
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
  top: 15%;
  left: 80%;
`;

export const SubWrapper = styled.div`
  display: flex;
  width: 100px;
  height: 30px;
  position: absolute;
  align-items: center;
  left: ${(props) => props.left};
  top: 60%;
`;

export const SubText = styled.div`
  display: flex;
  width: 30px;
  font-size: 14px;
  color: ${(props) => props.color};
  left: ${(props) => props.left};
  position: absolute;
`;

export const Line = styled.hr`
  width: 1200px;
  border: solid 0.1px #d1cfcfe6;
  position: relative;
  left: -3%;
  bottom: 0%;
  display: flex;
  flex: 1 1 auto;
`;

export const SideWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 70px;
  height: 210px;
  position: absolute;
  top: 0%;
  left: 0%;
  padding: 5px 5px;

  button:nth-child(1),
  button:nth-child(3),
  span {
    margin: 2px;
  }
  span {
    font-size: 25px;
    color: var(--black-500);
  }
  button:nth-child(4) {
    padding: 6px 0;
  }
  button:nth-child(5) {
    margin: 2px 11.5px;
    padding: 6px 0;
  }
`;

export const ASideWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 70px;
  height: 590px;
  position: relative;
  top: 50%;
  right: 95%;
  padding: 5px 5px;

  button:nth-child(1),
  button:nth-child(3),
  span {
    margin: 2px;
  }
  span {
    font-size: 25px;
    color: var(--black-500);
  }
  button:nth-child(4) {
    padding: 6px 0;
  }
  button:nth-child(5) {
    margin: 2px 11.5px;
    padding: 6px 0;
  }
`;

export const Button = styled.button`
  display: flex;
  width: 60x;
  height: 40px;
  background: #ffffff;
  border: none;
  cursor: pointer;
  margin: 10px 0;
`;

export const Button2 = styled.button`
  display: flex;
  width: 60x;
  height: 40px;
  background: #ffffff;
  border: none;
  cursor: pointer;
  margin: 5px 0;
`;

export const BodyWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1200px;
  height: 600px;
  position: relative;
  left: 19%;
  /* background: #eafc91; */
`;

export const ABodyWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1200px;
  height: 300px;
  position: relative;
  left: 19%;
  top: 0%;
  border-top: solid 0.1px #d1cfcfe6;
  border-bottom: solid 0.1px #d1cfcfe6;
  /* background: #eafc91; */
  /* margin-top: 10px; */
`;

export const MainWrapper = styled.div`
  display: flex;
  text-align: left;
  width: 1200px;
  height: 600px;
  position: absolute;
  left: 6%;
  /* background: #7a75ff; */
`;

export const AMainWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1150px;
  height: 250px;
  padding: 20px 10px;
  position: absolute;
  top: 0%;
  left: 5%;
  /* background: #7a75ff; */
`;

export const AnswerWrapper = styled.div`
  margin-top: 2%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1440px;
  height: 540px;
  margin-bottom: 100px;
  position: relative;
  left: 18%;
  bottom: 40%;
`;

export const H2Text = styled.div`
  display: flex;
  font-size: 22px;
  margin: 10px 20px;
  position: absolute;
  left: 2%;
  top: 5%;
`;

export const H3Text = styled.div`
  display: flex;
  font-size: 27px;
  margin: 20px 20px;
  position: absolute;
  left: 2%;
  top: 10%;
`;

export const AnswerButton = styled.button`
  width: 160px;
  height: 50px;
  font-size: 16px;
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
  top: 80%;
  left: 2%;
`;

export const ArrowUpSvg = () => {
  return (
    <svg
      aria-hidden="true"
      className="svg-icon iconArrowUpLg"
      width="36"
      height="36"
      viewBox="0 0 36 36"
    >
      <path d="M2 25h32L18 9 2 25Z" fill="#babfc4"></path>
    </svg>
  );
};

export const ArrowDownSvg = () => {
  return (
    <svg
      aria-hidden="true"
      className="svg-icon iconArrowDownLg"
      width="36"
      height="36"
      viewBox="0 0 36 36"
    >
      <path d="M2 11h32L18 27 2 11Z" fill="#babfc4"></path>
    </svg>
  );
};

export const BookmarkSvg = () => {
  return (
    <svg
      aria-hidden="true"
      className="js-saves-btn-unselected svg-icon iconBookmarkAlt"
      width="18"
      height="18"
      viewBox="0 0 18 18"
    >
      <path
        d="m9 10.6 4 2.66V3H5v10.26l4-2.66ZM3 17V3c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v14l-6-4-6 4Z"
        fill="#babfc4"
      ></path>
    </svg>
  );
};

export const HistorySvg = () => {
  return (
    <svg
      aria-hidden="true"
      className="mln2 mr0 svg-icon iconHistory"
      width="19"
      height="18"
      viewBox="0 0 19 18"
    >
      <path
        d="M3 9a8 8 0 1 1 3.73 6.77L8.2 14.3A6 6 0 1 0 5 9l3.01-.01-4 4-4-4h3L3 9Zm7-4h1.01L11 9.36l3.22 2.1-.6.93L10 10V5Z"
        fill="#babfc4"
      ></path>
    </svg>
  );
};

export const PencilSvg = () => {
  return (
    <svg
      aria-hidden="true"
      className="va-text-bottom o50 svg-icon iconPencilSm"
      width="14"
      height="14"
      viewBox="0 0 14 14"
    >
      <path
        fill="#929495"
        d="m11.1 1.71 1.13 1.12c.2.2.2.51 0 .71L11.1 4.7 9.21 2.86l1.17-1.15c.2-.2.51-.2.71 0ZM2 10.12l6.37-6.43 1.88 1.88L3.88 12H2v-1.88Z"
      ></path>
    </svg>
  );
};
