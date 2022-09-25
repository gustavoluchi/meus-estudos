import NavBar from '@/components/NavBar';
import Head from 'next/head';
import {useEffect} from 'react';
import {themeChange} from 'theme-change';
import Container from '../components/container';
import HeroPost from '../components/hero-post';
import Layout from '../components/layout';
import MoreStories from '../components/more-stories';
import {PostType} from '../interfaces/post';
import {getManyPosts} from '../lib/api';
import {CMS_NAME} from '../lib/constants';

type Props = {
  allPosts: PostType[];
};

export default function Index({allPosts}: Props) {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);
  useEffect(() => {
    themeChange(false);
  }, []);

  return (
    <>
      <Layout>
        <Head>
          <title>{`Next.js Blog Example with ${CMS_NAME}`}</title>
        </Head>
        <Container>
          <NavBar />
          {/* <Intro /> */}
          <div className="tooltip tooltip-bottom" data-tip="login com Github">
            <p>teste</p>
          </div>

          {heroPost && <HeroPost infos={heroPost} />}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
  );
}

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
    }
  };
};
