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
        heading="Seamlessly validate government data for"
        animatedText={
          <div className="flex gap-3">
            <p>users in</p>
            <div className="relative inline-block overflow-hidden text down h-14 md:h-18 w-72">
              <p className="text-white">Nigeria</p>
              <p className="text-white">Ghana</p>
              <p className="text-white">Kenya</p>
            </div>
          </div>
        }
        paragraph="Ensure compliance in any African country by verifying that the data provided by users match government-issued IDs."
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
