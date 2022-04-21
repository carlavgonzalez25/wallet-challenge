import { GET_USER_FUNDS, GET_USER_TRANSACTIONS } from "../../actionTypes";
import userFunds from "../../Assets/json/userFunds.json";

export const fetchUserFunds = () => (dispatch) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([...userFunds]);
      dispatch({ type: GET_USER_FUNDS, payload: [...userFunds] });
    }, 300);
  });
};

//TODO: falta implementar el transactions
export const fetchUserTransactions = () => (dispatch) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([]);
      dispatch({ type: GET_USER_TRANSACTIONS, payload: [] });
    }, 300);
  });
};
