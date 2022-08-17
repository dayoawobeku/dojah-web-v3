import {useState} from 'react';
import Image from 'next/image';
import {codeImg} from '../../../assets/images/images';

export default function SmoothOnboarding({
  heading,
  label = false,
  text1,
  text2,
  text3,
  text4,
}) {
  const [active, setActive] = useState(0);

  return (
    <section className="py-24 bg-secondary">
      <div className="flex items-start md:justify-between justify-center flex-wrap md:flex-nowrap gap-16 max-w-[1195px] mx-auto px-4">
        <div className="max-w-[553px]">
          {label && (
            <span className="mb-1 text-xs font-medium uppercase text-danger">
              how it works
            </span>
          )}
          <h4 className="font-bold leading-10 text-white text-3md">
            {heading}
          </h4>

          <div className="relative mt-10 before:bg-secondary-500 before:absolute before:block before:rounded-lg before:w-1 before:h-full before:-left-1 before:transition-all">
            <div
              onClick={() => setActive(0)}
              onFocus={() => setActive(0)}
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
                {text1}
              </p>
            </div>
            <div
              onClick={() => setActive(1)}
              onFocus={() => setActive(1)}
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
                {text2}
              </p>
            </div>
            <div
              onClick={() => setActive(2)}
              onFocus={() => setActive(2)}
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
                {text3}
              </p>
            </div>
            <div
              onClick={() => setActive(3)}
              onFocus={() => setActive(3)}
              tabIndex={0}
              className={`relative mt-10 cursor-pointer before:content-[''] ${
                active === 3 &&
                'before:bg-primary before:absolute before:rounded-lg before:w-1 before:h-full before:-left-1 before:transition-all duration-300 ease-in-out'
              } pl-7 max-w-[506px]`}
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
                {text4}
              </p>
            </div>
          </div>
        </div>
        <Image alt="" src={codeImg} width={580} height={564} />
      </div>
    </section>
  );
}
