import router from "next/router";

import { api, apiSetting } from "lib/api";
import { apiPromiseToast } from "lib/toast";
import { useCustomMutation, invalidateQueries } from "lib/query";
import { IApiResponse } from "types";

export const useLoginMutation = () =>
  useCustomMutation<{ tokenId: string }>(
    ({ tokenId }) => apiPromiseToast(api.post("/auth/login", { tokenId })),
    {
      onSuccess: (res) => {
        saveTokens(res);
        invalidateQueries();
        router.push("/");
      },
    }
  );

function saveTokens(res: IApiResponse) {
  const { accessToken, refreshToken } = res.data.value;

  localStorage.setItem("accessToken", accessToken);
  localStorage.setItem("refreshToken", refreshToken);
  apiSetting.setAuthorization();
}
