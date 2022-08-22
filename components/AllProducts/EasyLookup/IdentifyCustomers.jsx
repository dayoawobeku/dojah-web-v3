import {useState} from 'react';
import Image from 'next/image';
import {
  easyLookupScreenshot1,
  easyLookupScreenshot2,
  easyLookupScreenshot3,
} from '../../../assets/images/images';

export default function IdentifyCustomers({
  heading,
  largeText1,
  largeText2,
  largeText3,
  paragraph1,
  paragraph2,
  paragraph3,
}) {
  const [active, setActive] = useState(0);

  return (
    <section className="py-24 bg-secondary">
      <div className="flex items-center md:justify-between justify-center flex-wrap lg:flex-nowrap max-w-[1195px] mx-auto px-4">
        <div className="max-w-[669px]">
          <h4 className="text-3md leading-10 font-bold text-white">
            {heading}
          </h4>

          <div className="relative mt-10 before:bg-secondary-500 before:absolute before:block before:rounded-lg before:w-1 before:h-full before:-left-1 before:transition-all">
            <div
              onClick={() => setActive(0)}
              tabIndex={0}
              className={`relative flex flex-col cursor-pointer before:content-[''] ${
                active === 0 &&
                'before:bg-primary before:absolute before:rounded-lg before:w-1 before:h-full before:-left-1 before:transition-all duration-300 ease-in-out'
              } pl-7 max-w-[506px]`}
            >
              <p
                className={`${
                  active === 0 ? 'text-white' : 'text-secondary-200'
                } font-bold text-3md leading-10 transition-all duration-300 ease-in-out`}
              >
                {largeText1}
              </p>
              <p
                className={`${
                  active === 0 ? 'text-secondary-100' : 'text-[#B3B3B660]'
                } text-base my-2 transition-all duration-300 ease-in-out`}
              >
                {paragraph1}
              </p>
            </div>
            <div
              onClick={() => setActive(1)}
              tabIndex={0}
              className={`relative mt-10 cursor-pointer before:content-[''] ${
                active === 1 &&
                'before:bg-primary before:absolute before:rounded-lg before:w-1 before:h-full before:-left-1 before:transition-all duration-300 ease-in-out'
              } pl-7 max-w-[506px]`}
            >
              <p
                className={`${
                  active === 1 ? 'text-white' : 'text-secondary-200'
                } font-bold text-3md leading-10 transition-all duration-300 ease-in-out`}
              >
                {largeText2}
              </p>
              <p
                className={`${
                  active === 1 ? 'text-secondary-100' : 'text-[#B3B3B660]'
                } text-base my-2 transition-all duration-300 ease-in-out`}
              >
                {paragraph2}
              </p>
            </div>
            <div
              onClick={() => setActive(2)}
              tabIndex={0}
              className={`relative mt-10 cursor-pointer before:content-[''] ${
                active === 2 &&
                'before:bg-primary before:absolute before:rounded-lg before:w-1 before:h-full before:-left-1 before:transition-all duration-300 ease-in-out'
              } pl-7 max-w-[506px]`}
            >
              <p
                className={`${
                  active === 2 ? 'text-white' : 'text-secondary-200'
                } font-bold text-3md leading-10 transition-all duration-300 ease-in-out`}
              >
                {largeText3}
              </p>
              <p
                className={`${
                  active === 2 ? 'text-secondary-100' : 'text-[#B3B3B660]'
                } text-base my-2 transition-all duration-300 ease-in-out`}
              >
                {paragraph3}
              </p>
            </div>
          </div>
        </div>
        <Image
          alt=""
          quality={100}
          priority
          placeholder="blur"
          objectFit="cover"
          src={
            active === 1
              ? easyLookupScreenshot1
              : active === 2
              ? easyLookupScreenshot2
              : easyLookupScreenshot3
          }
          width={640}
          height={462}
        />
      </div>
    </section>
  );
}
