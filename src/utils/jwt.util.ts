import { jwtDecode } from "jwt-decode";
import { Token, User } from "../@type/user.type";

const decodeToken = (token: Token): User => {
  return jwtDecode<User>(token.accessToken);
}

export const jwtUtil = {
  decodeToken,
};
