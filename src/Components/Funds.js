import React from "react";
import styled from "styled-components";

//TODO: podria hacer un helper formateador de moneda

const Funds = ({ value }) => {
  return <Value>$ {value} ARS</Value>;
};

export default Funds;

const Value = styled.h4`
  display: flex;
  margin-right: 30px;
  font-size: 20px;
`;
