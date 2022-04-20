import React from "react";
import styled from "styled-components";
import { ReactComponent as Profile } from "../Assets/Icons/account.svg";
import { ReactComponent as Help } from "../Assets/Icons/help.svg";
import { ReactComponent as Notifications } from "../Assets/Icons/notifications.svg";

const Header = () => {
  return (
    <Container>
      <Logo>Ripio</Logo>

      <MenuContainer>
        <Help />
        <Notifications />
        <Profile />
      </MenuContainer>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 25px 30px;
  height: 5%;
`;

const Logo = styled.div``;

const MenuContainer = styled.div`
  display: flex;

  svg {
    padding: 0 5px;
  }
`;
