import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import type { AppProps } from "next/app";

import { initFirebase } from "lib/setting";
import { queryClient } from "lib/query";
import { Layout } from "components/layout";
import "styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    initFirebase();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Component data-theme="light" {...pageProps} />
      </Layout>
      <Toaster />
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default MyApp;
