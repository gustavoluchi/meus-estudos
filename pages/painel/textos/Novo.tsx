import Container from '@/components/container';
import Header from '@/components/header';
import Layout from '@/components/layout';
import useRequireAuth from '@/lib/useRequireAuth';
import useNewPost from 'modules/post/useCases/useNewPost';
import NewPost from 'modules/post/view/newPost';
import type {NextPageWithLayout} from 'pages/_app';
import type {ReactElement} from 'react';

const Novo: NextPageWithLayout = () => {
  const {status} = useRequireAuth();
  const props = useNewPost();
  if (status === 'authenticated') return <NewPost props={props} />;
  return null;
};
Novo.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <Container>
        <Header />
        {page}
      </Container>
    </Layout>
  );
};

export default Novo;
