import { Fragment } from 'react';
import Head from 'next/head';

import FeaturedPosts from '../components/home-page/featured-posts';
import Hero from '../components/home-page/hero';
// import { getFeaturedPosts } from '../lib/posts-util';

const HomePage = () => {
  return (
    <Fragment>
      <Head>
        <title>Amabelle's Blog</title>
        <meta
          name="description"
          content="I post about programming and web development."
        />
      </Head>
      <Hero />
      {/* <FeaturedPosts posts={props.posts} /> */}
    </Fragment>
  );
};

export default HomePage;
