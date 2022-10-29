import DateFormatter from '@/components/date-formatter';
import markdownToHtml from '@/lib/markdownToHtml';
import {FAB} from '@/shared/useCases/FAB';
import {GetStaticPaths} from 'next';
import ErrorPage from 'next/error';
import {useRouter} from 'next/router';
import Container from '../../../components/container';
import Header from '../../../components/header';
import Layout from '../../../components/layout';
import PostBody from '../../../components/post-body';
import PostTitle from '../../../components/post-title';
import type {PostType} from '../../../interfaces/post';
import {getPostBySlug, getPostSlugs} from '../../../lib/api';

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
            {post.title && <PostTitle>{post.title}</PostTitle>}
            <PostBody content={post.content ?? ''} />
            <br />
            <div className="flex justify-end">
              <div className="mr-4">
                <p className="text-right">
                  Escrito por{' '}
                  {post.User?.name ??
                    post.User?.username ??
                    post.User?.gh_username}
                  .
                </p>
                <p className="text-right">
                  publicado em <DateFormatter dateString={post.createdAt} />.
                </p>
              </div>
              {post.User?.image && (
                <picture>
                  <img
                    src={post.User?.image}
                    className="w-12 h-12 mr-4 rounded-full"
                    alt={
                      post.User?.name ??
                      post.User?.username ??
                      post.User?.gh_username ??
                      ''
                    }
                  />
                </picture>
              )}
            </div>
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
  const posts = await getPostSlugs();
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
