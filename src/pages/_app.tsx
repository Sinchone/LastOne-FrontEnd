import React, { ReactElement, ReactNode } from 'react';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider, Hydrate } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { GlobalStyle, theme } from '@styles/index';
import { RecoilRoot } from 'recoil';
import { Layout, Modal } from '@components/Common';
import { ThemeProvider } from 'styled-components';
import { NextPage } from 'next';
import Script from 'next/script';
import { AxiosError } from 'axios';
import { useRouter } from 'next/router';
import { getAccessTokenFromCookie } from '@utils/token';

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

            onError: (err: unknown) => {
              if (err instanceof AxiosError) console.log(true);
            },
          },
        },
      })
  );
  const getLayout = Component.getLayout ?? ((page) => page);

  const router = useRouter();
  const loginRequiredPages = ['/post/write', '/mypage', '/mypage/edit'];
  const modalText = {
    label: '로그인 시간이 만료되었어요!\n해당 페이지는 로그인을 해야 이용이 가능해요',
    confirm: '로그인 하러가기',
    cancel: '홈으로 가기',
  };

  if (typeof window !== 'undefined') {
    if (loginRequiredPages.includes(router.pathname) && !getAccessTokenFromCookie()) {
      return (
        <Modal
          hasArrow
          isOpen={true}
          handleClose={() => null}
          handleConfirm={() => router.push('/login')}
          handleCancel={() => router.push('/')}
          text={modalText}
        />
      );
    }
  }

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydrateState}>
        <Head>
          <title>Last1</title>
        </Head>
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
