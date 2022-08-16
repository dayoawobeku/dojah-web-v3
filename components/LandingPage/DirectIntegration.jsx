import Image from 'next/image';
import Link from 'next/link';
import {
  addressVerification,
  bankAccountVerification,
  biometricVerification,
  governmentIdVerification,
  linkBankAccounts,
} from '../../assets/images/images';
import Hyperlink from '../Hyperlink';

function Integrations({text, src, href = ''}) {
  return (
    <Link href={href}>
      <a className="pl-4 lg:pl-6 pr-4 lg:pr-16 py-[15px] flex items-center justify-between bg-white-800 rounded-lg group">
        <p className="-mb-1 font-bold text-md text-secondary">{text}</p>
        <div className="transition-all duration-300 group-hover:translate-x-4 lg:group-hover:translate-x-6">
          <Image src={src} alt="" width={40} height={40} />
        </div>
      </a>
    </Link>
  );
}

export default function DirectIntegration() {
  return (
    <section className="flex items-start basis-full flex-wrap md:flex-nowrap gap-6 lg:gap-16 max-w-[1195px] mx-auto px-4 py-16 md:py-30">
      <div className="md:basis-1/2">
        <span className="text-sm font-medium uppercase text-primary-300">
          DIRECT INTEGRATION
        </span>
        <h3 className="mt-2 text-lg font-bold md:text-2lg text-secondary">
          Everything you need to access and assess identity data
        </h3>
        <p className="mt-4 text-base text-secondary-300">
          Improve onboarding with smooth-running identification and verification
          processes by directly integrating with our products. Our products span
          across multiple data points (Financial, Biometric , Government , AML
          Compliance, Address, etc). There are also additional services to help
          facilitate onboarding, such as phone number and email verification
          options using SMS, Voice, and WhatsApp notifications.
        </p>
      </div>
      <div className="flex flex-col gap-4 basis-full md:basis-1/2">
        <Integrations
          text="Government ID Verification"
          src={governmentIdVerification}
          href="/all-products/government-id-verification"
        />
        <Integrations text="Link Bank Accounts" src={linkBankAccounts} />
        <Integrations
          text="Address Verification"
          src={addressVerification}
          href="/all-products/address-verification"
        />
        <Integrations
          text="Biometric Verification"
          src={biometricVerification}
        />
        <Integrations
          text="Bank Account Verification"
          src={bankAccountVerification}
          href="/all-products/bank-account-verification"
        />
        <div className="mt-2">
          <Hyperlink
            text="See all our products"
            variant="primary"
            arrow
            href="/all-products"
          />
        </div>
      </div>
    </section>
  );
}
