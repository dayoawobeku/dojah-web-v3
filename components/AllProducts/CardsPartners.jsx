import Image from 'next/image';
import Partners from '../Partners';

export default function CardsPartners({
  image1,
  image2,
  image3,
  text1,
  text2,
  text3,
}) {
  return (
    <section className="bg-[#ECF3FF] pb-0 pt-20 sm:py-20">
      <div className="flex items-center md:justify-between justify-center flex-wrap md:flex-nowrap gap-18 md:gap-6 max-w-[965px] mx-auto px-12 sm:px-4 pb-0 sm:pb-11">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 md:gap-6 lg:gap-[88px]">
          <div className="relative">
            <div className="absolute -top-[30px] left-10">
              <Image src={image1} alt="" width={56} height={56} />
            </div>
            <div className="h-full pl-[35px] pr-[34px] md:px-4 lg:px-8 bg-white rounded-lg pb-6 pt-[52px]">
              <h5 className="font-bold text-secondary text-2md lg:w-[195px]">
                {text1}
              </h5>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-[30px] left-10">
              <Image src={image2} alt="" width={56} height={56} />
            </div>
            <div className="h-full pl-[35px] pr-[34px] bg-white rounded-lg pb-6 pt-[52px]">
              <h5 className="font-bold text-secondary text-2md lg:w-[195px]">
                {text2}
              </h5>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-[30px] left-10">
              <Image src={image3} alt="" width={56} height={56} />
            </div>
            <div className="h-full pl-[35px] pr-[34px] bg-white rounded-lg pb-6 pt-[52px]">
              <h5 className="font-bold text-secondary text-2md lg:w-[195px]">
                {text3}
              </h5>
            </div>
          </div>
        </div>
      </div>
      <Partners />
    </section>
  );
}
