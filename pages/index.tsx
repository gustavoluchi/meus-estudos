import {DateRangePicker} from '@/components/DatePicker/DateRangePicker';
import {getLocalTimeZone, parseDate} from '@internationalized/date';
import Head from 'next/head';
import {useState} from 'react';
import {useDateFormatter} from 'react-aria';
import Container from '../components/container';
import HeroPost from '../components/hero-post';
import Intro from '../components/intro';
import Layout from '../components/layout';
import MoreStories from '../components/more-stories';
import Post from '../interfaces/post';
import {getAllPosts} from '../lib/api';
import {CMS_NAME} from '../lib/constants';
type Props = {
  allPosts: Post[];
};

export default function Index({allPosts}: Props) {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);
  let [range, setRange] = useState({
    start: parseDate('2020-07-03'),
    end: parseDate('2020-07-10')
  });
  let formatter = useDateFormatter({dateStyle: 'long'});

  return (
    <>
      <Layout>
        <Head>
          <title>{`Next.js Blog Example with ${CMS_NAME}`}</title>
        </Head>
        <Container>
          <Intro />
          <>
            <DateRangePicker
              label="Date range"
              value={range}
              onChange={setRange}
            />
            <p>
              Selected date:{' '}
              {formatter.formatRange(
                range.start.toDate(getLocalTimeZone()),
                range.end.toDate(getLocalTimeZone())
              )}
            </p>
          </>
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
  );
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt'
  ]);

  return {
    props: {allPosts}
  };
};
