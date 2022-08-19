import Image from 'next/image';
import {checkGreen} from '../assets/images/images';

export default function FraudProof() {
  return (
    <section className="bg-white-800">
      <div className="flex items-start justify-center md:justify-between gap-18 md:gap-6 flex-wrap md:flex-nowrap max-w-[1130px] mx-auto px-4 py-16 md:py-28">
        <div className="md:basis-1/2 max-w-[467px]">
          <h3 className="mt-2 text-lg font-bold md:text-2lg text-secondary">
            Fraud-proof user onboarding
          </h3>
          <p className="mt-4 mb-4 text-base text-secondary-300">
            Biometrics are near-impossible to fake or replicate, so you can
            spot:
          </p>
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <Image alt="" src={checkGreen} width={18} height={18} />
              <p className="-mb-1 text-secondary-300">Distorted Photos</p>
            </div>
            <div className="flex items-center gap-2">
              <Image alt="" src={checkGreen} width={18} height={18} />
              <p className="-mb-1 text-secondary-300">
                Print & Screenshot Photos
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Image alt="" src={checkGreen} width={18} height={18} />
              <p className="-mb-1 text-secondary-300">3D Photo Masks</p>
            </div>
            <div className="flex items-center gap-2">
              <Image alt="" src={checkGreen} width={18} height={18} />
              <p className="-mb-1 text-secondary-300">Video Replays</p>
            </div>
          </div>
        </div>
        <div className="md:basis-1/2 max-w-[467px]">
          <h3 className="mt-2 text-lg font-bold md:text-2lg text-secondary">
            Smoother verification experience
          </h3>
          <p className="mt-4 mb-4 text-base text-secondary-300">
            Reduce customer drop-off rates by verifying their identities on the
            go. You can also use biometrics data to automate:
          </p>
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <Image alt="" src={checkGreen} width={18} height={18} />
              <p className="-mb-1 text-secondary-300">Selfie Logins</p>
            </div>
            <div className="flex items-center gap-2">
              <Image alt="" src={checkGreen} width={18} height={18} />
              <p className="-mb-1 text-secondary-300">High-risk Transactions</p>
            </div>
            <div className="flex items-center gap-2">
              <Image alt="" src={checkGreen} width={18} height={18} />
              <p className="-mb-1 text-secondary-300">
                Multi-factor Authentication
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
