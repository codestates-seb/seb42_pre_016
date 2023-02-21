import React from "react";
import {
  Wrapper,
  Form,
  Head,
  Text,
  Line,
} from "../Style components/Logout_styled";

const Logout = () => {
  return (
    <Wrapper>
      <Head>
        Clicking “Log out” will log you out of the following domains on this
        device:
      </Head>
      <Form>
        <Text top="10%">askbuntu.com</Text>
        <Text top="17%">mathoverflow.net</Text>
        <Text top="24%">serverfault.com</Text>
        <Text top="31%">stackpps.com</Text>
        <Text top="38%">stackexchange.com</Text>
        <Text top="45%">stackoverflow.com</Text>
        <Text top="52%">superuser.com</Text>
        <Line />
      </Form>
    </Wrapper>
  );
};

export default Logout;
