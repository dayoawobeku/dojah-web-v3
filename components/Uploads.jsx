import Image from 'next/image';
import React from 'react';

export default function Uploads({
  src1,
  src2,
  heading1,
  heading2,
  body1,
  body2,
}) {
  return (
    <section className="bg-[#ECF3FF] py-20">
      <div className="max-w-[1032px] mx-auto flex flex-wrap justify-between gap-14 md:flex-nowrap md:gap-0">
        <div className="flex items-start gap-4 px-2 md:px-0 md:flex-wrap lg:flex-nowrap lg:gap-8">
          <div className="w-17 h-17">
            <Image src={src1} width={70} height={70} alt="" layout="fixed" />
          </div>
          <div className="md:max-w-[352px]">
            <h5 className="font-bold text-secondary text-3md leading-[35px]">
              {heading1}
            </h5>
            <p className="mt-2 text-base text-secondary-150">{body1}</p>
          </div>
        </div>
        <div className="flex items-start gap-4 px-2 md:px-0 md:flex-wrap lg:flex-nowrap lg:gap-8">
          <div className="w-17 h-17">
            <Image src={src2} width={70} height={70} alt="" layout="fixed" />
          </div>
          <div className="md:max-w-[352px]">
            <h5 className="font-bold text-secondary text-3md leading-[35px]">
              {heading2}
            </h5>
            <p className="mt-2 text-base text-secondary-150">{body2}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
