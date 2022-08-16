import Head from 'next/head';
import Hero from '../../components/Hero';
import SoftJob from '../../components/AllProducts/SoftJob';
import FinancialService from '../../components/AllProducts/FinancialService';
import CardsPartners from '../../components/AllProducts/CardsPartners';
import {
  phoneNumberCheckIllustration,
  stopwatch,
} from '../../assets/images/images';
import InformalDemography from '../../components/AllProducts/PhoneNumberCheck/InformalDemography';
import Pricing from '../../components/Pricing';

export default function PhoneNumberCheck() {
  return (
    <div>
      <Head>
        <title>Dojah web v3 - Phone Number Check</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <Hero
        illustration={phoneNumberCheckIllustration}
        heading="Onboard and verify user identity with phone number"
        paragraph="Dojah lets your customers use their Phone Numbers as Identity. Access basic and advanced customer data and verify instantly with OTP."
      />
      <CardsPartners
        image1={stopwatch}
        image2={stopwatch}
        image3={stopwatch}
        text1="Increase customer acquisition reach by penetrating  untapped markets."
        text2="Faster onboarding with a conversion-optimised verification flow."
        text3="Real-time fraud prevention with instant data look-up and verification."
      />
      <FinancialService
        heading1="Make it easy for users to sign up and get verified on your platform"
        heading2="Access basic or advanced level information"
        paragraph="With our Advanced and Basic lookup, you can customise the data points you need access to."
      />
      <InformalDemography />
      <SoftJob />
      <Pricing />
    </div>
  );
}