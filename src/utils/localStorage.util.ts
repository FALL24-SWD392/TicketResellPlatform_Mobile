const setTokenToLocalStorage = (token: string) => {
  localStorage.setItem("token", token);
};

const getTokenFromLocalStorage = (): string | null => {
  return localStorage.getItem("token");
};

const removeTokenFromLocalStorage = () => {
  localStorage.removeItem("token");
};

export const lsUtil = {
  setToken: setTokenToLocalStorage,
  getToken: getTokenFromLocalStorage,
  removeToken: removeTokenFromLocalStorage,
};
