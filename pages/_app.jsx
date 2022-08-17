import Head from 'next/head';
import '../styles/text-animation.css';
import '../styles/globals.css';

function MyApp({Component, pageProps}) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
