import Image from 'next/image';
import {brandKit, hyperlinkPlain} from '../../assets/images/images';

export default function Kits() {
  return (
    <section className="max-w-[1195px] mx-auto px-4 pt-16 pb-28">
      <div className="max-w-xl">
        <p className="font-bold text-secondary text-3md leading-[36px]">
          Find our logo, logo animation, brand guideline and dashboard
          screenshots for your use.
        </p>
      </div>

      <div className="grid grid-cols-3 mt-16 gap-x-8 gap-y-16">
        <a
          href="https://drive.google.com/drive/folders/1VrSsngrtyI5tc8dck0cJ5jt6NuDNFiJW?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image alt="" src={brandKit} width={377} height={228} />
          <div className="flex items-center gap-2 mt-4">
            <p className="-mb-1 text-base underline underline-offset-2 text-secondary">
              Download our logo here
            </p>
            <Image alt="" src={hyperlinkPlain} />
          </div>
        </a>
        <a
          href="https://drive.google.com/drive/folders/1loX6TSzVLDNNasacnuFxtc9w86Ndvjrf?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image alt="" src={brandKit} width={377} height={228} />
          <div className="flex items-center gap-2 mt-4">
            <p className="-mb-1 text-base underline underline-offset-2 text-secondary">
              Dojah animation logo
            </p>
            <Image alt="" src={hyperlinkPlain} />
          </div>
        </a>
        <a
          href="https://drive.google.com/drive/folders/16294NOd7K_19WEm4QJkPQj9H0IdS7ukP?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image alt="" src={brandKit} width={377} height={228} />
          <div className="flex items-center gap-2 mt-4">
            <p className="-mb-1 text-base underline underline-offset-2 text-secondary">
              Dojah brand guideline
            </p>
            <Image alt="" src={hyperlinkPlain} />
          </div>
        </a>
      </div>

      <div className="pl-16 rounded-lg py-14 mt-18 bg-white-600">
        <p className="max-w-3xl text-base text-secondary-300">
          We&apos;re also happy to help with any questions you have. Just send a
          mail to {''}
          <a
            href="mailto:marketing@dojah.io"
            className="font-bold text-secondary"
          >
            marketing@dojah.io {''}
          </a>
          and you&apos;ll reach a real human who can arrange interviews and
          provide original materials.
        </p>
      </div>
    </section>
  );
}
