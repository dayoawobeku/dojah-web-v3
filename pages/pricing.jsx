import Head from 'next/head';
import Hero from '../components/Pricing/Hero';
import GetStarted from '../components/Pricing/GetStarted';
import RightPlan from '../components/Pricing/RightPlan';
import CustomerStories from '../components/CustomerStories';
import Questions from '../components/Pricing/Questions';

export default function Pricing() {
  return (
    <div>
      <Head>
        <title>Dojah web v3 - Pricing</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <Hero />
      <GetStarted />
      <RightPlan />
      <CustomerStories />
      <Questions />
    </div>
  );
}
