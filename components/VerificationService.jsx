import Image from 'next/image';
import Link from 'next/link';
import {useRef} from 'react';
import {
  nextArrow,
  prevArrow,
  rightArrowBlue,
  stopwatchBlue,
} from '../assets/images/images';

export default function VerificationService() {
  const ref = useRef(null);
  const scroll = scrollOffset => {
    ref.current.scrollLeft += scrollOffset;
  };
  return (
    <section className="bg-primary-100">
      <div className="pl-4 pb-30 pt-18">
        <div className="max-w-[1195px] mx-auto flex items-center gap-4 justify-end">
          <button
            title="Prev"
            onClick={() => scroll(-100)}
            className="w-[52px] h-[52px]"
          >
            <Image alt="" src={prevArrow} width={52} height={52} />
          </button>
          <button
            title="Next"
            onClick={() => scroll(100)}
            className="w-[52px] h-[52px]"
          >
            <Image alt="" src={nextArrow} width={52} height={52} />
          </button>
        </div>

        <div
          ref={ref}
          className="grid items-stretch grid-flow-col gap-6 pl-24 pr-4 mt-12 overflow-x-auto overscroll-x-contain snap-x scroll-px-24 scroll-smooth scroll-inline"
        >
          <div className="flex flex-col items-start gap-[22px] py-8 px-10 bg-white rounded-lg w-[363px] snap-start">
            <Image src={stopwatchBlue} alt="" width={56} height={56} />
            <h5 className="font-bold text-secondary text-2md">
              Protect against suspicious sign ups and impersonation
            </h5>
            <p className="text-base text-secondary">
              Biometric verification with selfies, short videos and fingerprints
              helps you automatically confirm that the genuine user is live and
              the presented biometrics matches a valid ID. This way, you’re able
              to spot fraudsters at the gate before they gain entry to your
              platform or impersonate an unsuspecting user.
            </p>
            <Link href="/all-products/biometric-verification">
              <a className="flex items-center gap-2 mt-4 w-fit">
                <span className="-mb-1 text-primary">
                  Start using biometric verification
                </span>
                <Image src={rightArrowBlue} alt="" width={16} height={16} />
              </a>
            </Link>
          </div>
          <div className="flex flex-col items-start gap-[22px] py-8 px-10 bg-white rounded-lg w-[363px] snap-start">
            <Image src={stopwatchBlue} alt="" width={56} height={56} />
            <h5 className="font-bold text-secondary text-2md">
              Catch up to 98% of document and identity fraud attempts
            </h5>
            <p className="text-base text-secondary">
              Dojah’s global identity verification, covers over 3,000 document
              types from 150+ countries. Our Document Verification APIs, widgets
              and no-code tools help you automatically spot forgeries and
              counterfeits on physical or digital documents.
            </p>
            <Link href="/all-products/document-verification">
              <a className="flex items-center gap-2 mt-4 w-fit">
                <span className="-mb-1 text-primary">
                  Start using Document Verification
                </span>
                <Image src={rightArrowBlue} alt="" width={16} height={16} />
              </a>
            </Link>
          </div>
          <div className="flex flex-col items-start gap-[22px] py-8 px-10 bg-white rounded-lg w-[363px] snap-start">
            <Image src={stopwatchBlue} alt="" width={56} height={56} />
            <h5 className="font-bold text-secondary text-2md">
              Strengthen compliance and security with AML solutions
            </h5>
            <p className="text-base text-secondary">
              Deploy end-to-end KYC and AML tools to screen users against global
              PEP and sanctions watchlists. Dojah’s AML watchlist coverage is
              updated in real-time, to help your business assess the potential
              AML risk exposure of your customers.
            </p>
            <Link href="/all-products/aml-check">
              <a className="flex items-center gap-2 mt-4 w-fit">
                <span className="-mb-1 text-primary">
                  Start using AML Check
                </span>
                <Image src={rightArrowBlue} alt="" width={16} height={16} />
              </a>
            </Link>
          </div>
          <div className="flex flex-col items-start gap-[22px] py-8 px-10 bg-white rounded-lg w-[363px] snap-start">
            <Image src={stopwatchBlue} alt="" width={56} height={56} />
            <h5 className="font-bold text-secondary text-2md">
              Check IP address and identify devices from anywhere in the world
            </h5>
            <p className="text-base text-secondary">
              Our IP Address Lookup tool will show you the city, state, zip
              code, country, ISP, and time zone of any IP. This would inform
              business decisions for each risk level.
            </p>
            <Link href="/all-products/ip-device-check">
              <a className="flex items-center gap-2 mt-4 w-fit">
                <span className="-mb-1 text-primary">
                  Start using IP & Device Check
                </span>
                <Image src={rightArrowBlue} alt="" width={16} height={16} />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
