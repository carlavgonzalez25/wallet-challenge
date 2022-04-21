import React, { useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { buyCurrency } from "../Redux/actions/user";

const BuyForm = ({ ticker, handleBuyForm }) => {
  const [ARSValue, setARSValue] = useState(); //TODO: aca deberia ser el valor minimo
  const [currencyValue, setCurrencyValue] = useState();

  const dispatch = useDispatch();

  const rates = useSelector(({ currencies }) => currencies.rates, shallowEqual);
  const ARSFunds = useSelector(({ user }) => user.totalFundsARS, shallowEqual);

  //TODO: validar que exita algun balance de esta moneda
  const currencyFunds = useSelector(
    ({ user }) => user.fundsByCurrency[ticker].funds,
    shallowEqual
  );
  const funds = useSelector(({ user }) => user.fundsByCurrency, shallowEqual);
  console.log("🚀 ~ file: BuyForm.js ~ line 27 ~ BuyForm ~ funds", funds);
  console.log("🚀 ~ file: BuyForm.js ~ line 11 ~ BuyForm ~ ARSFunds", ARSFunds);

  const conversionTicker = `${ticker}_ARS`;
  const minBuyAmount = 2000;
  const buyRate = rates[conversionTicker]?.buy_rate;

  const getAmount = () => {
    return ARSValue / buyRate;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newARSBalance = ARSFunds - ARSValue;
    const newCurrencyBalance = currencyFunds + currencyValue;

    const currencyPayload = {
      totalFundsARS: newARSBalance,
      currency: { [ticker]: { funds: newCurrencyBalance } },
    };

    dispatch(buyCurrency({ currencyPayload })).then((res) =>
      console.log("La transaccion se ejecuto !")
    );
  };

  const handleChange = (e) => {
    setARSValue(e.target.value);
    setCurrencyValue(e.target.value / buyRate);
  };

  return (
    <Container>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <Header>
          <Title>Seleccione el monto a comprar {ticker} </Title>
          <Close type="button" onClick={() => handleBuyForm(false, null)}>
            X
          </Close>
        </Header>
        <Text>Valor de compra: {buyRate} ARS</Text>
        <Text>Saldo disponible: {ARSFunds} ARS </Text>
        <Text>Compra mínima: {minBuyAmount} ARS </Text>
        <InputContaier>
          <Input
            type="number"
            step="0.01"
            name="amountARS"
            placeholder="ARS"
            onChange={(e) => handleChange(e)}
            value={ARSValue}
            max={ARSFunds}
            min={minBuyAmount}
          />
          <Text>ARS</Text>
        </InputContaier>
        <InputContaier>
          <Input
            type="number"
            step="0.01"
            name="amountCurrency"
            placeholder={ticker}
            readOnly
            value={currencyValue}
          />
          <Text>{ticker}</Text>
        </InputContaier>
        <Button type="submit">Comprar</Button>
      </Form>
    </Container>
  );
};

export default BuyForm;

const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  background: #9d9c9c82;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.h4`
  margin: 16px 0;
`;
const Text = styled.p`
  margin: 6px 0;
`;

const Close = styled.button`
  width: 20px;
  height: 20px;
  align-self: center;
  border: none;
  background: none;
  &:hover {
    cursor: pointer;
  }
`;

const Form = styled.form`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  height: fit-content;
  padding: 16px;
  background: #fff;
  display: flex;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  border-radius: 5px;
`;

const InputContaier = styled.div`
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  margin: 16px 0;
  min-width: 200px;
  padding: 8px 16px;
  border: none;
  border-bottom: 1px solid #7908ff;
`;

const Button = styled.button`
  padding: 8px 16px;
  background: linear-gradient(90deg, #7908ff 0%, #8b43e0 100%);
  border-radius: 20px;
  border: none;
  color: #fff;
  cursor: pointer;
  max-height: 44px;
`;
