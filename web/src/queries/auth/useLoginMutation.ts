import { api } from "lib/api";
import { apiPromiseToast } from "lib/toast";
import { useCustomMutation } from "queries/utils";

export const useLoginMutation = () =>
  useCustomMutation<string>(
    (tokenId) => apiPromiseToast(api.post("/auth/login", { tokenId })),
    {}
  );
