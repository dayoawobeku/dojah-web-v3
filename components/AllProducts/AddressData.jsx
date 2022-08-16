import Image from 'next/image';
import Partners from '../Partners';
import {
  addressCapture,
  captureOnly,
  eliminateRisk,
} from '../../assets/images/images';

export default function AddressData({text1, text2, text3}) {
  return (
    <section className="bg-[#ECF3FF] py-20">
      <div className="flex items-center md:justify-between justify-center flex-wrap md:flex-nowrap gap-18 md:gap-6 max-w-[965px] mx-auto px-4">
        <div className="grid grid-cols-3 gap-[88px]">
          <div className="relative">
            <div className="absolute -top-[30px] left-10">
              <Image src={captureOnly} alt="" width={56} height={56} />
            </div>
            <div className="h-full px-8 bg-white rounded-lg pb-6 pt-[52px]">
              <h5 className="font-bold text-secondary text-2md">{text1}</h5>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-[30px] left-10">
              <Image src={eliminateRisk} alt="" width={56} height={56} />
            </div>
            <div className="h-full px-8 bg-white rounded-lg pb-6 pt-[52px]">
              <h5 className="font-bold text-secondary text-2md">{text2}</h5>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-[30px] left-10">
              <Image src={addressCapture} alt="" width={56} height={56} />
            </div>
            <div className="h-full px-8 bg-white rounded-lg pb-6 pt-[52px]">
              <h5 className="font-bold text-secondary text-2md">{text3}</h5>
            </div>
          </div>
        </div>
      </div>
      <Partners />
    </section>
  );
}
