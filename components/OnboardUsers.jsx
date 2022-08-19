import Image from 'next/image';
import Partners from './Partners';
import {stopwatch} from '../assets/images/images';

export default function OnboardUsers({text1, text2, text3, text4}) {
  return (
    <section className="bg-[#ECF3FF] pt-20 pb-0 sm:pt-20 sm:pb-10">
      <div className="flex items-center md:justify-between justify-center flex-wrap md:flex-nowrap gap-18 md:gap-6 max-w-[1184px] mx-auto px-12 sm:px-4 pb-0 sm:pb-11">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-4 md:gap-6 lg:gap-11">
          <div className="relative">
            <div className="absolute -top-[30px] left-10">
              <Image src={stopwatch} alt="" width={56} height={56} />
            </div>
            <div className="h-full px-8 md:px-4 lg:px-8 bg-white rounded-lg pb-6 pt-[52px]">
              <h5 className="font-bold text-secondary text-2md">{text1}</h5>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-[30px] left-10">
              <Image src={stopwatch} alt="" width={56} height={56} />
            </div>
            <div className="h-full px-8 bg-white rounded-lg pb-6 pt-[52px]">
              <h5 className="font-bold text-secondary text-2md">{text2}</h5>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-[30px] left-10">
              <Image src={stopwatch} alt="" width={56} height={56} />
            </div>
            <div className="h-full px-8 bg-white rounded-lg pb-6 pt-[52px]">
              <h5 className="font-bold text-secondary text-2md">{text3}</h5>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-[30px] left-10">
              <Image src={stopwatch} alt="" width={56} height={56} />
            </div>
            <div className="h-full px-8 bg-white rounded-lg pb-6 pt-[52px]">
              <h5 className="font-bold text-secondary text-2md">{text4}</h5>
            </div>
          </div>
        </div>
      </div>
      <Partners />
    </section>
  );
}
