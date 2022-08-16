import Image from 'next/image';
import Partners from '../Partners';
import {stopwatch} from '../../assets/images/images';

export default function TopNotchSecurity({text1, text2, text3, text4}) {
  return (
    <section className="pb-0 pt-20 sm:pt-20 sm:pb-10">
      <div className="flex items-center md:justify-between justify-center flex-wrap md:flex-nowrap gap-18 md:gap-6 max-w-[1184px] mx-auto px-12 sm:px-4 pb-0 sm:pb-11">
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-12 md:gap-6 lg:gap-11">
          <div className="relative">
            <div className="absolute -top-[30px] left-10">
              <Image src={stopwatch} alt="" width={56} height={56} />
            </div>
            <div className="h-full px-8 md:px-4 lg:px-8 bg-white-800 rounded-lg pb-6 pt-[52px]">
              <h5 className="font-bold text-secondary text-2md">{text1}</h5>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-[30px] left-10">
              <Image src={stopwatch} alt="" width={56} height={56} />
            </div>
            <div className="h-full px-8 bg-white-800 rounded-lg pb-6 pt-[52px]">
              <h5 className="font-bold text-secondary text-2md">{text2}</h5>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-[30px] left-10">
              <Image src={stopwatch} alt="" width={56} height={56} />
            </div>
            <div className="h-full px-8 bg-white-800 rounded-lg pb-6 pt-[52px]">
              <h5 className="font-bold text-secondary text-2md">{text3}</h5>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-[30px] left-10">
              <Image src={stopwatch} alt="" width={56} height={56} />
            </div>
            <div className="h-full px-8 bg-white-800 rounded-lg pb-6 pt-[52px]">
              <h5 className="font-bold text-secondary text-2md">{text4}</h5>
            </div>
          </div>
        </div>
      </div>
      <Partners />
    </section>
  );
}
