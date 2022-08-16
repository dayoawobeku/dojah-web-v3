import Image from 'next/image';
import {
  cdcareLogo,
  kippaLogo,
  ourpassLogo,
  prospaLogo,
  troveLogo,
} from '../assets/images/images';

export default function Partners() {
  return (
    <section className="flex flex-col gap-8 max-w-[960px] mx-auto px-4 py-16 md:pt-12 md:pb-16">
      <p className="text-center text-secondary-200">
        Powering digital trust for companies across Africa
      </p>
      <div className="flex-wrap items-center justify-between hidden gap-6 sm:flex md:flex-nowrap">
        <Image src={prospaLogo} alt="prospa logo" width={107} height={26} />
        <Image src={kippaLogo} alt="prospa logo" width={91} height={30} />
        <Image src={troveLogo} alt="trove logo" width={78} height={28} />
        <Image src={ourpassLogo} alt="ourpass logo" width={115} height={22} />
        <Image src={cdcareLogo} alt="prospa logo" width={90} height={28} />
      </div>
      <div className="flex flex-wrap items-center justify-center gap-12 sm:gap-6 sm:hidden">
        <div className="flex items-center justify-between w-full">
          <Image src={prospaLogo} alt="prospa logo" width={107} height={26} />
          <Image src={kippaLogo} alt="prospa logo" width={91} height={30} />
        </div>
        <div className="flex items-center justify-between w-full">
          <Image src={troveLogo} alt="trove logo" width={78} height={28} />
          <Image src={ourpassLogo} alt="ourpass logo" width={115} height={22} />
        </div>
        <div className="flex items-center justify-between">
          <Image src={cdcareLogo} alt="prospa logo" width={90} height={28} />
        </div>
      </div>
    </section>
  );
}
