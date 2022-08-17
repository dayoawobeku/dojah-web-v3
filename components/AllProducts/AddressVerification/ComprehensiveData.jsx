import Image from 'next/image';
import {checkGreen, comprehensiveData} from '../../../assets/images/images';

export default function ComprehensiveData() {
  return (
    <section className="flex items-center justify-center md:justify-between gap-18 md:gap-12 flex-wrap md:flex-nowrap max-w-[1195px] mx-auto px-4 py-16 md:py-21">
      <Image src={comprehensiveData} alt="" width={685} height={394} />
      <div className="md:basis-1/2">
        <h3 className="mt-2 text-lg font-bold md:text-2lg text-secondary">
          Capture comprehensive data
        </h3>
        <p className="mt-4 mb-4 text-base text-secondary-300">
          Efficiently capture comprehensive data and insights from multiple data
          points that cater to the needs of all kinds of businesses.
        </p>
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-2">
            <Image alt="" src={checkGreen} width={18} height={18} />
            <p className="-mb-1 text-secondary-300">
              Detect fake IDs and information
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Image alt="" src={checkGreen} width={18} height={18} />
            <p className="-mb-1 text-secondary-300">
              Leverage machine learning and automated review process
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Image alt="" src={checkGreen} width={18} height={18} />
            <p className="-mb-1 text-secondary-300">
              PII data encrypted with AES-256 at rest
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Image alt="" src={checkGreen} width={18} height={18} />
            <p className="-mb-1 text-secondary-300">
              Cross-reference ID number with document data
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
