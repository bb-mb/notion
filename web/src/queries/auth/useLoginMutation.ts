import { useMutation } from "react-query";

import { api } from "lib/api";
import { apiPromiseToast } from "lib/toast";
import { IApiResponse } from "types";

export const useLoginMutation = (tokenId: string) =>
  useMutation<IApiResponse>(
    apiPromiseToast(api.post("/auth/login", { tokenId }))
  );
