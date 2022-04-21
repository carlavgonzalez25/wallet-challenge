import React, { useEffect, useState } from "react";
import { shallowEqual, useSelector } from "react-redux";
import styled from "styled-components";
import { ReactComponent as Arrow } from "../Assets/Icons/arrow_right.svg";

const Converter = () => {
  const [fromCurr, setFromCurr] = useState();
  const [toCurr, setToCurr] = useState();
  const [fromAmount, setFromAmount] = useState();
  const [toAmount, setToAmount] = useState();

  // FROM: monedas en las cuales tengo saldo
  // TO: cualquier moneda menos la seleccionada en from

  useEffect(() => {
    //Por cuestiones de tiempo voy a asignar esto de manera manual

    setFromCurr("BTC");
    setToCurr("ETH");
    setFromAmount(0);
    setToAmount(0);
  }, []);

  const fundsByCurrency = useSelector(
    ({ user }) => user.fundsByCurrency,
    shallowEqual
  );

  const currencies = useSelector(
    ({ currencies }) => currencies.currenciesBycurrency
  );

  const rates = useSelector(({ currencies }) => currencies.ratesByCurrency);

  //Obtener las monedas en las cuales tengo balance
  const getCurrenciesWithBalance = () => {
    return Object.values(fundsByCurrency)
      .filter((el) => el.funds > 0)
      .map((el) => el.ticker);
  };

  //Obtener a que monedas puedo convertir. La moneda TO debe ser distinta a FROM
  const getAvailableCurrencies = () => {
    const ARS = "ARS";

    const filteredCurrencies = Object.keys(currencies).filter(
      (key) => key !== ARS && key !== fromCurr
    );

    return filteredCurrencies;
  };

  const handleInputChange = (e) => {
    const value = e.target.value;

    setFromAmount(value);

    // aca debo setear el to amount.
    // esto se calcula
    //rateFromTo = sellPriceFROM / buyPriceTO
    //rateFromTo * amountFrom
    // vamos a hacer todo contra ARS

    const conversionTickerFrom = `${fromCurr}_ARS`;
    const conversionTickerTo = `${toCurr}_ARS`;

    const rate =
      Number(rates[conversionTickerFrom].sell_rate) /
      Number(rates[conversionTickerTo].buy_rate);

    setToAmount(rate * value);
  };

  const handleCurrChange = (name, e) => {
    if (name === "from") {
      setFromCurr(e.target.value);
    } else setToCurr(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    /*
     aca me falta llamar a un metodo que ejecute la conversión, actualice los saldos y luego ejecute la transacción 
    */
  };

  const regExp = /[+-]?([0-9]*[.])?[0-9]+/;

  return (
    <Container>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <Select value={fromCurr} onChange={(e) => handleCurrChange("from", e)}>
          {getCurrenciesWithBalance().map((option, i) => (
            <Option key={i}>{option}</Option>
          ))}
        </Select>
        <Input
          type="number"
          step="0.000001"
          pattern={regExp}
          onChange={handleInputChange}
          value={fromAmount}
        />
        <StyledArrow />
        <Select value={toCurr} onChange={(e) => handleCurrChange("to", e)}>
          {getAvailableCurrencies().map((option, i) => (
            <Option key={i}>{option}</Option>
          ))}
        </Select>
        <Input
          type="number"
          step="0.000001"
          pattern={regExp}
          readOnly
          value={toAmount}
        />

        <Button type="submit"> Convertir </Button>
      </Form>
    </Container>
  );
};

export default Converter;

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin: 16px 0;
`;

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
