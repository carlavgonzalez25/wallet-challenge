import React, { useEffect } from "react";
import styled from "styled-components";
import Funds from "../Components/Funds";
import Converter from "../Components/Converter";
import AccountCard from "../Components/AccountCard";
import Transactions from "../Components/Transactions";
import { fetchCurrencies, fetchRates } from "../Redux/actions/currencies";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { fetchUserFunds } from "../Redux/actions/user";
import { roundNumber } from "../Helpers/roundNumber";

const Panel = () => {
  const dispatch = useDispatch();
  const rates = useSelector(({ currencies }) => currencies.rates, shallowEqual);

  const currencies = useSelector(
    ({ currencies }) => currencies.currencies,
    shallowEqual
  );

  const userFunds = useSelector(
    ({ user }) => user.fundsByCurrency,
    shallowEqual
  );

  /* console.log("rates ", rates);
  console.log("currencies ", currencies);
 */
  useEffect(() => {
    dispatch(fetchRates());
    dispatch(fetchCurrencies());
    dispatch(fetchUserFunds());
  }, [dispatch]);

  const getFunds = (ticker) => {
    return userFunds.hasOwnProperty(ticker) ? userFunds[ticker].funds : 0;
  };

  const getARSConversion = (ticker) => {
    const conversionTicker = `${ticker}_ARS`;

    if (rates.hasOwnProperty(conversionTicker)) {
      if (!userFunds.hasOwnProperty(ticker)) return 0;

      return `${roundNumber(
        userFunds[ticker]?.funds * Number(rates[conversionTicker]?.sell_rate)
      )}`;
    } else return 0;
  };

  const getTotalFundsARS = () => {
    return Object.keys(userFunds).reduce((acum, key) => {
      return acum + Number(getARSConversion(key));
    }, 0);
  };

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
        <Funds value={getTotalFundsARS()} />
      </Header>
      <Converter />
      <CardsContainer>
        {currencies.map((curr, i) => (
          <AccountCard
            name={curr.name}
            funds={getFunds(curr.ticker)}
            currency={curr.ticker}
            icon={curr?.url_images?.image_svg || null}
            conversion={"ARS " + getARSConversion(curr.ticker)}
            key={curr.name + i}
          />
        ))}
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
  margin: 16px;
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
