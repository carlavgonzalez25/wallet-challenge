import {
  GET_USER_FUNDS,
  GET_USER_TRANSACTIONS,
  BUY_CURRENCY,
  GET_USER_FIAT_FUNDS,

  //POST_TRANSACTION,
} from "../../actionTypes";
import userFunds from "../../Data/userBalance.json";
import userFiatFunds from "../../Data/userFiatBalance.json";
import userTransactions from "../../Data/userTransactions.json";

// Simulamos un GET
export const fetchUserFunds = () => (dispatch) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
      dispatch({ type: GET_USER_FUNDS, payload: [...userFunds] });
    }, 300);
  });
};

export const fetchUserFiatFunds = () => (dispatch) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
      dispatch({
        type: GET_USER_FIAT_FUNDS,
        payload: userFiatFunds.funds,
      });
    }, 300);
  });
};

//TODO: falta implementar el transactions
export const fetchUserTransactions = () => (dispatch) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([]);
      dispatch({ type: GET_USER_TRANSACTIONS, payload: [...userTransactions] });
    }, 300);
  });
};

export const buyCurrency =
  ({ currencyPayload }) =>
  (dispatch) => {
    console.log("action, ", currencyPayload);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
        dispatch({
          type: BUY_CURRENCY,
          payload: currencyPayload,
        });
      }, 300);
    }); /* .then((res) => {
      dispatch({
        type: POST_TRANSACTION,
        payload: [ticker, amountCurrency],
      });
    }); */
  };
