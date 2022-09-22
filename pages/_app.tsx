import type {Session} from 'next-auth';
import {SessionProvider} from 'next-auth/react';
import type {AppProps} from 'next/app';
import {I18nProvider, OverlayContainer, SSRProvider} from 'react-aria';
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
          </SessionProvider>
        </OverlayContainer>
      </SSRProvider>
    </I18nProvider>
  );
}
