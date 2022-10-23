import markdownToHtml from '@/lib/markdownToHtml';
import {FAB} from '@/shared/useCases/FAB';
import {GetStaticPaths} from 'next';
import ErrorPage from 'next/error';
import {useRouter} from 'next/router';
import Container from '../../../components/container';
import Header from '../../../components/header';
import Layout from '../../../components/layout';
import PostBody from '../../../components/post-body';
import PostHeader from '../../../components/post-header';
import PostTitle from '../../../components/post-title';
import type {PostType} from '../../../interfaces/post';
import {getAllPosts, getPostBySlug} from '../../../lib/api';

export default function Post({post}: {post: PostType}) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <>
      {router.isFallback ? (
        <PostTitle>Loading…</PostTitle>
      ) : (
        <>
          <article className="mb-32">
            <PostHeader title={post.title ?? ''} />
            <PostBody content={post.content ?? ''} />
          </article>
          {post?.User?.phone && (
            <FAB title={post.title} phone={post.User.phone} />
          )}
        </>
      )}
    </>
  );
}

Post.getLayout = function getLayout(page: any) {
  return (
    <Layout>
      <Container>
        <Header />
        {page}
      </Container>
    </Layout>
  );
};

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({params: {slug}}: Params) {
  const post = await getPostBySlug(slug);
  const content = await markdownToHtml(post?.content || '');
  return {
    props: {
      post: {
        ...post,
        createdAt: post?.createdAt.toISOString(),
        updatedAt: post?.updatedAt.toISOString(),
        User: {
          ...post?.User,
          createdAt: post?.User?.createdAt.toISOString(),
          updatedAt: post?.User?.updatedAt.toISOString(),
          emailVerified: post?.User?.emailVerified?.toISOString() ?? null
        },
        content
      }
    }
  };
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getAllPosts();
  return {
    paths: posts.map(post => {
      return {
        params: {
          slug: post.slug,
          User: post.User?.username ?? post.User?.gh_username ?? undefined
        }
      };
    }),
    fallback: false
  };
};
