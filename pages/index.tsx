import NavBar from '@/components/NavBar';
import {ReactElement} from 'react';
import Container from '../components/container';
import Layout from '../components/layout';
import PostList from '../components/PostList';
import {PostType} from '../interfaces/post';
import {getManyPosts} from '../lib/api';
import {NextPageWithLayout} from './_app';

type Props = {
  allPosts: PostType[];
};

const Index: NextPageWithLayout<Props> = ({allPosts}) => {
  return (
    <>
      <PostList posts={allPosts} />
    </>
  );
};

export default Index;

Index.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout pageTitle="Página inicial">
      <Container>
        <NavBar />
        {page}
      </Container>
    </Layout>
  );
};

export const getStaticProps = async () => {
  const allPosts = await getManyPosts();
  return {
    props: {
      allPosts: allPosts.map(post => ({
        ...post,
        createdAt: post.createdAt.toISOString(),
        updatedAt: post.updatedAt.toISOString(),
        User: {
          ...post?.User,
          createdAt: post?.User?.createdAt.toISOString(),
          updatedAt: post?.User?.updatedAt.toISOString(),
          emailVerified: post?.User?.emailVerified?.toISOString() ?? null
        }
      }))
    },
    revalidate: 60 // seconds
  };
};
