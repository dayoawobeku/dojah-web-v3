import Image from 'next/image';
import {
  kippaLogo,
  ourpassLogo,
  prospaLogo,
  troveLogo,
} from '../../assets/images/images';

export default function Hero() {
  return (
    <main
      className="bg-[url('../assets/images/pages-hero-art-mobile.svg')] sm:bg-[url('../assets/images/pricing-art.svg')] bg-no-repeat sm:bg-cover"
      id="maincontent"
      tabIndex={-1}
    >
      <div className="flex flex-col items-start sm:items-center max-w-[751px] text-center mx-auto px-4 pt-17 sm:pt-[106px] pb-18 sm:pb-48">
        <h2 className="text-xl font-bold text-start sm:text-center text-secondary">
          Our pricing works for whatever you’re building
        </h2>
        <p className="mt-6 text-secondary-300">Trusted by teams at:</p>
        <div className="flex flex-wrap items-center gap-10 mt-6 sm:flex-nowrap md:gap-30">
          <div className="flex justify-between w-[90%] items-center gap-10 md:gap-30">
            <Image src={prospaLogo} alt="prospa logo" width={107} height={26} />
            <Image src={kippaLogo} alt="kippa logo" width={91} height={30} />
          </div>
          <div className="flex justify-between w-[90%] items-center gap-10 md:gap-30">
            <Image src={troveLogo} alt="trove logo" width={78} height={28} />
            <Image
              src={ourpassLogo}
              alt="ourpass logo"
              width={115}
              height={22}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
