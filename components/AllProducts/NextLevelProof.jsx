import Image from 'next/image';
import Link from 'next/link';
import {noCode, onboardingWidget} from '../../assets/images/images';

export default function NextLevelProof() {
  return (
    <section className="bg-white-800 sm:bg-primary-100 md:bg-[url('../assets/images/soft-job-art.svg')] bg-right-top bg-no-repeat bg-none py-16 sm:py-30">
      <div className="flex flex-col gap-16 max-w-[1195px] mx-auto px-4">
        <div>
          <h2 className="max-w-[541px] text-secondary text-lg md:text-xl font-bold">
            Adopt next-level proof of verification
          </h2>
          <p className="max-w-[713px] mt-4 text-secondary-300 leading-7">
            About 70% of fraudulent activities are perpetuated outside of the
            identity document. Take document verification to the next level;
            tackle identity theft and synthetic fraud with complete proof of
            identity.
          </p>
        </div>
        <div className="flex items-start flex-wrap sm:flex-nowrap gap-8 sm:gap-20 justify-between">
          <div className="flex items-start flex-col gap-4">
            <Image alt="" src={noCode} width={40} height={40} />
            <p className="text-3md font-bold text-secondary">
              Match document data with biometrics
            </p>
            <p className="text-secondary-300 text-base">
              With our {''}
              <Link href="/">
                <a className="text-danger-300">Biometric Verification{''}</a>
              </Link>
              {''}, you can match a face or fingerprint against the provided
              identity document.
            </p>
          </div>
          <div className="flex items-start flex-col gap-4">
            <Image alt="" src={onboardingWidget} width={40} height={40} />
            <p className="text-3md font-bold text-secondary">
              Verify that users are remotely present
            </p>
            <p className="text-secondary-300 text-base">
              Explore {''}
              <Link href="/">
                <a className="text-danger-300">Dojah Liveness Check {''}</a>
              </Link>
              to detect that a fingerprint or face is from a live person present
              at the point of capture.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
