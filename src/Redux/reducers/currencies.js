import { GET_CURRENCIES, GET_RATES } from "../../actionTypes";
import { mapKeys } from "lodash";

const initialState = {
  rates: {},
  currencies: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_RATES:
      return { ...state, rates: mapKeys(action.payload, "ticker") };
    case GET_CURRENCIES:
      return { ...state, currencies: action.payload };
    default:
      return { ...state };
  }
};
