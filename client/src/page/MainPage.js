import React from "react";
import Head from "../components/Header/Head";
import HeadLogout from "../components/Header/HeadLogout";

const Mainpage = () => {
  return (
    <div>
      <div>로그인 후</div>
      <Head />
      <div>로그인 전</div>
      <HeadLogout />
    </div>
  );
};

export default Mainpage;
