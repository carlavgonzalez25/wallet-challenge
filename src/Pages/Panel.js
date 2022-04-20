import React from "react";
import styled from "styled-components";
import Funds from "../Components/Funds";
import Converter from "../Components/Converter";
import AccountCard from "../Components/AccountCard";
import Transactions from "../Components/Transactions";

const Panel = () => {
  return (
    <Container>
      <Header>
        <TextContainer>
          <Title>Mi billetera</Title>
          <Text>
            En tu billetera vas a poder almacenar todas las criptomonedas que
            compres en Ripio
          </Text>
        </TextContainer>
        <Funds />
      </Header>
      <Converter />
      <CardsContainer>
        <AccountCard
          name={"Bitcoin"}
          funds={0.00948}
          currency={"BTC"}
          icon={null}
          conversion={"AR$ 1290"}
        ></AccountCard>
        <AccountCard
          name={"Bitcoin"}
          funds={0.00948}
          currency={"BTC"}
          icon={null}
          conversion={"AR$ 1290"}
        ></AccountCard>
        <AccountCard
          name={"Bitcoin"}
          funds={0.00948}
          currency={"BTC"}
          icon={null}
          conversion={"AR$ 1290"}
        ></AccountCard>
        <AccountCard
          name={"Bitcoin"}
          funds={0.00948}
          currency={"BTC"}
          icon={null}
          conversion={"AR$ 1290"}
        ></AccountCard>
      </CardsContainer>
      <Transactions />
    </Container>
  );
};

export default Panel;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: #f9f9f9;
`;

const Header = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  font-size: 20px;
`;
const Text = styled.p`
  font-size: 16px;
`;

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 32px;
  padding: 16px;
`;
