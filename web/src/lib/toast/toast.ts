import { AxiosResponse } from "axios";
import { toast } from "react-hot-toast";

interface IApiResponse {
  msg: string;
  value?: string | object;
}

export function apiPromiseToast(callback: Promise<IApiResponse>) {
  return toast.promise(callback, {
    loading: "Loading...",
    success: (res) => res.msg,
    error: (res: IApiResponse) => res.msg,
  });
}
