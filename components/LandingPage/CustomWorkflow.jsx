import {useState} from 'react';
import Hyperlink from '../Hyperlink';

function Tabs({step}) {
  if (step === 1) {
    return (
      <div className="w-full max-w-[1178px] lg:h-[578px]">
        <video
          width={1178}
          height={578}
          preload="true"
          loop
          playsInline
          muted
          autoPlay
          src="/onboarding.mp4"
        >
          Your browser does not support the HTML5 Video element.
        </video>
      </div>
    );
  } else if (step === 2) {
    return (
      <div className="w-full max-w-[1178px] lg:h-[578px]">
        <video
          width={1178}
          height={578}
          loop
          preload="true"
          playsInline
          muted
          autoPlay
          src="/business-verification.mp4"
        >
          Your browser does not support the HTML5 Video element.
        </video>
      </div>
    );
  } else if (step === 3) {
    return (
      <div className="w-full max-w-[1178px] lg:h-[578px]">
        <video
          width={1178}
          height={578}
          loop
          preload="true"
          playsInline
          muted
          autoPlay
          src="/fraud-detection.mp4"
        >
          Your browser does not support the HTML5 Video element.
        </video>
      </div>
    );
  }

  return <>{step}</>;
}

export default function CustomWorkflow() {
  const [step, setStep] = useState(1);

  return (
    <section className="bg-white-800">
      <div className="flex flex-col items-start sm:items-center max-w-[1195px] mx-auto px-4 pt-16 sm:pt-30 pb-28 sm:pb-8">
        <h3 className="font-bold text-2lg text-secondary">
          Build custom workflows
        </h3>
        <p className="mt-4 mb-4 text-base text-left sm:mb-0 sm:text-center md:w-1/2 text-secondary-300">
          From customer onboarding to fraud detection and everything in between,
          create workflows that work for you.
        </p>

        <div className="sm:hidden">
          <Hyperlink
            variant="primary"
            text="See all our products"
            arrow
            href="/all-products"
          />
        </div>

        <div className="items-center hidden gap-1 mt-4 sm:flex">
          <button
            className={`transition-all px-12 pt-[18px] pb-[14px] rounded-l border-b-2 border-secondary ${
              step === 1 ? 'text-white bg-secondary' : 'bg-white text-secondary'
            }`}
            onFocus={() => setStep(1)}
            onClick={() => setStep(1)}
          >
            Onboarding
          </button>
          <button
            className={`transition-all pt-[18px] pb-[14px] px-[22px] border-b-2 border-secondary ${
              step === 2 ? 'text-white bg-secondary' : 'bg-white text-secondary'
            }`}
            onFocus={() => setStep(2)}
            onClick={() => setStep(2)}
          >
            Business Verification
          </button>
          <button
            className={`transition-all pt-[18px] pb-[14px] px-[40px] rounded-r border-b-2 border-secondary ${
              step === 3 ? 'text-white bg-secondary' : 'bg-white text-secondary'
            }`}
            onFocus={() => setStep(3)}
            onClick={() => setStep(3)}
          >
            Fraud detection
          </button>
        </div>

        <div className="items-center justify-center hidden sm:flex mt-11">
          <Tabs step={step} setStep={setStep} />
        </div>
      </div>
    </section>
  );
}
