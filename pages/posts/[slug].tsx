import markdownToHtml from '@/lib/markdownToHtml';
import ErrorPage from 'next/error';
import Head from 'next/head';
import {useRouter} from 'next/router';
import Container from '../../components/container';
import Header from '../../components/header';
import Layout from '../../components/layout';
import PostBody from '../../components/post-body';
import PostHeader from '../../components/post-header';
import PostTitle from '../../components/post-title';
import type PostType from '../../interfaces/post';
import {getAllPosts, getPostBySlug} from '../../lib/api';
import {CMS_NAME} from '../../lib/constants';

type Props = {
  post: PostType;
  morePosts: PostType[];
  preview?: boolean;
};

export default function Post({post, morePosts, preview}: Props) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout preview={preview}>
      <Container>
        <Header />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article className="mb-32">
              <Head>
                <title>
                  {post.title} | Next.js Blog Example with {CMS_NAME}
                </title>
                {/* <meta property="og:image" content={post.ogImage.url} /> */}
              </Head>
              <PostHeader
                title={post.title}
                coverImage={post.coverImage}
                // date={post.date}
                // author={post.author}
              />
              <PostBody content={post.content} />
            </article>
          </>
        )}
      </Container>
    </Layout>
  );
}

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

export async function getStaticPaths() {
  const posts = await getAllPosts();

  return {
    paths: posts.map((post: any) => {
      return {
        params: {
          slug: post.slug
        }
      };
    }),
    fallback: false
  };
}
