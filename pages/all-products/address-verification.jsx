import Head from 'next/head';
import Hero from '../../components/Hero';
import SoftJob from '../../components/AllProducts/SoftJob';
import AddressData from '../../components/AllProducts/AddressData';
import BusinessSafe from '../../components/AllProducts/AddressVerification/BusinessSafe';
import EfficientOperations from '../../components/AllProducts/AddressVerification/EfficientOperations';
import ComprehensiveData from '../../components/AllProducts/AddressVerification/ComprehensiveData';
import Pricing from '../../components/Pricing';
import {addressIllustration} from '../../assets/images/images';
import Layout from '../../components/Layout';

export default function AddressVerification() {
  return (
    <Layout>
      <Head>
        <title>Dojah web v3 - Address Verification</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <Hero
        heading="Automatically capture and verify physical addresses in real-time"
        paragraph="Know your customers and where they live in real-time. Digitally capture and verify customer’s address within seconds in xyz+ countries and locations."
        illustration={addressIllustration}
      />
      <AddressData
        text1="Capture only standardized and well-formatted address data."
        text2="Eliminate the risk and cost of manual address verification."
        text3="Help your users complete the address capture form with speed"
      />
      <BusinessSafe
        heading="Keep your business safe and operational costs down"
        largeText1="Predictive text and auto-complete technology"
        paragraph1="Removes friction from the form-filling experience by automatically suggesting possible address matches as your customer types—increasing the likelihood of completion."
        largeText2="A smart address validation system"
        paragraph2="Our smart verification technology automatically checks that the customer is within range of the captured address and triggers a percentage score indicating the accuracy of the address match per time."
      />
      <EfficientOperations />
      <ComprehensiveData />
      <SoftJob />
      <Pricing />
    </Layout>
  );
}
