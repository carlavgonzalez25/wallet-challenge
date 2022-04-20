import React from "react";
import styled from "styled-components";

//TODO: podria hacer un helper formateador de moneda
// El fund debe venir de redux

const Funds = () => {
  return <Container>$ 980000.00 ARS</Container>;
};

export default Funds;

const Container = styled.div`
  display: flex;
  margin-right: 30px;
`;
