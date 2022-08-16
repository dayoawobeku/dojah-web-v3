import Image from 'next/image';
import Link from 'next/link';
import {noCode, onboardingWidget} from '../../assets/images/images';

export default function PowerfulAutomation({docData = false}) {
  return (
    <section className="bg-white-800 sm:bg-primary-100 md:bg-[url('../assets/images/soft-job-art.svg')] bg-right-top bg-no-repeat bg-none py-16 sm:py-30">
      <div className="flex flex-col gap-16 max-w-[1195px] mx-auto px-4">
        <div>
          <h2 className="max-w-[541px] text-secondary text-lg md:text-xl font-bold">
            Powerful automation for non-technical teams
          </h2>
          <p className="max-w-[713px] mt-4 text-secondary-300 leading-7">
            Quickly deploy ID verification across your product while saving your
            engineering team time on integration, and your operations team can
            spend less time exploring several API providers. nd your operations
            team can spend less time exploring several API providers.
          </p>
        </div>
        <div className="flex items-start flex-wrap sm:flex-nowrap gap-8 sm:gap-20 justify-between">
          <div className="flex items-start flex-col gap-4">
            <Image alt="" src={noCode} width={40} height={40} />
            <p className="text-3md font-bold text-secondary">
              Identity Verification Widget
            </p>
            <p className="text-secondary-300 text-base">
              Solve all your onboarding needs with a {''}
              <Link href="/">
                <a className="text-danger-300">simple widget {''}</a>
              </Link>
              that allows you to automate data lookup and verification with low
              code.
            </p>
          </div>
          <div className="flex items-start flex-col gap-4">
            <Image alt="" src={onboardingWidget} width={40} height={40} />
            {docData ? (
              <p className="text-3md font-bold text-secondary">
                Match document data with biometrics
              </p>
            ) : (
              <p className="text-3md font-bold text-secondary">Easy Onboard</p>
            )}

            {docData ? (
              <p className="text-secondary-300 text-base">
                With our {''}
                <Link href="/">
                  <a className="text-danger-300">Biometric Verification</a>
                </Link>
                , you can match a face or fingerprint against the provided
                identity document.
              </p>
            ) : (
              <p className="text-secondary-300 text-base">
                Create smooth onboarding for your users and a custom interface
                for your business with drag and drop identity verification
                tools.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
