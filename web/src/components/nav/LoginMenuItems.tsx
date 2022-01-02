import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { CgLogIn, CgLogOut } from "react-icons/cg";

import { apiSetting } from "lib/api";
import { invalidateQueries } from "lib/query";
import { MSG, PATH } from "lib/constants";
import { NavItem } from "./NavItem";
import { useUserQuery } from "queries/user";

export function LoginMenuItems() {
  const { isLogin } = useIsLogin();

  return isLogin ? (
    <NavItem Icon={CgLogOut} text="Home" onClick={logout} />
  ) : (
    <NavItem Icon={CgLogIn} href={PATH.LOGIN} text="로그인" />
  );
}

function useIsLogin() {
  const { isSuccess } = useUserQuery();

  return { isLogin: isSuccess };
}

function logout() {
  apiSetting.clear();
  invalidateQueries();
  toast.success(MSG.COMPLETE_LOGOUT);
}
