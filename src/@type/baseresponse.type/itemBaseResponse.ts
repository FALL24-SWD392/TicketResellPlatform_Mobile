import { HttpStatusCode } from "@/src/constants/httpStatusCode.enum";

export interface ItemBaseResponse<T>{
    data: T;
    message: string;
    status: HttpStatusCode;
}