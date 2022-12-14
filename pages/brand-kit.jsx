import Head from 'next/head';
import Hero from '../components/BrandKit/Hero';
import Kits from '../components/BrandKit/Kits';
import Layout from '../components/Layout';

export default function BrandKit() {
  return (
    <Layout>
      <Head>
        <title>Dojah web v3 - Brand Kit</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <Hero />
      <Kits />
    </Layout>
  );
}
