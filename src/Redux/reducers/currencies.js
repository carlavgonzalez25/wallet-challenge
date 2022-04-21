import { GET_CURRENCIES, GET_RATES } from "../../actionTypes";
import { mapKeys } from "lodash";

const initialState = {
  ratesByCurrency: {},
  currenciesBycurrency: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_RATES:
      return { ...state, ratesByCurrency: mapKeys(action.payload, "ticker") };
    case GET_CURRENCIES:
      return {
        ...state,
        currenciesBycurrency: mapKeys(action.payload, "ticker"),
      };
    default:
      return { ...state };
  }
};
