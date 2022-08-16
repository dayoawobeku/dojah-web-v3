import Image from 'next/image';
import {hyperlink} from '../../assets/images/images';

function Position({position, type, url = 'sth'}) {
  return (
    <div className="py-5 flex items-start sm:items-center justify-between border-b border-primary-100 -ml-4 xl:-ml-8 md:pl-8 -mr-4 xl:-mr-11 px-4 md:pr-11">
      <p className="text-secondary">{position}</p>
      <div className="sm:hidden">
        <p className="text-secondary-150">{type}</p>
        <a href={url} className="flex items-center gap-2 mt-1 sm:mt-0">
          <p className="text-primary">Apply</p>
          <Image src={hyperlink} alt="" width={16} height={16} />
        </a>
      </div>
      <p className="hidden sm:block text-secondary-150">{type}</p>
      <a href={url} className="hidden sm:flex items-center gap-2 mt-1 sm:mt-0">
        <p className="text-primary">Apply</p>
        <Image src={hyperlink} alt="" width={16} height={16} />
      </a>
    </div>
  );
}

export default function Positions() {
  return (
    <section className="bg-white-800">
      <div className="flex flex-col items-start max-w-[1195px] mx-auto px-4 py-16 md:pt-14 md:pb-21">
        <p className="text-danger text-tiny uppercase">hiring</p>
        <p className="mt-2 text-secondary text-3md font-bold">Open positions</p>
        <div className="mt-11 w-full">
          <p className="text-base sm:text-2md text-secondary mb-4 sm:mb-5">
            PRODUCT & DESIGN
          </p>
          <Position position="Product Designer" type="Remote, Full-Time" />
        </div>
      </div>
    </section>
  );
}
