import Image from 'next/image';
import {codeImg} from '../../assets/images/images';
import Hyperlink from '../Hyperlink';

export default function FinancialService({heading1, heading2, paragraph}) {
  return (
    <section className="bg-white py-24">
      <div className="flex items-center md:justify-between justify-center flex-wrap md:flex-nowrap gap-16 max-w-[1195px] mx-auto px-4">
        <div className="max-w-[484px] flex flex-col gap-10">
          <h4 className="text-secondary font-bold text-3md leading-10">
            {heading1}
          </h4>
          <div className="flex flex-col gap-4">
            <p className="text-3md text-secondary font-bold">{heading2}</p>
            <p className="text-base text-secondary-200">{paragraph}</p>
            <Hyperlink text="View API document" variant="primary" arrow />
          </div>
        </div>
        <Image alt="" src={codeImg} width={580} height={564} />
      </div>
    </section>
  );
}
