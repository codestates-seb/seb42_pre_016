import React from "react";
import styled from "styled-components";
import Logo_Stackoverflow from "/Users/minju/seb42_pre_016/client/src/img/Logo_Stackoverflow.png"

const StackoverflowIcon = styled.img`
  width: 70px;
  height: 70px;
  margin-left: 10px;
  margin-top: 15px;
  display: flex;
`;

const FooterContainer = styled.div`
  position: static;
  flex: 1 1 auto;
  height: 370px;
  width: 100%;
  margin: 0px 0px;
  padding: 0px 0px;
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
  .footer-wrapper {
    display: flex;
  }
`;
const Title = styled.ul`
  font-weight: bold;
  font-size: 18px;
  color: #babec2;
  &:hover {
    color: #e4e4e4;
  }
`;

const Menu = styled.ul`
  font-size: 15px;
  color: #91989f;
  ul {
    position: relative;
    left: -40px;
    line-height: 30px;
  }
`;

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
`;

const Copyright = styled.div`
    font-size: 13px;
    color: #91989f;
    position: absolute;
    top: 1610px;
    left: 1125px;
    width: 300px;
    height: 70px;
`

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <Space />
        <div className="footer-wrapper">
          <StackoverflowIcon
            src={Logo_Stackoverflow}
            alt="Stack Overflow Logo"
          />
          <div className="section">
            <Title>
              <a href="https://stackoverflow.com/">STACK OVERFLOW</a>
            </Title>
            <Menu>
              <ul>
                <a href="https://stackoverflow.com/questions">Questions</a>
              </ul>
              <ul>
                <a href="https://stackoverflow.com/help">Help</a>
              </ul>
            </Menu>
          </div>
          <div className="section">
            <Title>
              <a href="https://stackoverflow.co/">PRODUCTS</a>
            </Title>
            <Menu>
              <ul>
                <a href="https://stackoverflow.co/teams">Teams</a>
              </ul>
              <ul>
                <a href="https://stackoverflow.co/advertising">Advertising</a>
              </ul>
              <ul>
                <a href="https://stackoverflow.co/collectives">Collectives</a>
              </ul>
              <ul>
                <a href="https://stackoverflow.co/talent">Talent</a>
              </ul>
            </Menu>
          </div>
          <div className="section">
            <Title>
              <a href="https://stackoverflow.co/">COMPANY</a>
            </Title>
            <Menu>
              <ul>
                <a href="https://stackoverflow.co/">About</a>
              </ul>
              <ul>
                <a href="https://stackoverflow.co/company/press">Press</a>
              </ul>
              <ul>
                <a href="https://stackoverflow.co/company/work-here">
                  Work Here
                </a>
              </ul>
              <ul>
                <a href="https://stackoverflow.com/legal">Legal</a>
              </ul>
              <ul>
                <a href="https://stackoverflow.com/legal/privacy-policy">
                  Privacy Policy
                </a>
              </ul>
              <ul>
                <a href="https://stackoverflow.com/legal/terms-of-service">
                  Terms of Service
                </a>
              </ul>
              <ul>
                <a href="https://stackoverflow.co/company/contact">
                  Contact Us
                </a>
              </ul>
              <ul>
                <a href="https://stackoverflow.com/questions/ask#">
                  Cookie Settings
                </a>
              </ul>
              <ul>
                <a href="https://stackoverflow.com/legal/cookie-policy">
                  Cookie Policy
                </a>
              </ul>
            </Menu>
          </div>
          <div className="section">
            <Title>
              <a href="https://stackexchange.com/">STACK EXCHANGE NETWORK</a>
            </Title>
            <Menu>
              <ul>
                <a href="https://stackexchange.com/sites#technology">
                  Technology
                </a>
              </ul>
              <ul>
                <a href="https://stackexchange.com/sites#culturerecreation">
                  Culture & recreation
                </a>
              </ul>
              <ul>
                <a href="https://stackexchange.com/sites#lifearts">
                  Life & arts
                </a>
              </ul>
              <ul>
                <a href="https://stackexchange.com/sites#science">Science</a>
              </ul>
              <ul>
                <a href="https://stackexchange.com/sites#professional">
                  Professional
                </a>
              </ul>
              <ul>
                <a href="https://stackexchange.com/sites#business">Business</a>
              </ul>
              <ul>
                <a href="https://api.stackexchange.com/">API</a>
              </ul>
              <ul>
                <a href="https://data.stackexchange.com/">Data</a>
              </ul>
            </Menu>
          </div>
          <SNSLinks>
            <ul>
              <a href="https://stackoverflow.blog/?blb=1&_ga=2.263772684.1259605100.1676857739-1484494193.1665685709">
                Blog
              </a>
            </ul>
            <ul>
              <a href="https://www.facebook.com/officialstackoverflow/">
                Facebook
              </a>
            </ul>
            <ul>
              <a href="https://twitter.com/stackoverflow">Twitter</a>
            </ul>
            <ul>
              <a href="https://linkedin.com/company/stack-overflow">LinkedIn</a>
            </ul>
            <ul>
              <a href="https://www.instagram.com/thestackoverflow">Instagram</a>
            </ul>
          </SNSLinks>
          <Copyright>
            Site design / logo © 2023 Stack Exchange Inc; user contributions
            licensed under{" "}
            <a href="https://stackoverflow.com/help/licensing">CC BY-SA</a>. rev
            2023.2.17.43248
          </Copyright>
        </div>
        <Space />
      </FooterContainer>
    </>
  );
};

export default Footer;
