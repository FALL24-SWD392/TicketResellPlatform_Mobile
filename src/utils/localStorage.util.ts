import { Token } from "../@type/user.type";

const setTokenToLocalStorage = (token: Token) => {
  localStorage.setItem("token", JSON.stringify(token));
};

const getTokenFromLocalStorage = (): Token | null => {
  return JSON.parse(localStorage.getItem("token") || "null");
};

const removeTokenFromLocalStorage = () => {
  localStorage.removeItem("token");
};

export const lsUtil = {
  setToken: setTokenToLocalStorage,
  getToken: getTokenFromLocalStorage,
  removeToken: removeTokenFromLocalStorage,
};
