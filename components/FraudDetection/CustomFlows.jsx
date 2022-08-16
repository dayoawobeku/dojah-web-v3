import Image from 'next/image';
import {world} from '../../assets/images/images';

export default function CustomFlows() {
  return (
    <section className="py-28">
      <div className="flex flex-col items-center justify-center flex-wrap md:flex-nowrap gap-14 max-w-[1380px] mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <h3 className="text-2lg text-secondary font-bold max-w-[468px]">
            Custom onboarding flows to fit your product journey
          </h3>
          <p className="mt-4 text-secondary-300 text-base max-w-2xl">
            Mix and match our full-stack of fraud detection APIs with widgets
            and no-code tools or direct integration that fits into your existing
            product journey.
          </p>
        </div>
        <Image alt="" src={world} width={1380} height={652} />
      </div>
    </section>
  );
}
