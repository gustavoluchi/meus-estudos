import {Analytics} from '@vercel/analytics/react';
import type {NextPage} from 'next';
import type {Session} from 'next-auth';
import {SessionProvider} from 'next-auth/react';
import type {AppProps} from 'next/app';
import {ReactElement, ReactNode} from 'react';
import {I18nProvider, OverlayContainer, SSRProvider} from 'react-aria';
import {QueryClient, QueryClientProvider} from 'react-query';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/index.css';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps<{
  session: Session;
}> & {
  Component: NextPageWithLayout;
};

export default function MyApp({Component, pageProps: {session, ...pageProps}}: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? (page => page);
  const queryClient = new QueryClient();

  return (
    <>
      <I18nProvider locale="pt-BR">
        <SSRProvider>
          <QueryClientProvider client={queryClient}>
            <OverlayContainer>
              <SessionProvider session={session}>
                {getLayout(<Component {...pageProps} />)}
                <ToastContainer
                  closeButton
                  closeOnClick
                  hideProgressBar
                  pauseOnHover
                  newestOnTop
                  autoClose={5000}
                  position="bottom-right"
                />
              </SessionProvider>
            </OverlayContainer>
          </QueryClientProvider>
        </SSRProvider>
      </I18nProvider>
      <Analytics />
    </>
  );
}
