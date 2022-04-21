import { GET_USER_FUNDS, GET_USER_TRANSACTIONS } from "../../actionTypes";
import { mapKeys } from "lodash";

const initialState = {
  transactions: [],
  fundsByCurrency: {},
  totalFundsARS: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_FUNDS:
      return { ...state, fundsByCurrency: mapKeys(action.payload, "ticker") };
    case GET_USER_TRANSACTIONS:
      return { ...state, currencies: action.payload };
    default:
      return { ...state };
  }
};
