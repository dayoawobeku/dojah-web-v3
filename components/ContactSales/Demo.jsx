import Image from 'next/image';
import {chat, quickDemo} from '../../assets/images/images';
import Hyperlink from '../Hyperlink';

export default function Demo() {
  return (
    <section className="sm:-mt-[84px] px-4 mx-auto">
      <div className="flex md:items-center items-start flex-wrap md:flex-nowrap justify-start md:justify-center gap-[60px] sm:gap-6 lg:gap-[60px]">
        <div className="flex flex-col items-start gap-4 pl-6 pr-[50px] lg:px-12 rounded py-8 lg:py-14 bg-white-800 grow md:grow-0 md:max-w-[438px]">
          <Image alt="" src={quickDemo} width={52} height={52} />
          <h4 className="text-lg font-bold text-secondary">
            Schedule a quick demo session
          </h4>
          <p className="text-base text-secondary-200 max-w-[342px]">
            Someone from our sales team would love to talk about how Dojah can
            work for you.
          </p>
          <Hyperlink variant="primary" text="Schedule a demo" arrow />
        </div>
        <div className="flex flex-col items-start gap-4 pl-6 pr-[50px] lg:px-12 rounded py-8 lg:py-14 bg-white-800 grow md:grow-0 md:max-w-[438px]">
          <Image alt="" src={chat} width={52} height={52} />
          <h4 className="text-lg font-bold text-secondary">
            Chat with someone right away
          </h4>
          <p className="text-base text-secondary-200 max-w-[342px]">
            Tell us how we can help and we’ll get in touch shortly.
          </p>
          <Hyperlink variant="primary" text="Start Chat" arrow />
        </div>
      </div>
    </section>
  );
}
