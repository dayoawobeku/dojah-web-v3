import Head from 'next/head';
import {onboardingConfirmationHero} from '../assets/images/images';
import CustomerStories from '../components/CustomerStories';
import CustomFlows from '../components/FraudDetection/CustomFlows';
import SuspiciousSignups from '../components/FraudDetection/SuspiciousSignups';
import HeroLight from '../components/HeroLight';
import Layout from '../components/Layout';
import ProtectBrand from '../components/ProtectBrand';

export default function OnboardingVerification() {
  return (
    <Layout>
      <Head>
        <title>Dojah web v3 - Onboarding and verification</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <HeroLight
        heading="Onboard verified users across Africa on the first try"
        paragraph="Seamless onboarding from sign-up to retention without compromising on fraud prevention, compliance and customer experience."
        illustration={onboardingConfirmationHero}
      />
      <ProtectBrand
        text1="Enable top-notch security of users on your platform"
        text2="Automate identity and access management"
        text3="Enhance your decision-making process"
      />
      <SuspiciousSignups
        heading1="Onboard and Verify Users with No-Code"
        paragraph1="Build and deploy custom flows to onboard and verify users while adopting compliance checks across several countries — no developer experience is needed."
        linkText1="Start using Easy Onboard"
        href1="/all-products/easy-onboard"
        heading2="Onboarding and Identity Verification Widget"
        paragraph2="Deploy a full stack of identity verification tools with a single integration. Integrate fast, onboard verified users, reduce drop-off rates and provide instant feedback at sign-up."
        linkText2="Start using Identity Verification"
        href2="/all-products/id-verification-widget"
        heading3="Protect Against Suspicious Sign-ups and Impersonation"
        paragraph3="Biometric verification with selfies, short videos and fingerprints helps you automatically confirm that the user is live and the presented biometrics matches a valid ID."
        linkText3="Start using Biometric Verification"
        href3="/all-products/biometric-verification"
        heading4="Catch up to 98% of Document and Identity Fraud Attempts"
        paragraph4="Dojah document verification covers 3,000+ document types from 150+ countries. Our APIs, widgets and no-code tools help you automatically spot forgeries and counterfeits on physical or digital documents."
        linkText4="Start using Document Verification"
        href4="/all-products/document-verification"
      />
      <CustomFlows />
      <div className="bg-[#ECF3FF] py-28">
        <CustomerStories />
      </div>
    </Layout>
  );
}
