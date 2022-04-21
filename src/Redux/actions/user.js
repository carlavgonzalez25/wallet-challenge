import {
  GET_USER_FUNDS,
  GET_USER_TRANSACTIONS,
  BUY_CURRENCY,
  GET_USER_FIAT_FUNDS,
  POST_TRANSACTION,
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

export const fetchUserTransactions = () => (dispatch) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
      dispatch({ type: GET_USER_TRANSACTIONS, payload: [...userTransactions] });
    }, 300);
  });
};

export const buyCurrency =
  ({ currencyPayload, transactionPayload }) =>
  (dispatch) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
        dispatch({
          type: BUY_CURRENCY,
          payload: currencyPayload,
        });
      }, 300);
    }).then(() => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve();
          dispatch({ type: POST_TRANSACTION, payload: transactionPayload });
        }, 300);
      });
    });
  };

export const postTransaction = (payload) => (dispatch) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
      dispatch({ type: POST_TRANSACTION, payload });
    }, 300);
  });
};
