import {useState} from 'react';
import Image from 'next/image';
import {easyConnectScreenshot} from '../../../assets/images/images';

export default function FinancialData() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-secondary py-24">
      <div className="flex items-center md:justify-between justify-center flex-wrap lg:flex-nowrap max-w-[1195px] mx-auto px-4">
        <div className="max-w-[553px]">
          <h4 className="text-white font-bold text-3md leading-10">
            Make it easy for users to share their financial data
          </h4>

          <div className="mt-10 before:bg-secondary-500 before:absolute before:block before:rounded-lg before:w-1 before:h-full before:-left-1 before:transition-all relative">
            <div
              onClick={() => setActive(0)}
              tabIndex={0}
              className={`relative flex flex-col cursor-pointer before:content-[''] ${
                active === 0 &&
                'before:bg-primary before:absolute before:rounded-lg before:w-1 before:h-full before:-left-1 before:transition-all duration-300 ease-in-out'
              } pl-7 max-w-[464px]`}
            >
              <p
                className={`${
                  active === 0 ? 'text-white' : 'text-secondary-200'
                } font-bold text-3md leading-10 transition-all duration-300 ease-in-out`}
              >
                1.
              </p>
              <p
                className={`${
                  active === 0 ? 'text-secondary-100' : 'text-[#B3B3B660]'
                } text-base my-2 transition-all duration-300 ease-in-out`}
              >
                Setup your app and fully customise your users’ experience on the
                Dojah dashboard.
              </p>
            </div>
            <div
              onClick={() => setActive(1)}
              tabIndex={0}
              className={`relative mt-10 cursor-pointer before:content-[''] ${
                active === 1 &&
                'before:bg-primary before:absolute before:rounded-lg before:w-1 before:h-full before:-left-1 before:transition-all duration-300 ease-in-out'
              } pl-7 max-w-[464px]`}
            >
              <p
                className={`${
                  active === 1 ? 'text-white' : 'text-secondary-200'
                } font-bold text-3md leading-10 transition-all duration-300 ease-in-out`}
              >
                2.
              </p>
              <p
                className={`${
                  active === 1 ? 'text-secondary-100' : 'text-[#B3B3B660]'
                } text-base my-2 transition-all duration-300 ease-in-out`}
              >
                Customize and select preferred features based on your product
                and users’ need. You can always adjust per-need
              </p>
            </div>
            <div
              onClick={() => setActive(2)}
              tabIndex={0}
              className={`relative mt-10 cursor-pointer before:content-[''] ${
                active === 2 &&
                'before:bg-primary before:absolute before:rounded-lg before:w-1 before:h-full before:-left-1 before:transition-all duration-300 ease-in-out'
              } pl-7 max-w-[464px]`}
            >
              <p
                className={`${
                  active === 2 ? 'text-white' : 'text-secondary-200'
                } font-bold text-3md leading-10 transition-all duration-300 ease-in-out`}
              >
                3.
              </p>
              <p
                className={`${
                  active === 2 ? 'text-secondary-100' : 'text-[#B3B3B660]'
                } text-base my-2 transition-all duration-300 ease-in-out`}
              >
                After setting up the widget, a link that can be shared with your
                customers would have been generated automatically
              </p>
            </div>
            <div
              onClick={() => setActive(3)}
              tabIndex={0}
              className={`relative mt-10 cursor-pointer before:content-[''] ${
                active === 3 &&
                'before:bg-primary before:absolute before:rounded-lg before:w-1 before:h-full before:-left-1 before:transition-all duration-300 ease-in-out'
              } pl-7 max-w-[464px]`}
            >
              <p
                className={`${
                  active === 3 ? 'text-white' : 'text-secondary-200'
                } font-bold text-3md leading-10 transition-all duration-300 ease-in-out`}
              >
                4.
              </p>
              <p
                className={`${
                  active === 3 ? 'text-secondary-100' : 'text-[#B3B3B660]'
                } text-base my-2 transition-all duration-300 ease-in-out`}
              >
                For each linked data, you can identify, view and download their
                transactions income, and spending pattern over a period of time.
              </p>
            </div>
          </div>
        </div>
        <Image
          quality={100}
          priority
          objectFit="cover"
          placeholder="blur"
          alt=""
          src={easyConnectScreenshot}
          width={650}
          height={469.22}
        />
      </div>
    </section>
  );
}
