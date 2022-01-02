import { ReactElement, useEffect } from "react";
import router from "next/router";
import toast from "react-hot-toast";
import { useUserQuery } from "queries/user";

export function OnlyLoginUser({ children }: { children: ReactElement }) {
  const { isLoading, isSuccess, isError } = useUserQuery();

  useEffect(() => {
    if (isError) {
      toast.error("로그인이 필요합니다.");
      router.push("/login");
    }
  }, [isError]);

  // TODO : loader 추가
  if (isLoading) return null;

  return isSuccess ? children : null;
}
