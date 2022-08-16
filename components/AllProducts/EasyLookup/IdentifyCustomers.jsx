import {useState} from 'react';
import Image from 'next/image';
import {codeImg} from '../../../assets/images/images';

export default function IdentifyCustomers() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-secondary py-24">
      <div className="flex items-start md:justify-between justify-center flex-wrap md:flex-nowrap gap-16 max-w-[1195px] mx-auto px-4">
        <div className="max-w-[553px]">
          <h4 className="text-white font-bold text-3md leading-10">
            Identify customers across multiple IDs in real time.
          </h4>

          <div className="mt-10 before:bg-secondary-500 before:absolute before:block before:rounded-lg before:w-1 before:h-full before:-left-1 before:transition-all relative">
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
                1.
              </p>
              <p
                className={`${
                  active === 0 ? 'text-secondary-100' : 'text-[#B3B3B660]'
                } text-base my-2 transition-all duration-300 ease-in-out`}
              >
                Select one or more means of user identification—BVN, NIN, NUBAN,
                KRA PIN, etc—across multiple countries
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
                2.
              </p>
              <p
                className={`${
                  active === 1 ? 'text-secondary-100' : 'text-[#B3B3B660]'
                } text-base my-2 transition-all duration-300 ease-in-out`}
              >
                Import user data in bulk with a CSV file or input data with the
                provided template on the dashboard.
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
                3.
              </p>
              <p
                className={`${
                  active === 2 ? 'text-secondary-100' : 'text-[#B3B3B660]'
                } text-base my-2 transition-all duration-300 ease-in-out`}
              >
                Access the identity information of your users at any time,
                filter and download user data in bulk when needed.
              </p>
            </div>
          </div>
        </div>
        <Image alt="" src={codeImg} width={580} height={564} />
      </div>
    </section>
  );
}
