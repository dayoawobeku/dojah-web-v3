import Image from 'next/image';
import {stopwatchBlue} from '../assets/images/images';

export default function WhiteCards({heading, paragraph}) {
  return (
    <div className="flex flex-col items-start gap-6 px-10 pt-8 pb-12 bg-white rounded-lg">
      <Image alt="" src={stopwatchBlue} width={56} height={56} />
      <p className="font-bold text-secondary text-2md">{heading}</p>
      <p className="text-base text-secondary">{paragraph}</p>
    </div>
  );
}
