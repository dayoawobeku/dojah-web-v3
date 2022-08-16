import Image from 'next/image';
import {world} from '../../../assets/images/images';

export default function LookupIds() {
  return (
    <section className="bg-[#Ecf3ff] pt-30 pb-20">
      <div className="flex flex-col items-center justify-center flex-wrap md:flex-nowrap gap-17 max-w-[1380px] mx-auto px-4">
        <p className="text-secondary font-bold text-lg max-w-md text-center">
          Lookup ID’s in Africa’s major economies
        </p>
        <Image alt="" src={world} width={1380} height={652} />
      </div>
    </section>
  );
}
