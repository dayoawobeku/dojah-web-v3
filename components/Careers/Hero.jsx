import Image from 'next/image';
import {
  careersHero,
  greenHouseLogo,
  yCombinatorLogo,
} from '../../assets/images/images';
import Hyperlink from '../Hyperlink';

export default function Hero() {
  return (
    <main
      className="bg-white bg-[url('../assets/images/pages-hero-art-mobile.svg')] sm:bg-[url('../assets/images/careers-art.svg')] bg-no-repeat sm:bg-cover"
      id="maincontent"
      tabIndex={-1}
    >
      <div className="flex items-center md:justify-between justify-center flex-wrap md:flex-nowrap gap-24 sm:gap-18 md:gap-6 max-w-[1195px] mx-auto px-4 py-17 sm:py-21">
        <div className="lg:max-w-[557px] md:w-3/5">
          <h1 className="text-xl font-bold md:text-2xl text-secondary">
            Welcome to the Dojah-land
          </h1>
          <p className="my-6 text-base text-secondary-200">
            We are looking for enthusiastic collaborators who want to do their
            best work and be a part of our journey to enable confidence and
            credibility in the digital economy.
          </p>
          <Hyperlink
            text="Read more about us"
            variant="primary"
            arrow
            href="/about-us"
          />
          <div className="flex flex-col mt-20 md:mt-14">
            <p className="text-secondary-150 sm:text-secondary-300 font-bold sm:font-normal">
              Backed by
            </p>
            <div className="flex items-center gap-4 mt-1">
              <Image
                src={yCombinatorLogo}
                alt="y combinator logo"
                width={152}
                height={47}
              />
              <Image
                src={greenHouseLogo}
                alt="greenhouse capital logo"
                width={162}
                height={38}
              />
            </div>
          </div>
        </div>
        <div className="pr-0 md:pr-14">
          <Image src={careersHero} alt="" width={438} height={515} priority />
        </div>
      </div>
    </main>
  );
}
