import Image from 'next/image';
import {apiDocumentation, pricingModels} from '../assets/images/images';
import Hyperlink from './Hyperlink';

export default function Pricing() {
  return (
    <section className="flex justify-between flex-wrap lg:flex-nowrap gap-8 max-w-[1195px] mx-auto px-4 basis-full py-16 md:py-30">
      <div className="flex flex-col items-start gap-6 px-6 py-8 rounded-2xl bg-white-700 md:py-14 md:px-18 lg:basis-1/2">
        <Image src={pricingModels} alt="" width={52} height={52} />
        <h4 className="font-bold leading-9 md:leading-normal md:text-lg text-3md text-secondary">
          Build with a pricing plan that fits your product stage and business
          model.
        </h4>
        <Hyperlink text="See pricing models" variant="primary" arrow />
      </div>
      <div className="flex flex-col items-start gap-6 px-6 py-8 rounded-2xl bg-secondary md:py-14 md:px-18 lg:basis-1/2">
        <Image src={apiDocumentation} alt="" width={52} height={52} />
        <h4 className="font-bold leading-9 text-white md:leading-normal md:text-lg text-3md">
          References and guides to get your developer running with our APIs.
        </h4>
        <Hyperlink
          text="View API documentation"
          variant="secondary"
          arrow
          externalUrl="https://docs.dojah.io/"
        />
      </div>
    </section>
  );
}
