import { api } from "lib/api";
import { apiPromiseToast } from "lib/toast";
import { invalidateQuery, useCustomMutation } from "lib/query";
import { IApiResponse } from "types";

export const useLoginMutation = () =>
  useCustomMutation<{ tokenId: string }>(
    ({ tokenId }) => apiPromiseToast(api.post("/auth/login", { tokenId })),
    {
      onSuccess: (res) => {
        saveTokens(res);
        invalidateQuery();
      },
    }
  );

function saveTokens(res: IApiResponse) {
  const { accessToken, refreshToken } = res.data.value;

  localStorage.setItem("accessToken", accessToken);
  localStorage.setItem("refreshToken", refreshToken);
}
