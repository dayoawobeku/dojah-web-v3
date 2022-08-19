import NavItem from '../NavItem';
import GovernmentIdVerification from './GovernmentIdVerification';
import DocumentVerification from './DocumentVerification';
import BiometricVerification from './BiometricVerification';
import AddressVerification from './AddressVerification';
import IpDeviceCheck from './IpDeviceCheck';
import EmailCheck from './EmailCheck';
import PhoneNumberCheck from './PhoneNumberCheck';
import LivenessCheck from './LivenessCheck';
import AmlCheck from './AmlCheck';
import FinancialDataWidget from './FinancialDataWidget';
import IdentityVerificationWidget from './IdentityVerificationWidget';
import EasyLookup from './EasyLookup';
import EasyConnect from './EasyConnect';
import EasyOnboard from './EasyOnboard';

const PRODUCTS = [
  {
    href: '/all-products/government-id-verification',
    text: 'Government ID Verification',
    icon: <GovernmentIdVerification />,
    smallText: 'KYC check and verification',
  },
  {
    href: '/all-products/document-verification',
    text: 'Document Verification',
    icon: <DocumentVerification />,
    smallText: 'Extract and verify document data',
  },
  {
    href: '/all-products/biometric-verification',
    text: 'Biometric Verification',
    icon: <BiometricVerification />,
    smallText: 'Authenticate users with facial biometrics',
  },
  {
    href: '/all-products/address-verification',
    text: 'Address Verification',
    icon: <AddressVerification />,
    smallText: 'Capture and validate physical location',
  },
  {
    href: '/all-products/financial-connection',
    text: 'Financial Connection',
    icon: <EmailCheck />,
    smallText: 'Access and vefify financial data',
  },
];

const PRODUCTS3 = [
  {
    href: '/all-products/ip-device-check',
    text: 'IP & Device Check',
    icon: <IpDeviceCheck />,
    smallText: 'Spot device details and IP check',
  },
  {
    href: '/all-products/email-check',
    text: 'Email Check',
    icon: <EmailCheck />,
    smallText: 'Verify user data from email address',
  },
  {
    href: '/all-products/phone-number-check',
    text: 'Phone Number Check',
    icon: <PhoneNumberCheck />,
    smallText: 'Verify phone number using OTP',
  },
  {
    href: '/all-products/liveness-check',
    text: 'Liveness Check',
    icon: <LivenessCheck />,
    smallText: 'Check that a user is a live human',
  },
  {
    href: '/all-products/aml-check',
    text: 'AML Check',
    icon: <AmlCheck />,
    smallText: 'Screen users against global sanctions',
  },
];

const PRODUCTS4 = [
  {
    href: '/all-products/financial-data-widget',
    text: 'Financial Data Widget',
    icon: <FinancialDataWidget />,
    smallText: 'Connect and analyse financial data ',
  },
  {
    href: '/all-products/id-verification-widget',
    text: 'Identity Verification Widget',
    icon: <IdentityVerificationWidget />,
    smallText: 'Onboard and verify genuine users fast',
  },
];

const PRODUCTS5 = [
  {
    href: '/all-products/easy-lookup',
    text: 'Easy Lookup',
    icon: <EasyLookup />,
    smallText: 'Lookup Government IDs directly from your dashboard',
  },
  {
    href: '/all-products/easy-connect',
    text: 'Easy Connect',
    icon: <EasyConnect />,
    smallText: 'No-code tool to access real-time financial data',
  },
  {
    href: '/all-products/easy-onboard',
    text: 'Easy Onboard',
    icon: <EasyOnboard />,
    smallText: 'Onboard & verify new users with a unique URL',
  },
];

export default function Products({dropdown = false}) {
  return (
    <div
      className={`w-full transition-all duration-300 bg-white cursor-default top-full ${
        dropdown ? 'products-dropdown-menu absolute left-0 z-10 p-20' : ''
      }`}
    >
      <div
        className={`max-w-[1195px] mx-auto ${
          dropdown ? 'px-4 grid-cols-3' : 'grid-cols-1'
        } grid place-items-start items-start gap-x-10 gap-y-6 whitespace-nowrap`}
      >
        <div>
          <p className="text-xs font-medium uppercase text-start text-secondary-150">
            IDENTITY VERIFICATION
          </p>
          <div className="flex flex-col gap-6 mt-6">
            {PRODUCTS.map(({href, externalUrl, text, smallText, icon}) => (
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
          <p className="text-xs font-medium uppercase text-start text-secondary-150">
            AUTHENTICATION & CHECKS
          </p>
          <div className="flex flex-col gap-6 mt-6">
            {PRODUCTS3.map(({href, externalUrl, text, smallText, icon}) => (
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
        <div className="flex flex-col gap-6">
          <div className="self-start">
            <p className="text-xs font-medium uppercase text-start text-secondary-150">
              WIDGETS
            </p>
            <div className="flex flex-col gap-6 mt-6">
              {PRODUCTS4.map(({href, externalUrl, text, smallText, icon}) => (
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
            <p className="text-xs font-medium uppercase text-start text-secondary-150">
              NO-CODE TOOLS
            </p>
            <div className="flex flex-col gap-6 mt-6">
              {PRODUCTS5.map(({href, externalUrl, text, smallText, icon}) => (
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
    </div>
  );
}
