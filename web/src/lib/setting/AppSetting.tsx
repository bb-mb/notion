import { useEffect } from "react";
import { initFirebase } from "lib/setting";
import { useUserQuery } from "queries/user";

export function AppSetting() {
  const { data } = useUserQuery();

  useEffect(() => {
    initFirebase();
  }, []);

  return null;
}
