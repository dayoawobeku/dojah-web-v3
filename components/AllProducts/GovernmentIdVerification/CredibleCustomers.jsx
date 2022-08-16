import {useState} from 'react';
import Image from 'next/image';
import {codeImg} from '../../../assets/images/images';
import Hyperlink from '../../Hyperlink';

export default function CredibleCustomers() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-secondary py-24">
      <div className="flex items-start md:justify-between justify-center flex-wrap md:flex-nowrap gap-16 max-w-[1195px] mx-auto px-4">
        <div className="max-w-[553px]">
          <h4 className="text-white font-bold text-3md leading-10">
            Onboard credible customers with Africa&apos;s most robust identity
            lookup service
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
                Access basic or advanced level information
              </p>
              <p
                className={`${
                  active === 0 ? 'text-secondary-100' : 'text-[#B3B3B660]'
                } text-base my-2 transition-all duration-300 ease-in-out`}
              >
                With our Advanced and Basic lookup, you can customise the data
                points you need access to.
              </p>
              <Hyperlink
                variant={active === 0 ? 'primary' : 'disabled'}
                text="View API document"
                arrow
              />
            </div>
            <div
              onClick={() => setActive(1)}
              tabIndex={0}
              className={`relative mt-12 cursor-pointer before:content-[''] ${
                active === 1 &&
                'before:bg-primary before:absolute before:rounded-lg before:w-1 before:h-full before:-left-1 before:transition-all duration-300 ease-in-out'
              } pl-7 max-w-[506px]`}
            >
              <p
                className={`${
                  active === 1 ? 'text-white' : 'text-secondary-200'
                } font-bold text-3md leading-10 transition-all duration-300 ease-in-out`}
              >
                Validate every piece of information with a confidence value
              </p>
              <p
                className={`${
                  active === 1 ? 'text-secondary-100' : 'text-[#B3B3B660]'
                } text-base my-2 transition-all duration-300 ease-in-out`}
              >
                Receive a confidence value to ascertain how much the provided
                data matches the original response.
              </p>
              <Hyperlink
                variant={active === 1 ? 'primary' : 'disabled'}
                text="View API document"
                arrow
              />
            </div>
          </div>
        </div>
        <Image alt="" src={codeImg} width={580} height={564} />
      </div>
    </section>
  );
}
