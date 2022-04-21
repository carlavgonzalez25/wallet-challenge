import React from "react";
import styled from "styled-components";
import { ReactComponent as Arrow } from "../Assets/Icons/arrow_right.svg";

const Converter = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Container>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <Item name="ETH" options={["BTC", "ARS", "DAI"]} />
        <StyledArrow />
        <Item name="ARS" options={["BTC", "ETH", "DAI"]} />
        <Button type="submit"> Convertir </Button>
      </Form>
    </Container>
  );
};

export default Converter;

const Item = ({ name, options }) => {
  const regExp = /[+-]?([0-9]*[.])?[0-9]+/;

  return (
    <Container>
      <Select>
        {options.map((option, i) => (
          <Option key={i}>{option}</Option>
        ))}
      </Select>
      <Input type="number" step="0.000001" pattern={regExp} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin: 16px 0;
`;

const Name = styled.h1``;

const Select = styled.select`
  font-size: 48px;
  border: none;
  background: transparent;
  padding: 16px 16px 0 0;
`;

const Option = styled.option`
  font-size: 30px;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
`;

const Input = styled.input`
  max-width: 250px;
  font-size: 48px;
  border: none;
  border-bottom: 1px solid #7908ff;
  background: transparent;
`;

const Button = styled.button`
  background: linear-gradient(90deg, #7908ff 0%, #8b43e0 100%);
  padding: 12px;
  min-width: 200px;
  border-radius: 20px;
  border: none;
  color: #fff;
  margin-left: 16px;
  cursor: pointer;
  max-height: 44px;
  align-self: center;
`;

const StyledArrow = styled(Arrow)`
  width: 50px;
  fill: #d8d9e2;
`;
