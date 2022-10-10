const MetaTitle = ({pageTitle}: {pageTitle: string}) => {
  return (
    <>
      <title>{pageTitle}</title>
      <meta itemProp="name" content={pageTitle} />
      <meta property="og:title" content={pageTitle} />
      <meta name="twitter:title" content={pageTitle} />
    </>
  );
};

export default MetaTitle;
