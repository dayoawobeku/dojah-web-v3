import Head from 'next/head';
import Hero from '../../components/Hero';
import Layout from '../../components/Layout';
import AddressData from '../../components/AllProducts/AddressData';
import SmoothOnboarding from '../../components/AllProducts/EasyOnboard/SmoothOnboarding';
import Video from '../../components/Video';
import Hyperlink from '../../components/Hyperlink';
import Verification from '../../components/Verification';
import {
  idVerificationHero,
  idVerificationWidgetThumbnail,
} from '../../assets/images/images';

export default function IdVerificationWidget() {
  return (
    <Layout>
      <Head>
        <title>Dojah web v3 - ID Verification Widget</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <Hero
        heading="Verify and onboard users fast with less engineering work"
        paragraph="Our ID Verification Widget allows you to automatically analyse a wide range of identity documents, detect fraud and sign up real users fast."
        illustration={idVerificationHero}
      />
      <AddressData
        text1="Automate your onboarding and cut drop-off rates"
        text2="Build custom onboarding flows with low-code"
        text3="Access identity databases across multiple countries"
      />
      <SmoothOnboarding
        label
        heading="How Dojah helps you reduce drop-off rates and onboard trusted users in a minute"
        text1="Automatically lookup and extract all user data as soon as the applicant uploads a valid ID document."
        text2="Allow user to validate ownership of the provided ID document via biometrics, phone number or email."
        text3="Screen user biometric or contact information against the ID database across Africa’s major economies."
        text4="Displays a new entry on your Dojah dashboard to manually or automatically verify users."
      />
      <section className="relative flex flex-col items-center justify-center mx-auto bg-primary-100 py-30">
        <Video
          src="https://www.youtube.com/embed/n_jOCQH6iws"
          thumbnail={idVerificationWidgetThumbnail}
          title="Onboard and verify genuine users fast with Dojah"
        />
        <div>
          <h4 className="mt-12 text-lg font-bold text-secondary-300">
            See how it works in detail
          </h4>
          <div className="flex items-center justify-center gap-6 mt-6">
            <Hyperlink variant="primary" text="Get a free demo" arrow />
            <Hyperlink variant="secondary" text="Explore docs" arrow />
          </div>
        </div>
      </section>
      <section className="py-24 bg-white-800">
        <div className="max-w-[1051px] mx-auto mb-20">
          <h3 className="max-w-xl mx-auto font-bold text-center text-secondary text-2lg">
            A complete stack of identity verification tools
          </h3>
        </div>
        <Verification
          paragraph2="Automate KYC check and verification across multiple government database."
          heading3="Document Verification"
          paragraph3="Spot forgery, extract and verify accurate data from all document types."
          explore
        />
        <div className="mt-20" />
        <Verification
          heading1="Address Verification"
          paragraph1="Automatically capture and validate the physical location of your recipients in real-time."
          heading2="Authentication & Checks"
          paragraph2="Carry out AML, IP & Device, Phone Number, Email and Liveness checks for users."
        />
      </section>
    </Layout>
  );
}
