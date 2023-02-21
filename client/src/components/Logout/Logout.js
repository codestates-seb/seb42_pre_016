import React from "react";
import {
  Wrapper,
  Form,
  Head,
  Text,
  Line,
  Checkbox,
  CheckText,
  LogoutButton,
  CancelButton,
  Imgsrc,
} from "../Style components/Logout_styled";
import Logout_ask from "../../img/Logout_ask.png";
import Logout_mo from "../../img/Logout_mo.png";
import Logout_server from "../../img/Logout_server.png";
import Logout_apps from "../../img/Logout_apps.png";
import Logout_exchange from "../../img/Logout_exchange.png";
import Logout_oveflow from "../../img/Logout_overflow.png";
import Logout_super from "../../img/Logout_super.png";

const Logout = () => {
  return (
    <Wrapper>
      <Head>
        Clicking “Log out” will log you out of the following domains on this
        device:
      </Head>
      <Form>
        <Imgsrc src={Logout_ask} top="10%" />
        <Text top="10%">askbuntu.com</Text>
        <Imgsrc src={Logout_mo} top="17%" />
        <Text top="17%">mathoverflow.net</Text>
        <Imgsrc src={Logout_server} top="24%" />
        <Text top="24%">serverfault.com</Text>
        <Imgsrc src={Logout_apps} top="31%" />
        <Text top="31%">stackpps.com</Text>
        <Imgsrc src={Logout_exchange} top="38%" />
        <Text top="38%">stackexchange.com</Text>
        <Imgsrc src={Logout_oveflow} top="45%" />
        <Text top="45%">stackoverflow.com</Text>
        <Imgsrc src={Logout_super} top="52%" />
        <Text top="52%">superuser.com</Text>
        <Line />
        <Checkbox />
        <CheckText>Log out on all devices</CheckText>
        <LogoutButton>Log out</LogoutButton>
        <CancelButton>Cancel</CancelButton>
      </Form>
    </Wrapper>
  );
};

export default Logout;
