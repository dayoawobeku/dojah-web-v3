import Head from 'next/head';
import Hero from '../../components/Hero';
import Layout from '../../components/Layout';
import AddressData from '../../components/AllProducts/AddressData';
import SmoothOnboarding from '../../components/AllProducts/EasyOnboard/SmoothOnboarding';
import Video from '../../components/Video';
import Hyperlink from '../../components/Hyperlink';
import Verification from '../../components/Verification';
import WhiteCards from '../../components/WhiteCards';

export default function IdVerificationWidget() {
  return (
    <Layout>
      <Head>
        <title>Dojah web v3 - Document Verification</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <Hero
        heading="Simplified access to full-stack financial data with one integration"
        paragraph="Explore a one-stop shop for your financial data needs with tailored experiences and tools for your business."
      />
      <AddressData
        text1="Reduce drop-off during checkout and other processes"
        text2="Get detailed financial analysis to help you build better products"
        text3="Speed up your approval process by accessing data in seconds"
      />
      <SmoothOnboarding
        label
        heading="Access users’ financial data with a few lines of code"
        text1="Embed our widget into your mobile app, website, or add it to your payment interface via the Dojah dashboard."
        text2="Users connect their financial accounts to your platform via the widget interface in seconds"
        text3="Connect instantly to major banks and retrieve permissioned data from a broad set of financial institutions."
        text4="Start authenticating financial data, optimise your payments and product experiences through our pre-built flow"
      />
      <section className="bg-[#ECF3FF] py-20">
        <h4 className="max-w-xl mx-auto mb-16 text-lg font-bold text-center text-secondary">
          Birds-eye view of your performance on the Dojah dashboard
        </h4>
        <div className="max-w-[1137px] mx-auto grid grid-cols-3 gap-6 px-4 item-center">
          <WhiteCards
            heading="Comprehensive Analytics"
            paragraph="View actionable insights and performance results for informed decisions. With this, it is possible to automate decision making"
          />
          <WhiteCards
            heading="Look and Feel"
            paragraph="Allows your users be at ease by adjusting the widget to match your brand’s look and feel"
          />
          <WhiteCards
            heading="Optimal support"
            paragraph="Hands on deck to assist you when there is a need via our dedicated support channels.
"
          />
        </div>
      </section>
      <section className="relative flex flex-col items-center justify-center mx-auto bg-primary-100 py-30">
        <Video />
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
          <h3 className="max-w-3xl mx-auto font-bold text-center text-secondary text-2lg">
            A blend of identity and financial data tools
          </h3>
        </div>
        <Verification
          heading1="Link Bank Accounts"
          paragraph1="Allow your users securely connect their financial accounts in seconds"
          heading2="Access Bank Transactions"
          paragraph2="Retrieve financial data to reduce fraud and assess risk"
          heading3="Analyse Transactions"
          paragraph3="Understand your users’ spending and income patterns"
          explore
        />
      </section>
    </Layout>
  );
}
