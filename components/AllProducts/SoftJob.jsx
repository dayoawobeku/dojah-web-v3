import Image from 'next/image';
import Link from 'next/link';
import {noCode, onboardingWidget} from '../../assets/images/images';

export default function SoftJob() {
  return (
    <section className="bg-white-800 sm:bg-primary-100 md:bg-[url('../assets/images/soft-job-art.svg')] bg-right-top bg-no-repeat bg-none py-16 sm:py-30">
      <div className="flex flex-col gap-16 max-w-[1195px] mx-auto px-4">
        <div>
          <h2 className="max-w-[541px] text-secondary text-lg md:text-xl font-bold">
            Soft job for technical and non-technical teams
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
              Start identifying with no code
            </p>
            <p className="text-secondary-300 text-base">
              Our no-code tool, {''}
              <Link href="/all-products/easy-lookup">
                <a className="text-danger-300">Easy lookup {''}</a>
              </Link>
              allows you obtain the information of single or multiple customers
              across different countries’ Government IDS directly from your
              Dashboard.
            </p>
          </div>
          <div className="flex items-start flex-col gap-4">
            <Image alt="" src={onboardingWidget} width={40} height={40} />
            <p className="text-3md font-bold text-secondary">
              Explore our end-to-end onboarding widget
            </p>
            <p className="text-secondary-300 text-base">
              Reduce the drop-off on your product sign up with the {''}
              <Link href="/all-products">
                <a className="text-danger-300">ID Verification Widget</a>
              </Link>
              {''}, which allows you to verify IDs and provide instant feedback
              at sign up. which allows you to verify IDs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
