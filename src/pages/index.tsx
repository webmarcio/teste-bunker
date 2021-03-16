import React from 'react';
import Head from 'next/head';

import HomePage from '../components/pages/Home';

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Homepage</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <HomePage />
      </main>
    </div>
  );
};

export default Home;
