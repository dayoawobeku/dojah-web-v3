import Image from 'next/image';
import Link from 'next/link';
import {polygon, rightArrowBlue} from '../assets/images/images';

export default function Verification({
  heading1,
  heading2,
  heading3,
  paragraph1,
  paragraph2,
  paragraph3,
  explore = false,
}) {
  return (
    <div className="flex items-center gap-21 justify-between max-w-[1051px] mx-auto">
      <div className="flex flex-col gap-2 max-w-[289px]">
        <div className="w-10 h-10 relative">
          <Image alt="" src={polygon} layout="fill" />
        </div>
        <p className="font-bold text-3md text-secondary">
          {heading1 ?? 'Biometric Verification'}
        </p>
        <p className="text-secondary-150 text-base max-w-[266px]">
          {paragraph1 ??
            'Ensure your users are truly who they say they are with facial biometrics'}
        </p>
        <Link href="/">
          <a className="flex items-center gap-2 w-fit">
            <span className="-mb-1 text-primary">
              {explore
                ? 'Explore this product'
                : 'Start using biometric verification'}
            </span>
            <Image src={rightArrowBlue} alt="" width={16} height={16} />
          </a>
        </Link>
      </div>
      <div className="flex flex-col gap-2 max-w-[289px]">
        <div className="w-10 h-10 relative">
          <Image alt="" src={polygon} layout="fill" />
        </div>
        <p className="font-bold text-3md text-secondary">
          {heading2 ?? 'Gov. ID Verification'}
        </p>
        <p className="text-secondary-150 text-base max-w-[266px]">
          {paragraph2 ??
            'Automate KYC/KYB check to onboard users and businesses across Africa’s major economies.'}
        </p>
        <Link href="/">
          <a className="flex items-center gap-2 w-fit">
            <span className="-mb-1 text-primary">
              {explore
                ? 'Explore this product'
                : 'Start using biometric verification'}
            </span>
            <Image src={rightArrowBlue} alt="" width={16} height={16} />
          </a>
        </Link>
      </div>
      <div className="flex flex-col gap-2 max-w-[289px]">
        <div className="w-10 h-10 relative">
          <Image alt="" src={polygon} layout="fill" />
        </div>
        <p className="font-bold text-3md text-secondary">
          {heading3 ?? 'Address Verification'}
        </p>
        <p className="text-secondary-150 text-base max-w-[266px]">
          {paragraph3 ??
            'Automatically capture and validate the physical location of your users in seconds'}
        </p>
        <Link href="/">
          <a className="flex items-center gap-2 w-fit">
            <span className="-mb-1 text-primary">
              {explore
                ? 'Explore this product'
                : 'Start using biometric verification'}
            </span>
            <Image src={rightArrowBlue} alt="" width={16} height={16} />
          </a>
        </Link>
      </div>
    </div>
  );
}
