import Image from 'next/image';
import {checkGreen, supportedIds} from '../../../assets/images/images';

export default function SupportedIds() {
  return (
    <section className="bg-secondary py-16 lg:pt-8 lg:pb-28">
      <div className="max-w-[1195px] mx-auto px-4">
        <div className="flex items-center justify-between">
          <h4 className="max-w-[412px] text-white text-lg font-bold">
            Verify these supported IDs + Custom documents
          </h4>
          <Image alt="" src={supportedIds} />
        </div>

        <div className="mt-8 flex items-start justify-between">
          <div className="max-w-[467px]">
            <p className="text-white text-3md font-bold">
              Comprehensive security
            </p>
            <p className="mt-4 text-primary-100 leading-7">
              Dojah’s Verification APIs meet the highest industry standards and
              comply with regulatory licences so your business is protected from
              different parameters of document fraud.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-x-6 w-max">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <Image alt="" src={checkGreen} width={18} height={18} />
                  <p className="-mb-1 text-primary-100">
                    Counterfeit & Pseudo Documents
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Image alt="" src={checkGreen} width={18} height={18} />
                  <p className="-mb-1 text-primary-100">
                    Compromised Documents
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Image alt="" src={checkGreen} width={18} height={18} />
                  <p className="-mb-1 text-primary-100">
                    Photoshopped Documents
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <Image alt="" src={checkGreen} width={18} height={18} />
                  <p className="-mb-1 text-primary-100">Microprint Check</p>
                </div>

                <div className="flex items-center gap-2">
                  <Image alt="" src={checkGreen} width={18} height={18} />
                  <p className="-mb-1 text-primary-100">Forged ID Photo</p>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-[467px]">
            <p className="text-white text-3md font-bold">
              Pick the use case that’s right for you
            </p>
            <p className="mt-4 text-primary-100 leading-7">
              All you have to do is pick whichever use cases that fits well for
              your business and allow us tweak the kinks towards how you want it
              and we would get it done.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-x-6 w-fit">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <Image alt="" src={checkGreen} width={18} height={18} />
                  <p className="-mb-1 text-primary-100">Driver registration</p>
                </div>
                <div className="flex items-center gap-2">
                  <Image alt="" src={checkGreen} width={18} height={18} />
                  <p className="-mb-1 text-primary-100">Payment verification</p>
                </div>
                <div className="flex items-center gap-2">
                  <Image alt="" src={checkGreen} width={18} height={18} />
                  <p className="-mb-1 text-primary-100">Staff onboarding</p>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <Image alt="" src={checkGreen} width={18} height={18} />
                  <p className="-mb-1 text-primary-100">Account opening</p>
                </div>
                <div className="flex items-center gap-2">
                  <Image alt="" src={checkGreen} width={18} height={18} />
                  <p className="-mb-1 text-primary-100">Customer onboarding</p>
                </div>
                <div className="flex items-center gap-2">
                  <Image alt="" src={checkGreen} width={18} height={18} />
                  <p className="-mb-1 text-primary-100">
                    Investor verification
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
