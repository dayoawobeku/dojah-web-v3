import NavItem from '../NavItem';
import FinancialServices from './FinancialServices';
import Logistics from './Logistics';
import RetailEcommerce from './RetailEcommerce';
import FraudDetection from './FraudDetection';
import BusinessVerification from './BusinessVerification';
import Geolocation from './Geolocation';
import OnboardingVerification from './OnboardingVerification';

const USE_CASES = [
  {
    href: '/financial-services',
    text: 'Financial Services',
    icon: <FinancialServices />,
    smallText: 'Conversion-optimised KYC and AML compliance',
  },
  {
    href: '/logistics',
    text: 'Logistics',
    icon: <Logistics />,
    smallText: 'Verify recipients and driver fleet.',
  },
  {
    href: '/retail-and-ecommerce',
    text: 'Retail & eCommerce',
    icon: <RetailEcommerce />,
    smallText: 'Onboard fast and increase checkout rates',
  },
];

const USE_CASES2 = [
  {
    href: '/fraud-detection',
    text: 'Fraud Detection',
    icon: <FraudDetection />,
    smallText: 'Detect & stop fraud with a smooth user experience',
  },
  {
    href: '/business-verification',
    text: 'Business Verification',
    icon: <BusinessVerification />,
    smallText: 'Protect your business interactions, verify',
  },
];

const USE_CASES3 = [
  {
    href: '/geolocation',
    text: 'Geolocation',
    icon: <Geolocation />,
    smallText: 'Identify user location when they use your platform',
  },
  {
    href: '/onboarding-and-verification',
    text: 'Onboarding & Verification',
    icon: <OnboardingVerification />,
    smallText: 'Make user onboarding fast and secure',
  },
];
export default function UseCases({dropdown = false}) {
  return (
    <div
      className={`w-full bg-white cursor-default top-full ${
        dropdown ? 'use-cases-dropdown-menu absolute left-0 z-10 p-20' : ''
      }`}
    >
      <div
        className={`max-w-[1195px] mx-auto ${
          dropdown ? 'px-4 grid-cols-3' : 'grid-cols-1'
        } grid  place-items-start items-start gap-x-10 gap-y-6 whitespace-nowrap`}
      >
        <div>
          <p className="text-xs font-medium uppercase text-start text-secondary-150">
            INDUSTRIES
          </p>
          <div className="flex flex-col gap-6 mt-6">
            {USE_CASES.map(({href, externalUrl, text, smallText, icon}) => (
              <NavItem
                key={text}
                icon={icon}
                text={text}
                href={href}
                smallText={smallText}
                externalUrl={externalUrl}
              />
            ))}
          </div>
        </div>
        <div>
          <p className="text-xs font-medium uppercase text-start text-secondary-150">
            Use DOJAH FOR
          </p>
          <div className="flex flex-col gap-6 mt-6">
            {USE_CASES2.map(({href, externalUrl, text, smallText, icon}) => (
              <NavItem
                key={text}
                icon={icon}
                text={text}
                href={href}
                smallText={smallText}
                externalUrl={externalUrl}
              />
            ))}
          </div>
        </div>
        <div className="self-start">
          <p className={`${dropdown ? 'invisible' : 'hidden'}`}>...</p>
          <div className={`flex flex-col gap-6 ${dropdown ? 'mt-6' : ''}`}>
            {USE_CASES3.map(({href, externalUrl, text, smallText, icon}) => (
              <NavItem
                key={text}
                icon={icon}
                text={text}
                href={href}
                smallText={smallText}
                externalUrl={externalUrl}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
