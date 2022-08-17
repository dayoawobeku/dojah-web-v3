import Image from 'next/image';
import {moneymieLogo} from '../assets/images/images';

export default function CustomerStories() {
  return (
    <section className="px-4 pb-16 sm:pb-0 mx-auto max-w-[1195px]">
      <div className="bg-secondary rounded-2xl bg-none sm:bg-[url('../assets/images/pricing-customer-stories-art.svg')] bg-no-repeat bg-cover">
        <div className="flex py-10 md:py-18 px-5 sm:px-4 flex-col items-center justify-center max-w-[651px] mx-auto">
          <Image
            alt="moneymie logo"
            src={moneymieLogo}
            width={130}
            height={26}
          />
          <p className="leading-[26px] sm:leading-[38px] text-center text-primary-100 text-sm sm:text-3md mt-8 sm:mt-7 mb-8 sm:mb-14">
            With Dojah, we don’t have to worry about the hassle of onboarding
            our customers as we have it easy with the selfie and ID verification
            API. The APIs are fast, reliable and integration is straightforward.
            Dojah gives us almost nothing to worry about so we strongly
            recommend
          </p>
          <p className="font-bold text-primary-100 text-tiny sm:text-2md sm:mt-7">
            Opeyemi Awoyemi, Co-Founder, Moneymie
          </p>
        </div>
      </div>
    </section>
  );
}
