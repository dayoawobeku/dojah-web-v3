import Image from 'next/image';
import {greenHouseLogo, yCombinatorLogo} from '../../assets/images/images';
import Hyperlink from '../Hyperlink';

export default function Hero() {
  const signupUrl = process.env.NEXT_PUBLIC_APP_SIGNUP;
  return (
    <main
      className="bg-[url('../assets/images/hero-art-mobile.svg')] sm:bg-[url('../assets/images/hero-art.svg')] bg-no-repeat bg-secondary"
      id="maincontent"
      tabIndex={-1}
    >
      <div className="flex items-center md:justify-between justify-center flex-wrap md:flex-nowrap gap-18 md:gap-6 max-w-[1195px] mx-auto px-4 py-28">
        <div className="lg:max-w-[557px] md:w-3/5">
          <h1 className="text-xl font-bold md:text-2xl text-primary-200 transition-all">
            End-to-end identity verification for {''}
            <span className="text-white">onboarding</span>
          </h1>
          <p className="text-base text-secondary-100">
            Startups, scale-ups and all types of digital businesses use Dojah’s
            APIs to verify, onboard and manage user identity across Africa.
          </p>
          <div className="flex items-center gap-4 mt-6 sm:gap-6 whitespace-nowrap">
            <Hyperlink
              text="Start using Dojah"
              variant="primary"
              externalUrl={signupUrl}
              arrow
            />
            <Hyperlink
              text="Talk to sales"
              variant="secondary"
              arrow
              externalUrl="https://calendly.com/dojah/dojah-sales"
            />
          </div>
          <div className="flex flex-col mt-20 md:mt-14">
            <p className="text-secondary-100">Backed by</p>
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
        <video
          width={500}
          loop
          playsInline
          muted
          autoPlay
          src="/homepage-hero-1.mp4"
        >
          Your browser does not support the HTML5 Video element.
        </video>
        <video
          width={500}
          loop
          playsInline
          muted
          autoPlay
          src="/homepage-hero-2.mp4"
          className="hidden"
        >
          Your browser does not support the HTML5 Video element.
        </video>
        <video
          width={500}
          loop
          playsInline
          muted
          autoPlay
          src="/homepage-hero-3.mp4"
          className="hidden"
        >
          Your browser does not support the HTML5 Video element.
        </video>
      </div>
    </main>
  );
}
