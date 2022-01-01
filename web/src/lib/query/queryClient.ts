import { QueryClient } from "react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 30 * 60 * 1000,
    },
  },
});

export const invalidateQueries =
  queryClient.invalidateQueries.bind(queryClient);
