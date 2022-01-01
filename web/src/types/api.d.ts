import { AxiosResponse, AxiosPromise } from "axios";

export interface TData {
  msg: string;
  value?: string | object;
}

export interface IApiResponse extends AxiosResponse<IData> {}

export interface IApi extends AxiosPromise<TData> {}
