import Image from 'next/image';
import {checkGreen, heroIllustration} from '../../../assets/images/images';

export default function InformalDemography() {
  return (
    <section className="bg-secondary">
      <div className="flex items-center justify-center md:justify-between gap-18 md:gap-24 flex-wrap md:flex-nowrap max-w-[1043px] mx-auto px-4 py-16 md:py-21">
        <Image
          src={heroIllustration}
          alt="art illustration of man taking selfie on mobile phone"
          width={505}
          height={561}
        />
        <div className="md:basis-1/2 max-w-[467px]">
          <h3 className="mt-2 text-2lg font-bold md:text-2lg text-white">
            Reach the informal demography
          </h3>
          <p className="mt-4 mb-4 text-base text-primary-100">
            An estimated 500 million Africans have no formal identification.
            With Dojah, you can leverage mobile phone numbers to verify and
            onboard the underserved communities.
          </p>
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <Image alt="" src={checkGreen} width={18} height={18} />
              <p className="-mb-1 text-primary-100">Phone number Lookup</p>
            </div>
            <div className="flex items-center gap-2">
              <Image alt="" src={checkGreen} width={18} height={18} />
              <p className="-mb-1 text-primary-100">Instant SMS Verification</p>
            </div>
            <div className="flex items-center gap-2">
              <Image alt="" src={checkGreen} width={18} height={18} />
              <p className="-mb-1 text-primary-100">Name & ID Match</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
