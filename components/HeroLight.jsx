import Image from 'next/image';
import {heroIllustration} from '../assets/images/images';
import Hyperlink from './Hyperlink';

export default function HeroLight({heading, paragraph, illustration}) {
  const signupUrl = process.env.NEXT_PUBLIC_APP_SIGNUP;

  return (
    <main
      className={`bg-[url('../assets/images/hero-light-art.svg')] bg-no-repeat bg-primary-100 bg-contain`}
      id="maincontent"
      tabIndex={-1}
    >
      <div className="flex items-center lg:justify-between justify-center flex-wrap lg:flex-nowrap gap-18 lg:gap-6 max-w-[1195px] mx-auto px-4 py-28">
        <div className="lg:max-w-[557px] lg:w-3/5">
          <h1 className="lg:max-w-[698px] xl:w-[601px] text-xl font-bold md:text-2xl text-secondary">
            {heading}
          </h1>
          <p className="lg:max-w-[601px] mt-6 text-base text-secondary-300">
            {paragraph}
          </p>
          <div className="flex items-center gap-4 mt-6 sm:gap-6 whitespace-nowrap">
            <Hyperlink
              text="Get started now"
              variant="primary"
              arrow
              externalUrl={signupUrl}
            />
            <Hyperlink
              text="Contact sales"
              variant="secondary"
              arrow
              externalUrl="https://calendly.com/dojah/dojah-sales"
            />
          </div>
        </div>
        <Image
          src={illustration ?? heroIllustration}
          alt="art illustration of man taking selfie on mobile phone"
          width={585}
          height={583}
          priority
        />
      </div>
    </main>
  );
}
