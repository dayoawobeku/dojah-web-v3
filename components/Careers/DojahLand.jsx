import Image from 'next/image';
import {
  dojahPicFive,
  dojahPicOne,
  dojahPicSeven,
  dojahPicSix,
  dojahPicTwo,
} from '../../assets/images/images';
import Hyperlink from '../Hyperlink';

export default function DojahLand({heading, paragraph, linkText}) {
  return (
    <section className="bg-white pt-20 pb-16 md:py-0">
      <div className="flex items-center md:justify-between justify-center flex-wrap md:flex-nowrap gap-18 md:gap-6 max-w-[1195px] mx-auto px-4">
        <div className="lg:max-w-[477px] md:w-3/5">
          <p className="text-danger text-xs font-medium mb-2 uppercase">
            the team
          </p>
          <h1 className="text-lg sm:text-xl font-bold text-secondary">
            {heading}
          </h1>
          <p className="my-4 md:my-6 text-base text-secondary-200">
            {paragraph}
          </p>
          <Hyperlink text={linkText} variant="primary" arrow />
        </div>
        <div className="flex items-center gap-8">
          <div className="flex flex-col gap-10">
            <Image alt="" src={dojahPicOne} width={296} height={296} />
            <Image alt="" src={dojahPicTwo} width={296} height={296} />
          </div>
          <div className="flex flex-col gap-10">
            <Image alt="" src={dojahPicFive} width={296} height={296} />
            <Image alt="" src={dojahPicSix} width={296} height={296} />
            <Image alt="" src={dojahPicSeven} width={296} height={296} />
          </div>
        </div>
      </div>
    </section>
  );
}
