import type {Session} from 'next-auth';
import {SessionProvider} from 'next-auth/react';
import type {AppProps} from 'next/app';
import {I18nProvider, OverlayContainer, SSRProvider} from 'react-aria';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/index.css';

export default function MyApp({
  Component,
  pageProps: {session, ...pageProps}
}: AppProps<{
  session: Session;
}>) {
  return (
    <I18nProvider locale="pt-BR">
      <SSRProvider>
        <OverlayContainer>
          <SessionProvider session={session}>
            <Component {...pageProps} />
            <ToastContainer
              closeButton
              hideProgressBar
              pauseOnHover
              newestOnTop
              position="bottom-right"
            />
          </SessionProvider>
        </OverlayContainer>
      </SSRProvider>
    </I18nProvider>
  );
}
