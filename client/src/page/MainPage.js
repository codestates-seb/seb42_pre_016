import React from "react";
import Head from "../components/Header/Head";
import HeadLogout from "../components/Header/HeadLogout";
import Sidebar from "../components/Sidebar/Sidebar";
import SidebarDropdown from "../components/Sidebar/SidebarDropdown";

const Mainpage = () => {
  return (
    <div>
      <div>로그인 후 </div>
      <Head />
      <div>로그인 전 </div>
      <HeadLogout />
      
      <div>Dropdown Sidebar</div>
      <SidebarDropdown />
      {/* <Sidebar /> */}
    </div>
  );
};

export default Mainpage;
