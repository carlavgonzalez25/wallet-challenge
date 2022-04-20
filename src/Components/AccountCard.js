import React from "react";
import styled from "styled-components";

const AccountCard = ({ name, funds, icon, conversion, currency }) => {
  return (
    <Container>
      <Header>
        <AccountName>Cuenta {name}</AccountName>
        <Buy>Comprar</Buy>
        <span>...</span>
      </Header>
      <FundsContainer>
        <Image src={icon} />
        <Amount>{funds}</Amount>
        <Currency>{currency}</Currency>
      </FundsContainer>
      <Conversion>{conversion}</Conversion>
    </Container>
  );
};

export default AccountCard;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 20px 34px 16px;
  background: #fff;
  border-radius: 5px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

const AccountName = styled.p`
  font-size: 16px;
  color: #a5a7af;
`;

const Buy = styled.a`
  color: #7908ff;
  cursor: pointer;
`;

const FundsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 16px;
`;

const Image = styled.img`
  width: 30px;
  height: auto;
`;
const Amount = styled.h1`
  font-size: 32px;
  font-weight: 500;
`;
const Currency = styled.h1`
  font-size: 32px;
  font-weight: 500;
`;

const Conversion = styled.p`
  text-align: center;
  font-size: 16px;
  line-height: 20px;
  color: #a5a7af;
`;
