import Link from 'next/link';
import Image from 'next/image';
import {
  financialServices,
  logistics,
  retail,
  rightArrowBlue,
} from '../../assets/images/images';

function Services({src, heading, body, href = ''}) {
  return (
    <div className="relative">
      <div className="absolute -top-[30px] left-6">
        <Image src={src} alt="" width={60} height={60} />
      </div>
      <div className="h-full pl-6 pr-6 bg-white rounded-lg py-14">
        <h5 className="font-bold text-secondary text-3md">{heading}</h5>
        <p className="mt-4 text-secondary-200">{body}</p>
        <Link href={href}>
          <a className="flex items-center gap-2 mt-4 w-fit">
            <span className="-mb-1 text-primary">Learn more</span>
            <Image src={rightArrowBlue} alt="" width={16} height={16} />
          </a>
        </Link>
      </div>
    </div>
  );
}

export default function MakeItScale() {
  return (
    <section className="md:bg-secondary bg-white-800">
      <div className="flex flex-col max-w-[1195px] mx-auto px-4 py-16 md:py-30">
        <h3 className="font-bold text-secondary md:text-white text-2lg">
          Whatever you’re building, make it scale with Dojah
        </h3>
        <p className="max-w-[807px] mt-8 md:mt-6 text-base text-secondary md:text-secondary-100">
          Dojah helps businesses across several industries achieve customer
          (individuals/businesses) acquisition, fraud detection, and also
          compliance. More than the industries listed, Dojah is built for you.
        </p>
        <div className="grid grid-cols-1 gap-16 mt-16 md:gap-8 md:grid-cols-3 md:mt-20">
          <Services
            src={financialServices}
            heading="Financial services"
            body="Balance compliance and customer acquisition with seamless ID
              verification."
          />
          <Services
            src={logistics}
            heading="Logistics"
            body="Onboard legitimate drivers with valid identities. Gain customer trust."
          />
          <Services
            src={retail}
            heading="Retail & eCommerce"
            body="Seamless verification to optimize onboarding, and increase checkout rates. "
          />
        </div>
      </div>
    </section>
  );
}
