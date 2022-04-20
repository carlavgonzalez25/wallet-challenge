import React from "react";
import styled from "styled-components";

const Transactions = () => {
  const titles = [
    "Fecha",
    "Tipo operacion",
    "Método",
    "Estado",
    "Comisión",
    "Monto",
  ];

  return (
    <Container>
      <Title>Mis movimientos</Title>
      <Row>
        {titles.map((title, i) => (
          <TableTitle key={i + title}>{title}</TableTitle>
        ))}
      </Row>
      <Row>
        <Item>11/03/2018</Item>
        <Item>Compra de BTC</Item>
        <Item>Cuenta Pesos</Item>
        <Item>Completado</Item>
        <Item>-AR$ 5</Item>
        <Item>+ 0.00948 BTC</Item>
      </Row>
      <Row>
        <Item>11/03/2018</Item>
        <Item>Compra de BTC</Item>
        <Item>Cuenta Pesos</Item>
        <Item>Completado</Item>
        <Item>-AR$ 5</Item>
        <Item>+ 0.00948 BTC</Item>
      </Row>
    </Container>
  );
};

export default Transactions;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 16px;
`;

const Title = styled.h4`
  font-family: Lato;
  font-size: 16px;
  font-weight: 500;
  line-height: 16px;
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  margin: 24px 0;
`;

const TableTitle = styled.p`
  font-family: Lato;
  font-size: 16px;
  font-weight: 400;
  line-height: 16px;
  color: #a5a7af;
`;

const Item = styled.p`
  font-family: Lato;
  font-size: 16px;
  font-weight: 400;
  line-height: 16px;
  color: #373744;
`;
