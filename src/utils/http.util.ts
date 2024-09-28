import axios, { AxiosInstance } from "axios";
import { lsUtil } from "./localStorage.util";
import { API_URL } from "@env";
import { Token } from "../@type/user.type";
class Http {
  instance: AxiosInstance;
  token: Token | null;

  constructor() {
    this.token = lsUtil.getToken();
    this.instance = axios.create({
      baseURL: API_URL,
      timeout: 10000,
      headers: {
        "Content-Type": "application/json",
      },
    });
    this.instance.interceptors.request.use(
      (config) => {
        this.token = this.token ? this.token : lsUtil.getToken();
        if (this.token) {
          config.headers.Authorization = `Bearer ${this.token.accessToken}`;
          return config;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
    this.instance.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  }
}

const http = new Http().instance;
export { http };
