import Image from 'next/image';
import {apiDocumentation, pricingModels} from '../../assets/images/images';
import Hyperlink from '../Hyperlink';

export default function GeneralEnquiries() {
  return (
    <section className="flex items-center justify-between flex-wrap md:flex-nowrap gap-6 lg:gap-16 max-w-[1195px] mx-auto px-4 pb-16 md:pb-30">
      <div className="flex flex-col grow md:grow-0 items-start gap-6 rounded-2xl bg-secondary py-8 md:py-18 px-6 md:pr-24 md:pl-18">
        <div className="md:hidden h-[52px]">
          <Image src={apiDocumentation} alt="" width={52} height={52} />
        </div>
        <h4 className="font-bold leading-9 text-white md:leading-normal md:text-lg text-3md">
          Join our developer community on Slack
        </h4>
        <p className="max-w-md text-base text-white">
          Chat live with developers on the official Dojah Slack Channel
        </p>
        <Hyperlink text="Join our slack channel" variant="secondary" arrow />
      </div>
      <div className="px-6 pt-8 md:p-0">
        <div className="md:hidden h-[52px]">
          <Image src={pricingModels} alt="" width={52} height={52} />
        </div>
        <h4 className="mt-6 md:mt-0 font-bold leading-9 md:leading-normal md:text-lg text-3md text-secondary">
          Make general enquiries
        </h4>
        <p className="mt-6 md:mt-4 text-base text-secondary-300">
          For general queries, including partnership opportunities, please email{' '}
          <a href="mailto:info@dojah.io" className="font-bold text-secondary">
            info@dojah.io
          </a>
        </p>
      </div>
    </section>
  );
}
