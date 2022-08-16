import NavItem from '../NavItem';
import GovernmentIdVerification from './GovernmentIdVerification';
import DocumentVerification from './DocumentVerification';
import BiometricVerification from './BiometricVerification';
import AddressVerification from './AddressVerification';
import BankAccountVerification from './BankAccountVerification';
import LinkBankAccounts from './LinkBankAccounts';
import AccessBankAccounts from './AccessBankAccounts';
import FinancialTransaction from './FinancialTransaction';
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
    href: '/all-products/',
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
    href: '/all-products/bank-account-verification',
    text: 'Bank Account Verification',
    icon: <BankAccountVerification />,
    smallText: 'Look up and verify users with NUBAN',
  },
];

const PRODUCTS2 = [
  {
    href: '/all-products/',
    text: 'Link Bank Accounts',
    icon: <LinkBankAccounts />,
    smallText: 'Retrieve account transaction details',
  },
  {
    href: '/all-products/',
    text: 'Access Bank Accounts',
    icon: <AccessBankAccounts />,
    smallText: 'Retrieve account transaction details',
  },
  {
    href: '/all-products/',
    text: 'Financial Transaction Analysis',
    icon: <FinancialTransaction />,
    smallText: 'Analyse spending patterns and transactions',
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
    href: '/all-products/',
    text: 'AML Check',
    icon: <AmlCheck />,
    smallText: 'Screen users against global sanctions',
  },
];

const PRODUCTS4 = [
  {
    href: '/all-products/',
    text: 'Financial Data Widget',
    icon: <FinancialDataWidget />,
    smallText: 'Connect and analyse financial data ',
  },
  {
    href: '/all-products/',
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

export default function Products() {
  return (
    <div className="absolute left-0 z-10 w-full p-20 bg-white cursor-default top-full products-dropdown-menu">
      <div className="max-w-[1195px] mx-auto px-4 grid grid-cols-4 place-items-start items-start gap-x-10 gap-y-6 whitespace-nowrap">
        <div>
          <p className="text-xs font-medium uppercase text-start text-secondary-200">
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
        <div>
          <p className="text-xs font-medium uppercase text-start text-secondary-200">
            FINANCIAL SERVICES
          </p>
          <div className="flex flex-col gap-6 mt-6">
            {PRODUCTS2.map(({href, externalUrl, text, smallText, icon}) => (
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
          <p className="text-xs font-medium uppercase text-start text-secondary-200">
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
            <p className="text-xs font-medium uppercase text-start text-secondary-200">
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
            <p className="text-xs font-medium uppercase text-start text-secondary-200">
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
