import Image from 'next/image';
import {homepageWidgets} from '../../assets/images/images';
import Hyperlink from '../Hyperlink';

export default function Widgets() {
  return (
    <section className="bg-primary-100">
      <div className="flex items-center justify-between flex-wrap md:flex-nowrap gap-18 md:gap-12 flex-col-reverse md:flex-row mx-auto pl-30 pt-24">
        <div className="basis-1/2">
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
        <Image alt="" src={homepageWidgets} width={586} height={566} />
      </div>
    </section>
  );
}
