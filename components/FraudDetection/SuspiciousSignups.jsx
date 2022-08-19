import Image from 'next/image';
import Link from 'next/link';
import {useRef} from 'react';
import {
  nextArrow,
  prevArrow,
  rightArrowBlue,
  stopwatchBlue,
} from '../../assets/images/images';

export default function SuspiciousSignups({
  heading1,
  paragraph1,
  heading2,
  paragraph2,
  heading3,
  paragraph3,
  heading4,
  paragraph4,
  href1 = '',
  linkText1,
  href2 = '',
  linkText2,
  href3 = '',
  linkText3,
  href4 = '',
  linkText4,
}) {
  const ref = useRef(null);
  const scroll = scrollOffset => {
    ref.current.scrollLeft += scrollOffset;
  };
  return (
    <section className="bg-primary-100">
      <div className="pl-4 pb-30 pt-18">
        <div className="max-w-[1195px] mx-auto flex items-center gap-4 justify-end">
          <button
            title="Prev"
            onClick={() => scroll(-100)}
            className="w-[52px] h-[52px]"
          >
            <Image alt="" src={prevArrow} width={52} height={52} />
          </button>
          <button
            title="Next"
            onClick={() => scroll(100)}
            className="w-[52px] h-[52px]"
          >
            <Image alt="" src={nextArrow} width={52} height={52} />
          </button>
        </div>

        <div
          ref={ref}
          className="grid items-stretch grid-flow-col gap-6 pl-24 pr-4 mt-12 overflow-x-auto overscroll-x-contain snap-x scroll-px-24 scroll-smooth scroll-inline"
        >
          <div className="flex flex-col items-start gap-[22px] py-8 px-10 bg-white rounded-lg w-[363px] snap-start">
            <Image src={stopwatchBlue} alt="" width={56} height={56} />
            <h5 className="font-bold text-secondary text-2md">{heading1}</h5>
            <p className="text-base text-secondary">{paragraph1}</p>
            <Link href={href1}>
              <a className="flex items-center gap-2 mt-4 w-fit">
                <span className="-mb-1 text-primary">{linkText1}</span>
                <Image src={rightArrowBlue} alt="" width={16} height={16} />
              </a>
            </Link>
          </div>
          <div className="flex flex-col items-start gap-[22px] py-8 px-10 bg-white rounded-lg w-[363px] snap-start">
            <Image src={stopwatchBlue} alt="" width={56} height={56} />
            <h5 className="font-bold text-secondary text-2md">{heading2}</h5>
            <p className="text-base text-secondary">{paragraph2}</p>
            <Link href={href2}>
              <a className="flex items-center gap-2 mt-4 w-fit">
                <span className="-mb-1 text-primary">{linkText2}</span>
                <Image src={rightArrowBlue} alt="" width={16} height={16} />
              </a>
            </Link>
          </div>
          <div className="flex flex-col items-start gap-[22px] py-8 px-10 bg-white rounded-lg w-[363px] snap-start">
            <Image src={stopwatchBlue} alt="" width={56} height={56} />
            <h5 className="font-bold text-secondary text-2md">{heading3}</h5>
            <p className="text-base text-secondary">{paragraph3}</p>
            <Link href={href3}>
              <a className="flex items-center gap-2 mt-4 w-fit">
                <span className="-mb-1 text-primary">{linkText3}</span>
                <Image src={rightArrowBlue} alt="" width={16} height={16} />
              </a>
            </Link>
          </div>
          <div className="flex flex-col items-start gap-[22px] py-8 px-10 bg-white rounded-lg w-[363px] snap-start">
            <Image src={stopwatchBlue} alt="" width={56} height={56} />
            <h5 className="font-bold text-secondary text-2md">{heading4}</h5>
            <p className="text-base text-secondary">{paragraph4}</p>
            <Link href={href4}>
              <a className="flex items-center gap-2 mt-4 w-fit">
                <span className="-mb-1 text-primary">{linkText4}</span>
                <Image src={rightArrowBlue} alt="" width={16} height={16} />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
