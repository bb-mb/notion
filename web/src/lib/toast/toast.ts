import { AxiosPromise } from "axios";
import { toast } from "react-hot-toast";
import { IApi } from "types";

export function apiPromiseToast(callback: IApi) {
  return toast.promise(callback, {
    loading: "Loading...",
    success: (res) => res.data.msg,
    error: (res) => res?.data?.msg || "잠시 후 다시 시도해주세요.",
  });
}
