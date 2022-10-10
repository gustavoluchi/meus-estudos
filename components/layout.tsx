import Footer from './footer';
import Meta from './meta';
import MetaTitle from './metaTitle';

type Props = {
  children: React.ReactNode;
  pageTitle?: string;
};

const Layout = ({children, pageTitle}: Props) => {
  return (
    <div className="flex flex-col justify-between min-h-screen ">
      <Meta>{pageTitle && <MetaTitle pageTitle={pageTitle} />}</Meta>
      <main>{children}</main>
      <div>
        <div className="divider" />
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
