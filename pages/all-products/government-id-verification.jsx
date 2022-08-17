import Head from 'next/head';
import AccurateResults from '../../components/AllProducts/GovernmentIdVerification/AccurateResults';
import CredibleCustomers from '../../components/AllProducts/GovernmentIdVerification/CredibleCustomers';
import Demography from '../../components/AllProducts/GovernmentIdVerification/Demography';
import Hero from '../../components/Hero';
import LookupIds from '../../components/AllProducts/GovernmentIdVerification/LookupIds';
import SoftJob from '../../components/AllProducts/SoftJob';
import Pricing from '../../components/Pricing';
import {governmentIdIllustration} from '../../assets/images/images';
import Layout from '../../components/Layout';

export default function GovernmentIdVerification() {
  return (
    <Layout>
      <Head>
        <title>Dojah web v3 - Government Id Verification</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <Hero
        heading="Validate Individuals & Businesses across Nigeria in seconds"
        paragraph="Dojah lets you secure your business by verifying your users’ submitted data match government-issued IDs across Africa."
        illustration={governmentIdIllustration}
      />
      <AccurateResults />
      <CredibleCustomers />
      <LookupIds />
      <Demography />
      <SoftJob />
      <Pricing />
    </Layout>
  );
}
