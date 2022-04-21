import {
  BUY_CURRENCY,
  GET_USER_FUNDS,
  GET_USER_TRANSACTIONS,
  GET_USER_FIAT_FUNDS,
  POST_TRANSACTION,
} from "../../actionTypes";
import { mapKeys, merge } from "lodash";

const initialState = {
  transactions: [],
  fundsByCurrency: {},
  totalFundsARS: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_FUNDS:
      return { ...state, fundsByCurrency: mapKeys(action.payload, "ticker") };
    case GET_USER_FIAT_FUNDS:
      return { ...state, totalFundsARS: action.payload };
    case GET_USER_TRANSACTIONS:
      return { ...state, transactions: action.payload };
    case BUY_CURRENCY:
      return {
        ...state,
        fundsByCurrency: merge(state.fundsByCurrency, action.payload.currency),
        totalFundsARS: action.payload.totalFundsARS,
      };
    case POST_TRANSACTION:
      return {
        ...state,
        transactions: [...state.transactions, action.payload],
      };
    default:
      return { ...state };
  }
};
