import React from 'react';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider, Hydrate } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import GlobalStyle from '@styles/globalStyles';
import { RecoilRoot } from 'recoil';
import { Layout } from '@components/Common';

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            retry: false,
            retryOnMount: false,
            refetchOnWindowFocus: false,
            refetchOnReconnect: false,
          },
        },
      })
  );
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydrateState}>
        <Head>
          <title>LastOne</title>
        </Head>
        <GlobalStyle />
        <RecoilRoot>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </RecoilRoot>
        <ReactQueryDevtools initialIsOpen={false} />
      </Hydrate>
    </QueryClientProvider>
  );
}
