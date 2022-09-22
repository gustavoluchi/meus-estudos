import {SessionProvider} from 'next-auth/react';
import {AppProps} from 'next/app';
import {I18nProvider, OverlayContainer, SSRProvider} from 'react-aria';
import '../styles/index.css';

export default function MyApp({
  Component,
  pageProps: {session, ...pageProps}
}: AppProps<any>) {
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
