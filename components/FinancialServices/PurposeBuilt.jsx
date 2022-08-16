import {useState} from 'react';
import Image from 'next/image';
import {
  carouselDots,
  carouselDots2,
  carouselDots3,
  carouselNext,
  carouselPrev,
  workflowMobile,
} from '../../assets/images/images';
import Hyperlink from '../Hyperlink';
import Verification from '../Verification';

function Carousel({maxcount = 3}) {
  const [count, setCount] = useState(1);

  const next = () => {
    if (count < maxcount) {
      setCount(prev => prev + 1);
    }
  };

  const previous = () => {
    if (count > 1) {
      setCount(prev => prev - 1);
    }
  };

  return (
    <div className="flex flex-col items-center mx-auto mt-20 sm:hidden">
      <Image alt="" src={workflowMobile} />
      <div className="mt-8">
        <Image
          alt=""
          src={
            count === 1
              ? carouselDots
              : count === 2
              ? carouselDots2
              : count === 3
              ? carouselDots3
              : ''
          }
        />
      </div>
      <div className="flex items-center gap-6 mt-5">
        <div onClick={previous}>
          <Image alt="" src={carouselPrev} />
        </div>
        <p className="-mb-1 font-bold text-3md text-secondary">
          {count === 1
            ? 'Onboarding'
            : count === 2
            ? 'Another'
            : count === 3
            ? 'Yet another'
            : ''}
        </p>
        <div onClick={next}>
          <Image alt="" src={carouselNext} />
        </div>
      </div>
    </div>
  );
}

function Tabs({step}) {
  if (step === 1) {
    return <Verification />;
  } else if (step === 2) {
    return (
      <video
        width={1240}
        loop
        playsInline
        muted
        autoPlay
        src="/business-verification-gif.mp4"
      >
        Your browser does not support the HTML5 Video element.
      </video>
    );
  } else if (step === 3) {
    return (
      <video
        width={1240}
        loop
        playsInline
        muted
        autoPlay
        src="/fraud-detection-gif.mp4"
      >
        Your browser does not support the HTML5 Video element.
      </video>
    );
  }

  return <>{step}</>;
}

export default function PurposeBuilt() {
  const [step, setStep] = useState(1);

  return (
    <section className="bg-white-800">
      <div className="flex flex-col items-start sm:items-center max-w-[1195px] mx-auto px-4 py-24">
        <h3 className="font-bold text-2lg text-secondary max-w-3xl text-center">
          Purpose-built for every stage of your customer journey
        </h3>

        <div className="sm:hidden">
          <Hyperlink
            variant="primary"
            text="See all our products"
            arrow
            href="/all-products"
          />
        </div>

        <Carousel />

        <div className="items-center hidden gap-1 mt-8 sm:flex">
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

        <div className="items-center justify-center hidden sm:flex mt-20">
          <Tabs step={step} setStep={setStep} />
        </div>
      </div>
    </section>
  );
}
