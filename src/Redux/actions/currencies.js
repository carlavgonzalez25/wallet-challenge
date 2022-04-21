import { GET_RATES, GET_CURRENCIES } from "../../actionTypes";
import currencies from "../../Assets/json/currencies.json";
import rates from "../../Assets/json/rates.json";

//import axios from "axios";

//const baseURL = "https://app.ripio.com/api/v3";

export const fetchRates = () => (dispatch) => {
  //Estoy teniendo un error de CORS desde localhost asi que voy a mockear la data
  /* 
  return axios
    .get(`${baseURL}/rates/?country=AR`)
    .then((res) => res.data)
    .then((data) => {
      dispatch({ type: GET_RATES, payload: data });
    })
    .catch((err) => console.error(err)); 
   */

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([...rates]);
      dispatch({ type: GET_RATES, payload: [...rates] });
    }, 300);
  });
};

export const fetchCurrencies = () => (dispatch) => {
  /*  return axios
    .get(`${baseURL}/currencies/`)
    .then((res) => res.data)
    .then((data) => {
      dispatch({ type: GET_CURRENCIES, payload: data });
    }); */

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([...rates]);
      dispatch({ type: GET_CURRENCIES, payload: [...currencies] });
    }, 300);
  });
};
