import type { AppProps } from "next/app";
import { initFirebase } from "lib/setting";
import { useEffect } from "react";

import "styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    initFirebase();
  }, []);

  return <Component data-theme="light" {...pageProps} />;
}

export default MyApp;
