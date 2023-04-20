import React, { ReactElement, ReactNode } from 'react';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider, Hydrate } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { GlobalStyle, theme } from '@styles/index';
import { RecoilRoot } from 'recoil';
import { Layout } from '@components/Common';
import { ThemeProvider } from 'styled-components';
import { NextPage } from 'next';
import Script from 'next/script';

// eslint-disable-next-line @typescript-eslint/ban-types
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            retry: false,
            retryOnMount: false,
            refetchOnWindowFocus: false,
            refetchOnReconnect: false,

            onError: (err: unknown) => console.log(err),
          },
        },
      })
  );
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydrateState}>
        <Head>
          <title>Last1</title>
        </Head>
        <Script
          strategy="beforeInteractive"
          src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_KEY}&autoload=false&libraries=services`}
        />
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <RecoilRoot>
            <Layout>{getLayout(<Component {...pageProps} />)}</Layout>
          </RecoilRoot>
        </ThemeProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </Hydrate>
    </QueryClientProvider>
  );
}
