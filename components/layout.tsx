import Footer from './footer';
import Meta from './meta';

type Props = {
  children: React.ReactNode;
  pageTitle?: string;
};

const Layout = ({children, pageTitle}: Props) => {
  return (
    <div className="flex flex-col justify-between min-h-screen ">
      <Meta pageTitle={pageTitle} />
      <main>{children}</main>
      <div>
        <div className="divider" />
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
