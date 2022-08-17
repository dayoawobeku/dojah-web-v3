import Image from 'next/image';
import {homepageWidgets, homepageWidgetsSm} from '../../assets/images/images';
import Hyperlink from '../Hyperlink';

export default function Widgets() {
  return (
    <section className="bg-primary-100 relative">
      <div className="flex items-center justify-center lg:justify-between flex-wrap lg:flex-nowrap gap-20 lg:flex-row mx-auto max-w-[1195px] pl-4 pr-4 lg:pr-0 pt-16 lg:pt-[171px] lg:pb-[166px]">
        <div className="lg:max-w-lg xl:max-w-full lg:basis-1/2">
          <span className="text-sm font-medium uppercase text-primary-300">
            widgets
          </span>
          <h3 className="mt-2 text-lg font-bold md:text-2lg text-secondary">
            Instant identity verification with analyzed data
          </h3>
          <p className="mt-4 mb-6 text-base text-secondary-300">
            Automatically analyze a wide range of identity documents, detect
            fraud and sign up real users fast. With a few lines of code, you can
            set up, customise the widget on your application, and also keep
            track of every identity verification attempt from our easy to
            understand dashboard
          </p>
          <Hyperlink
            text="See all our products"
            variant="primary"
            arrow
            href="/all-products"
          />
        </div>
        <div className="hidden lg:block absolute right-0 bottom-0 lg:w-[486px] lg:h-[469.5px] xl:w-[586px] xl:h-[566px]">
          <Image alt="" src={homepageWidgets} width={586} height={566} />
        </div>
        <div className="w-[941px] lg:hidden">
          <Image
            alt=""
            src={homepageWidgetsSm}
            layout="responsive"
            objectFit="cover"
            width={941}
            height={588}
          />
        </div>
      </div>
    </section>
  );
}
