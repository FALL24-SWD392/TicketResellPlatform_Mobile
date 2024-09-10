import { jwtDecode } from "jwt-decode";

const isValidToken = (token: string): boolean => {
  if (!token) {
    return false;
  }
  //   const decoded = jwtDecode<{ exp: number }>(token);
  return true;
};

export const jwtUtil = {
  isValidToken,
};
