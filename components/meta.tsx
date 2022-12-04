import Head from 'next/head';
const logo = '/favicon/favicon.ico';
const description = `Projeto de conclusão do curso de pós-graduação MBA em desenvolvimento full 
stack na faculdade XP Educação. Feito por Gustavo Luchi da Silva em 2022.`;

const Meta = ({pageTitle = 'Meus estudos'}: {pageTitle?: string}) => {
  return (
    <Head>
      <meta charSet="utf-8" />
      <link rel="icon" href={logo} />
      <link rel="shortcut icon" type="image/x-icon" href={logo} />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/favicon/safari-pinned-tab.svg"
        color="#000000"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <meta itemProp="description" content={description} />
      <meta itemProp="image" content={logo} />

      <meta name="description" content={description} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={logo} />
      <meta property="og:type" content="website" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@Elegance" />
      <meta name="twitter:creator" content="@StevenTey" />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={logo} />

      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#000" />
      <title>{pageTitle}</title>
      <meta itemProp="name" content={pageTitle} />
      <meta property="og:title" content={pageTitle} />
      <meta name="twitter:title" content={pageTitle} />
    </Head>
  );
};

export default Meta;
