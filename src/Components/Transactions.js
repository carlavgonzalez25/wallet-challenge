import React from "react";
import { shallowEqual, useSelector } from "react-redux";
import styled from "styled-components";
import { TRANSACTION_TYPE } from "../Constants/transactionTypes";

const Transactions = () => {
  const transactions = useSelector(
    ({ user }) => user.transactions,
    shallowEqual
  );

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

      {transactions.map((el, i) => (
        <Row key={i}>
          <Item>{el.date}</Item>
          <Item>
            {TRANSACTION_TYPE[el.type].name + el.transaction_amount.currency}
          </Item>
          <Item>{el.method}</Item>
          <Item>{el.status}</Item>
          <Item>{`${el.fee.amount} ${el.fee.currency}`}</Item>
          <Item>{`${el.transaction_amount.amount} ${el.transaction_amount.currency}`}</Item>
        </Row>
      ))}
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
