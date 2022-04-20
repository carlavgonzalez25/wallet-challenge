import React from "react";
import styled from "styled-components";
import { ReactComponent as Home } from "../Assets/Icons/home.svg";
import { ReactComponent as Wallet } from "../Assets/Icons/savings.svg";
import { ReactComponent as Dots } from "../Assets/Icons/workspaces.svg";
import { ReactComponent as Savings } from "../Assets/Icons/savings.svg";
import { ReactComponent as Trade } from "../Assets/Icons/trade.svg";
import { ReactComponent as Rocket } from "../Assets/Icons/rocket.svg";

//TODO: buscar icons
// TODO: en el sections podria sumar un path y armar un router

const Sidebar = () => {
  const sections = {
    panel: {
      name: "Panel",
      icon: "Home",
    },
    billetera: {
      name: "Billetera",
      icon: "Wallet",
    },
    cotizaciones: {
      name: "Cotizaciones",
      icon: "Dots",
    },
    creditos: {
      name: "Creditos",
      icon: "Savings",
    },
    exchange: {
      name: "Exchange",
      icon: "Trade",
    },
    launchpad: {
      name: "Launchpad",
      icon: "Rocket",
    },
  };

  return (
    <Container>
      <MenuContainer>
        {Object.values(sections).map((section, i) => (
          <Section key={i} isActive={!i && true}>
            <Icons section={section.icon} />
            <Name>{section.name}</Name>
          </Section>
        ))}
      </MenuContainer>
      <Section>
        <Name>Salir</Name>
      </Section>
    </Container>
  );
};

export default Sidebar;

const Icons = ({ section }) => {
  const iconsMap = {
    Home,
    Wallet,
    Dots,
    Savings,
    Trade,
    Rocket,
  };

  const IconComponent = iconsMap[section];

  return IconComponent ? (
    <IconComponent style={{ fill: "#757575", strokeWidth: "1px" }} />
  ) : null;
};

const Container = styled.div`
  height: 100%;
  min-width: 250px;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Section = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-left: ${(props) => props.isActive && "4px solid #7908ff"};
  padding: 20px 10px;

  &:hover {
    cursor: pointer;
  }
`;

const Name = styled.p`
  font-size: 16px;
  padding-left: 10px;
`;
