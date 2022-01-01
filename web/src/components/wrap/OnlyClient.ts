import React, { ReactElement, useEffect, useState } from "react";

export function OnlyClient({ children }: { children: ReactElement }) {
  const [isMount, setIsMount] = useState(false);
  useEffect(() => setIsMount(true), []);

  if (!isMount) return null;

  return children;
}
