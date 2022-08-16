import Link from 'next/link';
import Image from 'next/image';
import {
  avatarOne,
  avatarThree,
  avatarTwo,
  flexFinanceLogo,
  jetrideLogo,
  moneymieLogo,
  rightArrowBlack,
} from '../../assets/images/images';

function Story({
  companyLogo,
  alt,
  logowidth,
  logoheight,
  avatar,
  story,
  name,
  description,
  paddingBottom,
}) {
  return (
    <div
      className={`px-6 pt-8 pb-8 bg-white rounded-lg ${paddingBottom} lg:px-10 lg:pt-12`}
    >
      <Image
        src={companyLogo}
        alt={alt}
        width={logowidth}
        height={logoheight}
      />
      <p className="mt-6 leading-[30px] text-secondary-200">{story}</p>
      <div className="flex items-center gap-2 mt-4 lg:mt-10">
        <Image src={avatar} alt="portrait of ..." width={64} height={64} />
        <div className="flex flex-col -mb-3">
          <p className="font-bold text-tiny text-secondary">{name}</p>
          <p className="text-secondary-200">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function CustomerStories() {
  return (
    <section className="bg-primary-100">
      <div className="flex justify-between flex-wrap lg:flex-nowrap max-w-[1195px] mx-auto px-4 lg:gap-24 gap-6 basis-full md:py-30 py-16">
        <div className="flex flex-col gap-12 lg:gap-21 lg:basis-1/2">
          <div>
            <h3 className="max-w-sm font-bold text-2lg text-secondary">
              The best product teams build with Dojah
            </h3>
            <Link href="/">
              <a className="flex items-center gap-5 mt-8 w-fit">
                <span className="-mb-1 font-bold tracking-widest underline uppercase text-tiny text-secondary-300">
                  Read our customer stories
                </span>
                <Image src={rightArrowBlack} alt="" width={24} height={24} />
              </a>
            </Link>
          </div>

          <Story
            companyLogo={flexFinanceLogo}
            alt="flex finance logo"
            logowidth={60}
            logoheight={39}
            avatar={avatarOne}
            story="We integrated with Dojah for their KYC services and I can say, their uptime has been impressive. It has basically helped us verify our users"
            name="Abiodun Kolade"
            description="Product Manager, Flex Finance"
            paddingBottom="lg:pb-20"
          />
        </div>

        <div className="flex flex-col gap-6 lg:gap-14 lg:basis-1/2">
          <Story
            companyLogo={jetrideLogo}
            alt="jetride logo"
            logowidth={94}
            logoheight={35}
            avatar={avatarTwo}
            story="Dojah offers the best API for user verification that we can rely on. The best thing is that they work quickly, so I never have to wait too long. It’s always been a pleasure to work with them!"
            name="Truth Egbele"
            description="CEO, JetRide Taxi"
            paddingBottom="lg:pb-14"
          />
          <Story
            companyLogo={moneymieLogo}
            alt="moneymie logo"
            logowidth={130}
            logoheight={26}
            avatar={avatarThree}
            story="With Dojah, we don’t have to worry about the hassle of onboarding our customers as we have it easy with the selfie and ID verification API. The APIs are fast, reliable and integration is straightforward. Dojah gives us almost nothing to worry about so we strongly recommend"
            name="Opeyemi Awoyemi"
            description="Co-Founder, Moneymie"
            paddingBottom="lg:pb-14"
          />
        </div>
      </div>
    </section>
  );
}
