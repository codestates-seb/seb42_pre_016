import React from "react";
import styled from "styled-components";
import MyPhoto from "../../img/myphoto.jpeg";
import { FaPen, FaRegCalendarAlt } from "react-icons/fa";
import { RxTriangleDown } from "react-icons/rx";
import { MdCake } from "react-icons/md";
import { AiOutlineClockCircle } from "react-icons/ai";

// 프로필 사진
//  닉네임
//  우상단 Edit profile, Profiles 버튼
//  케이크 아이콘 + Member for {가입기간}, 시간 아이콘 + Last seen {마지막 접속일}, 캘린더 아이콘 + Visited {총 접속일}, {연속 접속일수} consecutive days
// 우상단 버튼 2개 제외 반응형 웹..

const size = {
  mobile: "425px",
  tablet: "768px",
  desktop: "1440px",
};

// 미디어 쿼리의 중복 코드를 줄이기위해 정의된 변수입니다
const device = {
  mobile: `@media only screen and (max-width: ${size.mobile})`,
  tablet: `@media only screen and (max-width: ${size.tablet})`,
  desktopL: `@media only screen and (max-width: ${size.desktop})`,
};

const MypageContainer = styled.div`
  flex: 2 1 auto;
  width: 1000px;
  height: 200px;
  background: #ffffff;
  display: flex;
  box-sizing: border-box;
  outline: none;
  padding: 25px;
  margin-top: 1px;
  align-items: center;
  position: relative;
  margin: 5px 60px;
  /* border: red solid; */
`;

const ProfilePicture = styled.img`
  width: 150px;
  height: 150px;
  aspect-ratio: 1/1;
  border-radius: 5px;
  display: flex;
  position: relative;
  box-shadow: 0px 0px 6px 1px #c5c5c5;
`;
const NameCard = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  margin-left: 20px;
`;

const YourName = styled.div`
  font-size: 35px;
  color: #000000;
`;

const Anniversaries = styled.div`
  color: #6c727a;
  display: flex;
  align-items: center;
  flex-flow: row wrap;
  justify-items: center;
  position: relative;
`;

const CakeIcon = styled(MdCake)`
  color: #6c727a;
  margin-right: 4px;
  height: 20px;
  width: 20px;
  position: relative;
  top: -1px;
`;

const TriangleIcon = styled(RxTriangleDown)`
  color: #6c727a;
  margin-left: 4px;
  margin-right: -4px;
`;

const ClockIcon = styled(AiOutlineClockCircle)`
  color: #6c727a;
  margin-left: 10px;
  margin-right: 4px;
  height: 20px;
  width: 20px;
  position: relative;
  top: -1px;
`;

const CalendarIcon = styled(FaRegCalendarAlt)`
  color: #6c727a;
  margin-left: 10px;
  margin-right: 4px;
  height: 20px;
  width: 20px;
  position: relative;
  top: -1px;
`;

const ButtonContainer = styled.div`
  width: fit-content;
  height: 40px;
  position: absolute;
  top: 20px;
  right: 0px;
`;
const EditProfileButton = styled.button`
  width: 110px;
  height: 38px;
  background-color: #ffffff;
  border: solid 1px #6c727a;
  color: #6c727a;
  margin-right: 10px;
  border-radius: 4px;
  position: relative;
  &:hover {
    background-color: #e4e4e4;
  }
`;
const ProfilesButton = styled.button`
  width: 100px;
  height: 38px;
  background-color: #ffffff;
  border: solid 1px #6c727a;
  color: #6c727a;
  margin-right: 10px;
  border-radius: 4px;
  position: relative;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: #e4e4e4;
  }
`;

const PenIcon = styled(FaPen)`
  color: #6c727a;
  width: 10px;
  height: 10px;
  margin-right: 5px;
`;

export const Space = styled.div`
  border-right: solid 1px #d6d8db;
  background-color: #ffffff;
  display: flex;
  flex: 1 1 auto;
  width: 5%;
`;

const MypageProfile = () => {
  return (
    <>
      <MypageContainer>
        <ProfilePicture src={MyPhoto} />
        <ButtonContainer>
          <EditProfileButton>
            <PenIcon />
            Edit Profile
          </EditProfileButton>
          <ProfilesButton>
            Profiles
            <TriangleIcon />
          </ProfilesButton>
        </ButtonContainer>
        <NameCard>
          <YourName>Your Name Here</YourName>
          <Anniversaries>
            <CakeIcon />
            Member for 6 days
            <ClockIcon />
            Last seen this week
            <CalendarIcon />
            Visited 3 days, 2 consecutive
          </Anniversaries>
        </NameCard>
      </MypageContainer>
      <Space />
    </>
  );
};

export default MypageProfile;
