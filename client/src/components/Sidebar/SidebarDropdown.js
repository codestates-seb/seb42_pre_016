import React from "react";
import styled from "styled-components";
import { FaInfoCircle, FaGlobeAmericas } from "react-icons/fa";
import { RiMedalFill } from "react-icons/ri";
import { IoMdBriefcase } from "react-icons/io";

const SideContainer = styled.div`
  height: max-content;
  width: 250px;
  background-color: #ffffff;
  position: fixed;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;
  box-shadow: 3px 3px 5px -2px #c5c5c5;
`;

const Home = styled.div`
  width: 100%;
  height: 40px;
  margin-top: 20px;
  position: relative;
  box-sizing: border-box;
  padding: 10px;
  color: #3b3b3b;

  &:active {
    background-color: #f1f1f3;
    font-weight: bold;
    border-right: solid 4px #f48024;
  }
  &:hover {
    color: #000000;
  }
`;

const Public = styled.div`
  width: 100%;
  height: 30px;
  margin-top: 20px;
  position: relative;
  box-sizing: border-box;
  padding: 6px 10px 6px;
  font-size: 14px;
`;

const Questions = styled.div`
  width: 100%;
  height: 40px;
  position: relative;
  box-sizing: border-box;
  padding: 10px 35px;
  color: #3b3b3b;
  &:active {
    background-color: #f1f1f3;
    font-weight: bold;
    border-right: solid 4px #f48024;
  }
  &:hover {
    color: #000000;
  }
`;
const GlobeIcon = styled(FaGlobeAmericas)`
  color: #6c727a;
  position: absolute;
  left: 9px;
  top: 8px;
  width: 20px;
  height: 20px;
`;

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
    border-right: solid 4px #f48024;
  }
  &:hover {
    color: #000000;
  }
`;
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
    border-right: solid 4px #f48024;
  }
  &:hover {
    color: #000000;
  }
`;
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
    border-right: solid 4px #f48024;
  }
  &:hover {
    color: #000000;
  }
`;

const MedalIcon = styled(RiMedalFill)`
  color: #f48024;
  position: absolute;
  left: 9px;
  top: 8px;
  width: 20px;
  height: 20px;
`;

const Collectives = styled.div`
  width: 100%;
  height: 30px;
  margin-top: 20px;
  position: relative;
  box-sizing: border-box;
  padding: 6px 10px 6px;
  font-size: 14px;
`;

const ExploreCollectives = styled.div`
  width: 100%;
  height: 40px;
  position: relative;
  box-sizing: border-box;
  padding: 10px 35px;
  color: #3b3b3b;
  &:active {
    background-color: #f1f1f3;
    font-weight: bold;
    border-right: solid 4px #f48024;
  }
  &:hover {
    color: #000000;
  }
`;

const InfoIcon = styled(FaInfoCircle)`
    left: 185px;
    position: absolute;
    color: #6c727a;
`

const Teams = styled.div`
  width: 100%;
  height: 30px;
  margin-top: 20px;
  position: relative;
  box-sizing: border-box;
  padding: 6px 10px 6px;
  font-size: 14px;
`;

const BriefcaseIcon = styled(IoMdBriefcase)`
  color: #f48024;
  position: absolute;
  left: 9px;
  top: 8px;
  width: 20px;
  height: 20px;
`;

const CreateFreeTeam = styled.div`
  width: 100%;
  height: 40px;
  position: relative;
  box-sizing: border-box;
  padding: 10px 35px;
  color: #3b3b3b;
  &:active {
    background-color: #f1f1f3;
    font-weight: bold;
    border-right: solid 4px #f48024;
  }
  &:hover {
    color: #000000;
  }
`;
const SidebarDropdown = () => {
  return (
    <>
      <SideContainer>
        <Home>Home</Home>
        <Public>PUBLIC</Public>
        <Questions>
          <GlobeIcon />
          Questions
        </Questions>
        <Tags>Tags</Tags>
        <Users>Users</Users>
        <Companies>Companies</Companies>
        <Collectives>
          COLLECTIVES
          <InfoIcon />
        </Collectives>
        <ExploreCollectives>
          <MedalIcon />
          Explore Collectives
        </ExploreCollectives>
        <Teams>
          TEAMS
          <InfoIcon />
        </Teams>
        <CreateFreeTeam>
          <BriefcaseIcon />
          Create Free Team
        </CreateFreeTeam>
      </SideContainer>
    </>
  );
};

export default SidebarDropdown;