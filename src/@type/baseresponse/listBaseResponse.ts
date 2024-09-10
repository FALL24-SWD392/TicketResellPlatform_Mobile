import { HttpStatusCode } from "@/src/constants/httpStatusCode.enum";

export interface ListBaseResponse<T> {
    data: T[];
    message: string;
    status: HttpStatusCode;
    size: number;
    page: number;
    totalSize: number;
    totalPage: number;
}