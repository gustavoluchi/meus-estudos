import Container from '@/components/container';
import Header from '@/components/header';
import Layout from '@/components/layout';
import useRequireAuth from '@/lib/useRequireAuth';
import useEditPost from 'modules/post/useCases/useEditPost';
import NewPost from 'modules/post/view/newPost';
import type {NextPageWithLayout} from 'pages/_app';
import type {ReactElement} from 'react';

const Novo: NextPageWithLayout = () => {
  const {status, session} = useRequireAuth();
  const props = useEditPost(session);
  if (status === 'authenticated') return <NewPost props={props} editing />;
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
