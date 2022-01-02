import { ReactElement } from "react";
import router from "next/router";
import toast from "react-hot-toast";
import { useUserQuery } from "queries/user";

export function OnlyLoginUser({ children }: { children: ReactElement }) {
  const { isLoading, isSuccess } = useUserQuery();

  if (isLoading) return null;

  if (isSuccess) {
    return children;
  } else {
    toast.error("로그인이 필요합니다.");
    router.push("/login");
  }
}
