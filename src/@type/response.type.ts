import { HttpStatusCode } from "../constants/httpStatusCode.enum";

export interface ItemBaseResponse<T> {
  data: T;
  message: string;
  status: HttpStatusCode;
}

export interface ListBaseResponse<T> {
  data: T[];
  message: string;
  status: HttpStatusCode;
  size: number;
  page: number;
  totalSize: number;
  totalPage: number;
}
