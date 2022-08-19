import {useState} from 'react';
import Image from 'next/image';
import {predictiveText} from '../../../assets/images/images';
import Hyperlink from '../../Hyperlink';

export default function BusinessSafe({
  heading,
  largeText1,
  paragraph1,
  paragraph2,
  largeText2,
  hyperlink,
  hyperlink1,
  hyperlink2,
  externalUrl,
}) {
  const [active, setActive] = useState(0);

  return (
    <section className="py-24 bg-secondary">
      <div className="flex items-center justify-center md:justify-between flex-wrap md:flex-nowrap gap-5 max-w-[1195px] mx-auto px-4">
        <div className="max-w-xl">
          {heading ? (
            <h4 className="mb-10 text-xl font-bold text-white">{heading}</h4>
          ) : null}
          <div className="relative before:bg-secondary-500 before:absolute before:block before:rounded-lg before:w-1 before:h-full before:-left-1 before:transition-all">
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
                } text-base mt-4 transition-all duration-300 ease-in-out`}
              >
                {paragraph1}
              </p>
              {hyperlink ? (
                <div className="mt-4">
                  <Hyperlink
                    externalUrl={externalUrl}
                    variant={active === 0 ? 'primary' : 'disabled'}
                    text={hyperlink1 ?? 'View API document'}
                    arrow
                  />
                </div>
              ) : null}
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
                {largeText2}
              </p>
              <p
                className={`${
                  active === 1 ? 'text-secondary-100' : 'text-[#B3B3B660]'
                } text-base mt-4 transition-all duration-300 ease-in-out`}
              >
                {paragraph2}
              </p>
              {hyperlink ? (
                <div className="mt-4">
                  <Hyperlink
                    externalUrl={externalUrl}
                    variant={active === 1 ? 'primary' : 'disabled'}
                    text={hyperlink2 ?? 'View API document'}
                    arrow
                  />
                </div>
              ) : null}
            </div>
          </div>
        </div>
        <Image alt="" src={predictiveText} width={660.51} height={662.12} />
      </div>
    </section>
  );
}
