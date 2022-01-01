import { useEffect } from "react";
import { QueryClientProvider, QueryClient } from "react-query";
import type { AppProps } from "next/app";

import { initFirebase } from "lib/setting";
import "styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    initFirebase();
  }, []);

  return (
    <QueryClientProvider client={new QueryClient()}>
      <Component data-theme="light" {...pageProps} />
    </QueryClientProvider>
  );
}

export default MyApp;
