import Head from 'next/head';
import Layout from '../components/Layout';
import '../styles/text-animation.css';
import '../styles/globals.css';

function MyApp({Component, pageProps}) {
  return (
    <Layout>
      <Head>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
