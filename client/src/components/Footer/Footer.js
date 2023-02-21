import React from "react";
import styled from "styled-components";
import Logo_Stackoverflow from "/Users/minju/seb42_pre_016/client/src/img/Logo_Stackoverflow.png"

const StackoverflowIcon = styled.img`
    width: 70px;
    height: 70px;
    margin-left: 10px;
    margin-top: 15px;
    display: flex;
`

const FooterContainer = styled.div`
    height: 370px;
    width: 100%;
    background-color: #292b2d;
    display: flex;
    flex-direction: row;
    .section {
        width: max-content;
        margin: 15px;
    }
    ul {
        width: max-content;
    }
    a {
        text-decoration: none;
        color: inherit;
        &:hover {
        color: #d3d3d3;
        }
    }
`
const Title = styled.ul`
    font-weight: bold;
    font-size: 18px;
    color: #babec2;
    &:hover {
    color: #e4e4e4;
  }
`

const Menu = styled.ul`
    font-size: 15px;
    color: #91989f;
    ul {
        position: relative;
        left: -40px;
        line-height: 30px;
    }
`

const SNSLinks = styled.div`
    flex-wrap: nowrap;
    font-size: 13px;
    display: flex;
    flex-direction: row;
    color: #91989f;
    position: relative;
    top: 25px;
    left: 75px;
    width: fit-content;
    height: 30px;
    ul {
        margin-right: -20px;
        &:hover {
        color: #e4e4e4;
        }
    }
    
`

const Copyright = styled.div`
    font-size: 13px;
    display: flex;
    flex-direction: row;
    color: #91989f;
    position: relative;
    top: 270px;
    left: -200px;
    width: 300px;
    height: 60px;
`

const Footer = () => {
    return (
        <>
        <FooterContainer>
            <StackoverflowIcon src={Logo_Stackoverflow}/>
            <div className="section">
                <Title>STACK OVERFLOW</Title>
                <Menu>
                    <ul><a href="https://stackoverflow.com/questions">Questions</a></ul>
                    <ul><a href="https://stackoverflow.com/help">Help</a></ul>
                </Menu>
            </div>
            <div className="section">
                <Title>PRODUCTS</Title>
                <Menu>
                    <ul><a href="https://stackoverflow.com/questions">Teams</a></ul>
                    <ul><a href="https://stackoverflow.com/help">Advertising</a></ul>
                    <ul><a href="https://stackoverflow.com/questions">Collectives</a></ul>
                    <ul><a href="https://stackoverflow.com/help">Talent</a></ul>
                </Menu>
            </div>
            <div className="section">
                <Title>COMPANY</Title>
                <Menu>
                    <ul><a href="https://stackoverflow.com/questions">About</a></ul>
                    <ul><a href="https://stackoverflow.com/help">Press</a></ul>
                    <ul><a href="https://stackoverflow.com/questions">Work Here</a></ul>
                    <ul><a href="https://stackoverflow.com/help">Legal</a></ul>
                    <ul><a href="https://stackoverflow.com/questions">Privacy Policy</a></ul>
                    <ul><a href="https://stackoverflow.com/help">Terms of Service</a></ul>
                    <ul><a href="https://stackoverflow.com/questions">Contact Us</a></ul>
                    <ul><a href="https://stackoverflow.com/help">Cookie Settings</a></ul>
                </Menu>
            </div>
            <div className="section">
                <Title>STACK EXCHANGE NETWORK</Title>
                <Menu>
                    <ul><a href="https://stackoverflow.com/questions">Technology</a></ul>
                    <ul><a href="https://stackoverflow.com/help">Culture & recreation</a></ul>
                    <ul><a href="https://stackoverflow.com/questions">Life & arts</a></ul>
                    <ul><a href="https://stackoverflow.com/help">Science</a></ul>
                    <ul><a href="https://stackoverflow.com/questions">Professional</a></ul>
                    <ul><a href="https://stackoverflow.com/help">Business</a></ul>
                    <ul><a href="https://stackoverflow.com/questions">API</a></ul>
                    <ul><a href="https://stackoverflow.com/help">Data</a></ul>
                </Menu>
            </div>
            <SNSLinks>
                <ul><a href="https://stackoverflow.com/help">Blog</a></ul>
                <ul><a href="https://stackoverflow.com/help">Facebook</a></ul>
                <ul><a href="https://stackoverflow.com/help">Twitter</a></ul>
                <ul><a href="https://stackoverflow.com/help">LinkedIn</a></ul>
                <ul><a href="https://stackoverflow.com/help">Instagram</a></ul>
            </SNSLinks>
            <Copyright>
            Site design / logo © 2023 Stack Exchange Inc; user contributions licensed under CC BY-SA. rev 2023.2.17.43248
            </Copyright>
        </FooterContainer>
        </>
    )
}

export default Footer;