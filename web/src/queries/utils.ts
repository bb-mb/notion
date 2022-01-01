import {
  MutationFunction,
  MutationKey,
  useMutation,
  UseMutationOptions,
  useQueries,
} from "react-query";
import { IApiResponse } from "types";

export function useCustomMutation<TVariables>(
  mutationFn: MutationFunction<IApiResponse, TVariables>,
  options: Omit<
    UseMutationOptions<IApiResponse, IApiResponse, TVariables, unknown>,
    "mutationKey" | "mutationFn"
  >
) {
  return useMutation<IApiResponse, IApiResponse, TVariables>(
    mutationFn,
    options
  );
}
