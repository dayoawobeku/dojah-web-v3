import Image from 'next/image';
import {checkGreen, efficientOperations} from '../../../assets/images/images';

export default function EfficientOperations() {
  return (
    <section className="bg-[#ECF3FF]">
      <div className="flex items-center justify-center md:justify-between gap-18 md:gap-6 flex-wrap md:flex-nowrap max-w-[1195px] mx-auto px-4 py-16 md:py-21">
        <div className="md:basis-1/2 max-w-[467px]">
          <h3 className="mt-2 text-lg font-bold md:text-2lg text-secondary">
            Build efficient operations and a smoother experience
          </h3>
          <p className="mt-4 mb-4 text-base text-secondary-300">
            Eliminate manual data capture, typo errors, physical visits and
            phone calls that intrude on users’ privacy. Optimize the time and
            cost of address verification by easily capturing:
          </p>
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <Image alt="" src={checkGreen} width={18} height={18} />
              <p className="-mb-1 text-secondary-300">Phone number Lookup</p>
            </div>
            <div className="flex items-center gap-2">
              <Image alt="" src={checkGreen} width={18} height={18} />
              <p className="-mb-1 text-secondary-300">
                Instant SMS Verification
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Image alt="" src={checkGreen} width={18} height={18} />
              <p className="-mb-1 text-secondary-300">Name & ID Match</p>
            </div>
          </div>
        </div>
        <Image src={efficientOperations} alt="" width={491} height={455.2} />
      </div>
    </section>
  );
}
