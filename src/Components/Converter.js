import React from "react";
import styled from "styled-components";

const Converter = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Container>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <Item name="ETH" options={["BTC", "ARS", "DAI"]} />
        <Item name="ARS" options={["BTC", "ETH", "DAI"]} />
        <Button type="submit"> Convertir </Button>
      </Form>
    </Container>
  );
};

export default Converter;

const Item = ({ name, options }) => {
  return (
    <Container>
      <Name>{name}</Name>
      <Select>
        {options.map((option, i) => (
          <Option key={i}>{option}</Option>
        ))}
      </Select>
      <Input />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
`;

const Name = styled.h1``;
const Select = styled.select``;

const Option = styled.option``;

const Form = styled.form`
  display: flex;
`;

const Input = styled.input``;

const Button = styled.button`
  background: linear-gradient(90deg, #7908ff 0%, #8b43e0 100%);
  padding: 16px 30px;
  border-radius: 20px;
`;
