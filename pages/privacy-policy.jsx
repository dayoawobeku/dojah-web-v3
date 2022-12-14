import Head from 'next/head';
import Layout from '../components/Layout';
import Hero from '../components/PrivacyPolicy/Hero';
import Policy from '../components/PrivacyPolicy/Policy';

export default function PrivacyPolicy() {
  return (
    <Layout>
      <Head>
        <title>Dojah web v3 - Privacy Policy</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <Hero />
      <Policy />
    </Layout>
  );
}
