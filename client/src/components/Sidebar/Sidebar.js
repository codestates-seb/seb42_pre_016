import React from "react";
import styled from "styled-components";


const NavContainer = styled.div`
    height: 100%;
    width: 180px;
    background-color: #ffffff;
    position: fixed;
    border-right: solid 1px #d6d8db;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
`
// 사이즈 작아지면 (768px?) 사라지고
// 헤드의 메뉴버튼 클릭 시 노출

const Home = styled.div`
    width: 100%;
    height: 40px;
    margin-top: 30px;
    position: relative;
    box-sizing: border-box;
    padding: 10px;
    color: #3b3b3b;
    
    &:active {
        background-color: #f1f1f3;
        font-weight: bold;
        border-right: solid 4px #da8131;
    }
    &:hover {
    color: #000000;
  }
    
`

const Public = styled.div`
    width: 100%;
    height: 30px;
    margin-top: 20px;
    position: relative;
    box-sizing: border-box;
    padding: 6px 10px 6px;
    font-size: 14px;
`

const Questions = styled.div`
    width: 100%;
    height: 40px;
    position: relative;
    box-sizing: border-box;
    padding: 10px 35px;
    color: #3b3b3b;
    background-image: url(https://img.icons8.com/windows/32/null/globe-africa.png);
    background-position: 5px 6px;
    background-size: contain;
    background-repeat: no-repeat;
    background-size: 25px;
    &:active {
        background-color: #f1f1f3;
        font-weight: bold;
        border-right: solid 4px #da8131;
    }
    &:hover {
    color: #000000;
  }
`
const Tags = styled.div`
    width: 100%;
    height: 40px;
    position: relative;
    box-sizing: border-box;
    padding: 10px 35px;
    color: #3b3b3b;
    &:active {
        background-color: #f1f1f3;
        font-weight: bold;
        border-right: solid 4px #da8131;
    }
    &:hover {
    color: #000000;
  }
`
const Users = styled.div`
    width: 100%;
    height: 40px;
    position: relative;
    box-sizing: border-box;
    padding: 10px 35px;
    color: #3b3b3b;
    &:active {
        background-color: #f1f1f3;
        font-weight: bold;
        border-right: solid 4px #da8131;
    }
    &:hover {
    color: #000000;
  }
`
const Companies = styled.div`
    width: 100%;
    height: 40px;
    position: relative;
    box-sizing: border-box;
    padding: 10px 35px;
    color: #3b3b3b;
    &:active {
        background-color: #f1f1f3;
        font-weight: bold;
        border-right: solid 4px #da8131;
    }
    &:hover {
    color: #000000;
  }
`



const Sidebar = () => {
    return (
        <>
            <NavContainer>
                <Home>Home</Home>
                <Public>PUBLIC</Public>
                <Questions>Questions</Questions>
                <Tags>Tags</Tags>
                <Users>Users</Users>
                <Companies>Companies</Companies>
            </NavContainer>
        </>
    )
}

export default Sidebar;