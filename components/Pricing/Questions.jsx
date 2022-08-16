import Image from 'next/image';
import {apiDocumentation, pricingModels} from '../../assets/images/images';
import Hyperlink from '../Hyperlink';

export default function Questions() {
  return (
    <section className="flex justify-between flex-wrap lg:flex-nowrap gap-6 sm:gap-8 max-w-[1195px] mx-auto px-4 basis-full py-16 md:py-30">
      <div className="flex flex-col items-start gap-6 sm:gap-4 px-6 py-8 rounded-2xl bg-white-700 md:py-20 md:px-18 basis-full lg:basis-1/2">
        <div className="sm-hidden h-[52px]">
          <Image src={pricingModels} alt="" width={52} height={52} />
        </div>
        <h4 className="font-bold leading-9 md:leading-normal md:text-lg text-3md text-secondary">
          Find answers to common questions
        </h4>
        <p className="text-base text-secondary-300">
          Great minds like yours asked questions and we provided answers
          already.
        </p>
        <Hyperlink text="Check FAQs" variant="primary" arrow />
      </div>

      <div className="flex flex-col items-start gap-6 sm:gap-4 px-6 py-8 rounded-2xl bg-secondary md:py-20 md:px-18 basis-full lg:basis-1/2">
        <div className="sm-hidden h-[52px]">
          <Image src={apiDocumentation} alt="" width={52} height={52} />
        </div>
        <h4 className="font-bold leading-9 text-white md:leading-normal md:text-lg text-3md">
          Join our developer community on Slack
        </h4>
        <p className="text-base text-white">
          Chat live with developers on the official Dojah Slack Channel
        </p>
        <Hyperlink text="Join our slack channel" variant="secondary" arrow />
      </div>
    </section>
  );
}
