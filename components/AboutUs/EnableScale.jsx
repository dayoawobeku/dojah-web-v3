import Image from 'next/image';
import React from 'react';
import {enableScale} from '../../assets/images/images';

export default function EnableScale() {
  return (
    <section className="py-24 bg-white-800 bg-[url('../assets/images/enable-scale-art.svg')] bg-no-repeat bg-right bg-contain">
      <div className="flex gap-2 items-end max-w-[1195px] mx-auto px-4">
        <div className="flex flex-col items-start max-w-[585px]">
          <h2 className="text-xl font-bold text-secondary">
            Enable scale through transparency and credibility
          </h2>
          <p className="mt-8 text-base text-secondary-300 max-w-[487px]">
            The digital world has enabled us all to access global
            opportunities—remote work, communication with people across
            continents, and onboarding customers across the globe.
          </p>
          <p className="mt-4 text-base text-secondary-300 max-w-[487px]">
            Now, we’re immersed in a remote world that enables us to not just
            build groundbreaking solutions but to deploy them at scale for a
            global audience. Because why not?
          </p>
          <p className="mt-8 text-base text-secondary-300 max-w-[513px]">
            This advancement, however, has also given room for new challenges.
          </p>

          <ul className="mt-8 ml-4 flex flex-col gap-4 text-base text-secondary-300 list-disc max-w-[461px]">
            <li>
              How do you guarantee that the person on the other side of the
              screen is who they say they are?
            </li>
            <li>
              How do you ensure hiring, onboarding, tax and finances, or data
              protection compliance while scaling your company across countries?
            </li>
            <li>
              How do you provide a seamless, safe and secure system that users
              will trust enough to share their information?**
            </li>
            <li>
              How do you merge all of the above with product development,
              operations, support, growth and the myriad of things needed for
              success as you scale?
            </li>
          </ul>
          <p className="mt-8 text-base text-secondary-300 max-w-[513px]">
            Thanks to our powerful technology and smart people, we’re making all
            these possible and easy for modern businesses in Africa.
          </p>
        </div>
        <Image alt="" src={enableScale} width={607.9} height={799.55} />
      </div>
    </section>
  );
}
