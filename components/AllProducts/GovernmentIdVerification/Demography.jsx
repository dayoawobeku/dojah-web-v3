import Image from 'next/image';
import {checkGreen, heroIllustration} from '../../../assets/images/images';

export default function Demography() {
  return (
    <section className="flex items-center justify-center md:justify-between gap-18 md:gap-6 flex-wrap md:flex-nowrap max-w-[1195px] mx-auto px-4 py-16 md:py-21">
      <div className="md:basis-1/2">
        <h3 className="mt-2 text-lg font-bold md:text-lg text-secondary">
          Access the informal demography in Africa’s major economies
        </h3>
        <p className="mt-6 mb-6 text-base text-secondary-300">
          An estimated 500 million Africans have no formal identification. With
          Dojah, you can leverage mobile phone numbers to verify and onboard the
          underserved communities.
        </p>
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-2">
            <Image alt="" src={checkGreen} width={18} height={18} />
            <p className="-mb-1 text-secondary-300">Phone number Lookup</p>
          </div>
          <div className="flex items-center gap-2">
            <Image alt="" src={checkGreen} width={18} height={18} />
            <p className="-mb-1 text-secondary-300">Instant SMS Verification</p>
          </div>
          <div className="flex items-center gap-2">
            <Image alt="" src={checkGreen} width={18} height={18} />
            <p className="-mb-1 text-secondary-300">Name & ID Match</p>
          </div>
        </div>
      </div>
      <Image
        src={heroIllustration}
        alt="art illustration of man taking selfie on mobile phone"
        width={505}
        height={561}
      />
    </section>
  );
}
