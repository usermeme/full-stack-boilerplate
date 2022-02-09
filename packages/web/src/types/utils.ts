import { AxiosRequestConfig, AxiosResponse } from "axios";

export type ObjectValues<T> = T[keyof T];

export type ApiRequest<
  TResponseData,
  TRequestConfig = {
    data?: unknown;
    params?: unknown;
    extractRouteParams?: unknown;
  }
> = (
  config: Omit<AxiosRequestConfig, "data" | "params"> & TRequestConfig
) => Promise<AxiosResponse<TResponseData>>;
