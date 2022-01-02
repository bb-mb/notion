import {
  QueryFunction,
  QueryKey,
  useQuery,
  UseQueryOptions,
} from "react-query";
import { AxiosResponse } from "axios";
import { IApiResponse } from "types";

export function useCustomQuery<
  TQueryFnData = IApiResponse,
  TError = IApiResponse,
  // TData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey
>(
  queryKey: TQueryKey,
  queryFn: QueryFunction<AxiosResponse<TQueryFnData, any>, QueryKey>,
  options: Omit<
    UseQueryOptions<
      AxiosResponse<TQueryFnData, any>,
      TError,
      TQueryFnData,
      TQueryKey
    >,
    "queryKey" | "queryFn"
  >
) {
  return useQuery<AxiosResponse<TQueryFnData>, TError, TQueryFnData, TQueryKey>(
    queryKey,
    queryFn,
    { select: (res) => res.data, ...options }
  );
}
