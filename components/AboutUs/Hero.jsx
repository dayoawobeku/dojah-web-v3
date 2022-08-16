import Image from 'next/image';
import {
  aboutUs1,
  aboutUs2,
  aboutUs3,
  aboutUs4,
  aboutUs5,
  aboutUs6,
  aboutUs7,
  yCombinatorLogo,
} from '../../assets/images/images';

export default function Hero() {
  return (
    <main
      className="bg-[url('../assets/images/pages-hero-art-mobile.svg')] sm:bg-[url('../assets/images/contact-sales-art.svg')] bg-no-repeat sm:bg-contain"
      id="maincontent"
      tabIndex={-1}
    >
      <div className="flex flex-col items-start sm:items-center text-center mx-auto pt-17 sm:pt-[106px] overflow-x-hidden">
        <h2 className="text-2xl font-bold text-secondary max-w-[595px]">
          Powering trust for the digital economy.
        </h2>
        <p className="mt-6 text-base text-secondary-200 max-w-[1154px]">
          Dojah is focused on enabling confidence and credibility across digital
          businesses. Our suite of API and no-code tools make it easy to
          securely access the identities of customers, citizens, partners and
          employees for compliance practices, identity verification, and fraud
          analysis.
        </p>

        <div className="mt-10 flex items-center gap-1">
          <span className="text-sm text-secondary-200 font-bold -mb-1">
            Backed by
          </span>
          <Image alt="" src={yCombinatorLogo} width={135} height={38.5} />
        </div>

        <div className="translate-y-1/2 bg-white h-[136px] w-[102%] translate-x-0 rounded-[100%] z-50 -mt-[68px]" />
        <div
          className="inline-flex w-full items-center gap-10 overflow-x-auto relative"
          style={{display: '-webkit-box'}}
        >
          <div className="relative w-[350px] h-[408.61px]">
            <Image alt="" src={aboutUs1} layout="fill" />
          </div>
          <div className="relative w-[350px] h-[408.61px]">
            <Image alt="" src={aboutUs2} layout="fill" />
          </div>
          <div className="relative w-[350px] h-[408.61px]">
            <Image alt="" src={aboutUs3} layout="fill" />
          </div>
          <div className="relative w-[350px] h-[408.61px]">
            <Image alt="" src={aboutUs4} layout="fill" />
          </div>
          <div className="relative w-[350px] h-[408.61px]">
            <Image alt="" src={aboutUs5} layout="fill" />
          </div>
          <div className="relative w-[350px] h-[408.61px]">
            <Image alt="" src={aboutUs6} layout="fill" />
          </div>
          <div className="relative w-[350px] h-[408.61px]">
            <Image alt="" src={aboutUs7} layout="fill" />
          </div>
        </div>
        <div className="-translate-y-1/2 bg-white h-[136px] w-[102%] translate-x-0 rounded-[100%] -mb-[68px]" />
      </div>
    </main>
  );
}
