import Image from 'next/image';
import {checkCircle, minusCircle} from '../../assets/images/images';
import Hyperlink from '../Hyperlink';

function Checks({unavailable = false, text}) {
  return (
    <div className="flex items-center gap-2">
      <Image alt="" src={unavailable ? minusCircle : checkCircle} />
      <p
        className={`${
          unavailable ? 'text-secondary-150' : 'text-secondary'
        } -mb-1`}
      >
        {text}
      </p>
    </div>
  );
}

export default function GetStarted() {
  return (
    <section className="sm:-mt-[45px] flex items-start max-w-[1195px] text-center mx-auto px-4">
      <div className="flex flex-wrap sm:flex-nowrap items-center gap-10 sm:gap-6 lg:gap-16 basis-full">
        <div className="flex flex-col items-start px-8 lg:px-16 border basis-full sm:basis-1/2 py-10 sm:py-14 bg-white-700 border-primary-100 rounded-2xl">
          <h4 className="text-lg font-bold text-secondary">Starting Out</h4>
          <p className="mt-4 text-base text-left text-secondary-300 max-w-[301px]">
            Testing your product or onboarding your first customers.
          </p>
          <p className="mt-6 font-bold text-secondary">
            As low as $0.06 per API Call
          </p>
          <div className="flex flex-col gap-6 my-6">
            <Checks text="Test Credentials" />
            <Checks text="Developer Support" />
            <Checks text="Customization" />
            <Checks text="Discounts" unavailable />
            <Checks text="Account Management" unavailable />
            <Checks text="White Labelling" unavailable />
          </div>
          <Hyperlink
            text="Get started"
            variant="primary"
            width="w-full"
            position="items-center"
            centerAlign
          />
        </div>

        <div className="flex flex-col items-start px-7 lg:px-16 border basis-full sm:basis-1/2 py-10 sm:py-14 bg-white-700 border-primary-100 rounded-2xl">
          <h4 className="text-lg font-bold text-secondary">Optimizing</h4>
          <p className="mt-4 text-base text-left text-secondary-300 max-w-[301px]">
            Levelling up your growth phase and optimising your product.
          </p>
          <p className="mt-6 font-bold text-secondary">
            As low as $0.04 per API Call
          </p>
          <div className="flex flex-col gap-6 my-6">
            <Checks text="Test Credentials" />
            <Checks text="Developer Support" />
            <Checks text="Customization" />
            <Checks text="Discounts" />
            <Checks text="Account Management" />
            <Checks text="White Labelling" />
          </div>
          <Hyperlink
            text="Get started"
            variant="primary"
            width="w-full"
            position="items-center"
            centerAlign
          />
        </div>
      </div>
    </section>
  );
}
