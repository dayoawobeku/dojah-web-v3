import Image from 'next/image';
import {homepageNocode} from '../../assets/images/images';
import Hyperlink from '../Hyperlink';

export default function NoCodeTools() {
  return (
    <section className="flex items-center justify-center md:justify-between gap-18 md:gap-6 flex-wrap md:flex-nowrap mx-auto pt-24">
      <Image alt="" src={homepageNocode} width={586} height={566} />

      <div className="md:basis-1/2">
        <span className="text-sm font-medium uppercase text-primary-300">
          no-CODE TOOLS
        </span>
        <h3 className="mt-2 text-lg font-bold md:text-2lg text-secondary">
          Seamlessly verify customers with no code required
        </h3>
        <p className="mt-4 mb-6 text-base text-secondary-300">
          Personalize ID Verification workflows to suit needs for customer
          onboarding and fraud detection, while getting responses in record
          time. With the responses in real-time on the application, Dojah makes
          it easy for businesses to filter bad actors without comprising growth
        </p>
        <Hyperlink
          text="See all our products"
          variant="primary"
          arrow
          href="/all-products"
        />
      </div>
    </section>
  );
}
