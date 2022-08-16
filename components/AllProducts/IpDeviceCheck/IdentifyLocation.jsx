import Image from 'next/image';
import {checkGreen, heroIllustration} from '../../../assets/images/images';

export default function IdentifyLocation() {
  return (
    <section className="flex items-center justify-center md:justify-between gap-18 md:gap-6 flex-wrap md:flex-nowrap max-w-[1195px] mx-auto px-4 py-16 md:py-21">
      <div className="max-w-[485px]">
        <h3 className="mt-2 text-lg font-bold md:text-lg text-secondary">
          Identify location and device type anywhere in the world
        </h3>
        <p className="mt-6 mb-6 text-base text-secondary-300">
          Prevent fraud with comprehensive data to identify authorized users and
          non-authorized fraudsters. Detect the following data points:
        </p>

        <div className="mt-10 grid grid-cols-2 gap-x-18 w-max">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <Image alt="" src={checkGreen} width={18} height={18} />
              <p className="-mb-1 text-secondary">Continent</p>
            </div>
            <div className="flex items-center gap-2">
              <Image alt="" src={checkGreen} width={18} height={18} />
              <p className="-mb-1 text-secondary">Country</p>
            </div>
            <div className="flex items-center gap-2">
              <Image alt="" src={checkGreen} width={18} height={18} />
              <p className="-mb-1 text-secondary">State</p>
            </div>
            <div className="flex items-center gap-2">
              <Image alt="" src={checkGreen} width={18} height={18} />
              <p className="-mb-1 text-secondary">Proxy number</p>
            </div>
            <div className="flex items-center gap-2">
              <Image alt="" src={checkGreen} width={18} height={18} />
              <p className="-mb-1 text-secondary">Platform</p>
            </div>
            <div className="flex items-center gap-2">
              <Image alt="" src={checkGreen} width={18} height={18} />
              <p className="-mb-1 text-secondary">Device type</p>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <Image alt="" src={checkGreen} width={18} height={18} />
              <p className="-mb-1 text-secondary">Browser</p>
            </div>
            <div className="flex items-center gap-2">
              <Image alt="" src={checkGreen} width={18} height={18} />
              <p className="-mb-1 text-secondary">Browser Version</p>
            </div>
            <div className="flex items-center gap-2">
              <Image alt="" src={checkGreen} width={18} height={18} />
              <p className="-mb-1 text-secondary">Longitude</p>
            </div>
            <div className="flex items-center gap-2">
              <Image alt="" src={checkGreen} width={18} height={18} />
              <p className="-mb-1 text-secondary">Latitude</p>
            </div>
            <div className="flex items-center gap-2">
              <Image alt="" src={checkGreen} width={18} height={18} />
              <p className="-mb-1 text-secondary">Service Provider</p>
            </div>
            <div className="flex items-center gap-2">
              <Image alt="" src={checkGreen} width={18} height={18} />
              <p className="-mb-1 text-secondary">OS</p>
            </div>
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
