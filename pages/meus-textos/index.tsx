import Container from '@/components/container';
import Header from '@/components/header';
import Layout from '@/components/layout';
import PostCard from '@/components/PostCard';
import {getManyPosts} from '@/lib/api';
import {PostType} from 'interfaces/post';
import {GetServerSideProps} from 'next';
import {NextPageWithLayout} from 'pages/_app';
import type {ReactElement} from 'react';

type Props = {
  myPosts: PostType[];
};

const MyTexts: NextPageWithLayout<Props> = ({myPosts}) => {
  console.log(myPosts);
  return (
    <div className="mb-4 prose max-w-none">
      meus Textos
      <section>
        <h2 className="mb-8 text-2xl font-bold leading-tight tracking-tighter">
          Textos publicados
        </h2>
        <div className="grid grid-cols-1 mb-32 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32">
          {myPosts?.map(post => (
            <PostCard
              key={post.slug}
              title={post.title ?? ''}
              coverImage={post.image ?? ''}
              date={post.createdAt}
              author={post?.User}
              slug={post.slug}
              excerpt={post.description ?? ''}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async context => {
  // const session = await unstable_getServerSession(context.req, context.res, authOptions)
  // const userId = data?.user?.id;
  const myPosts = await getManyPosts(4); //TODO: quando houver paginação, utilizar getManyPosts
  // console.log(myPosts);
  return {
    props: {
      myPosts: myPosts.map(post => ({
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
    }
  };
};

MyTexts.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout pageTitle="Meus textos">
      <Container>
        <Header />
        {page}
      </Container>
    </Layout>
  );
};

export {MyTexts as default};
