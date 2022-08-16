import Image from 'next/image';
import {
  onboardingRate,
  scaleBusiness,
  simpleTools,
  singleIntegration,
} from '../../assets/images/images';

function Tool({src, heading, body}) {
  return (
    <div className="flex items-start gap-4 px-2 md:px-0 md:flex-wrap lg:flex-nowrap lg:gap-8">
      <div className="w-17 h-17">
        <Image src={src} width={70} height={70} alt="" layout="fixed" />
      </div>
      <div className="md:max-w-[352px]">
        <h5 className="font-bold text-secondary text-3md leading-[35px]">
          {heading}
        </h5>
        <p className="mt-4 text-base text-secondary-200">{body}</p>
      </div>
    </div>
  );
}

export default function Tools() {
  return (
    <section className="bg-white-800">
      <div className="flex flex-col gap-14 md:gap-11 max-w-[1195px] mx-auto px-4 lg:pr-40 py-16 md:py-30">
        <div className="flex flex-wrap justify-between gap-14 md:flex-nowrap md:gap-0">
          <Tool
            src={simpleTools}
            heading="Simple tools to access identity data"
            body="Innovate, deploy and scale your business with our no-code and
                low-code widgets (SDKs and Librariees). Flexible workflows and
                an easy-to-manage dashboard put you in control."
          />
          <Tool
            src={singleIntegration}
            heading="Single integration—a complete API pack"
            body="Access a complete suite of identity verification products with one integration. Save the time and cost it’ll take to integrate multiple APIs."
          />
        </div>
        <div className="flex flex-wrap justify-between gap-14 md:flex-nowrap md:gap-0">
          <Tool
            src={scaleBusiness}
            heading="Scale your business across borders"
            body="With access to multiple government-issued ID databases across Africa’s largest economies, you can reach every market demography including underserved communities."
          />
          <Tool
            src={onboardingRate}
            heading="Optimize your onboarding rate"
            body="Never have to choose between conversion rates or compliance. Onboard verified users fast while eliminating friction in your sign up flow."
          />
        </div>
      </div>
    </section>
  );
}
