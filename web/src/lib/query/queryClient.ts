import { QueryClient } from "react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      staleTime: 30 * 60 * 1000,
    },
  },
});

export const invalidateQueries =
  queryClient.invalidateQueries.bind(queryClient);
