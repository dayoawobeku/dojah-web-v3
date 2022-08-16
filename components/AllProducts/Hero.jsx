import Image from 'next/image';
import {searchIc} from '../../assets/images/images';

export default function Hero({input}) {
  return (
    <main
      className="bg-secondary bg-[url('../assets/images/pages-hero-art-mobile.svg')] sm:bg-[url('../assets/images/hero-art.svg')] bg-no-repeat"
      id="maincontent"
      tabIndex={-1}
    >
      <div className="flex flex-col items-center justify-center flex-wrap md:flex-nowrap gap-6 max-w-[1195px] mx-auto px-4 py-17 sm:py-[88px]">
        <h1 className="text-2xl font-bold text-primary-200">Our products</h1>
        <p className="text-center text-base text-secondary-100 max-w-[601px]">
          Dojah is focused on enabling confidence and credibility across digital
          businessses.
        </p>
        <div className="relative w-full md:w-fit">
          {input}
          <div className="absolute w-6 h-6 top-3 left-4">
            <Image alt="" src={searchIc} width={24} height={24} />
          </div>
        </div>
      </div>
    </main>
  );
}
