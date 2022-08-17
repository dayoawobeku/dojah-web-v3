import Image from 'next/image';
import {
  homepageNocode,
  homepageNocodeLg,
  homepageNocodeSm,
} from '../../assets/images/images';
import Hyperlink from '../Hyperlink';

export default function NoCodeTools() {
  return (
    <section className="relative">
      <div className="flex flex-col-reverse lg:flex-row items-start lg:items-center 3xl:items-end justify-start lg:justify-end gap-20 flex-wrap lg:flex-nowrap mx-auto pt-16 lg:pt-[216px] lg:pb-[131px] 3xl:pb-0 pl-4 pr-4 lg:pl-0 max-w-[1195px] ml-auto">
        <div className="hidden lg:block 3xl:hidden absolute lg:w-[486px] lg:h-[469.5px] xl:w-[586px] xl:h-[566px] left-0 bottom-0">
          <Image alt="" src={homepageNocode} width={586} height={566} />
        </div>
        <div className="hidden 3xl:block w-[941px]">
          <Image
            alt=""
            src={homepageNocodeLg}
            width={941}
            height={560}
            layout="responsive"
            objectFit="contain"
          />
        </div>
        <div className="w-full lg:hidden">
          <Image
            alt=""
            src={homepageNocodeSm}
            layout="responsive"
            objectFit="cover"
            width={941}
            height={588}
          />
        </div>

        <div className="lg:max-w-lg xl:max-w-full lg:basis-1/2 3xl:pb-20">
          <span className="text-sm font-medium uppercase text-primary-300">
            no-CODE TOOLS
          </span>
          <h3 className="mt-2 text-lg font-bold md:text-2lg text-secondary">
            Seamlessly verify customers with no code required
          </h3>
          <p className="mt-4 mb-6 text-base text-secondary-300">
            Personalize ID Verification workflows to suit needs for customer
            onboarding and fraud detection, while getting responses in record
            time. With the responses in real-time on the application, Dojah
            makes it easy for businesses to filter bad actors without comprising
            growth
          </p>
          <Hyperlink
            text="See all our products"
            variant="primary"
            arrow
            href="/all-products"
          />
        </div>
      </div>
    </section>
  );
}
