import Link from 'next/link';
import Hyperlink from '../Hyperlink';

export default function GetStarted() {
  const signupUrl = process.env.NEXT_PUBLIC_APP_SIGNUP;
  return (
    <section className="bg-none sm:bg-[url('../assets/images/get-started-art.svg')] bg-right bg-contain sm:bg-no-repeat bg-secondary">
      <div className="flex flex-col items-center gap-6 max-w-[1195px] mx-auto px-4 pt-16 pb-14 md:py-30">
        <h2 className="font-bold text-center text-white md:text-xl text-2lg">
          Ready to get started?
        </h2>
        <p className="text-base text-center text-secondary-100 max-w-[815px]">
          Explore the{' '}
          <Link href="/all-products/id-verification-widget">
            <a className="font-bold">Identity Verification Widget</a>
          </Link>{' '}
          or create a Dojah account now and start verifying identity documents.
          You can also{' '}
          <a href="https:dojah.io" className="font-bold">
            contact us
          </a>{' '}
          to build custom identity APIs for your business.
        </p>
        <div className="flex items-center gap-4 sm:gap-6 whitespace-nowrap">
          <Hyperlink
            variant="primary"
            text="Start using Dojah"
            arrow
            externalUrl={signupUrl}
          />
          <Hyperlink
            variant="secondary"
            text="Talk to sales"
            arrow
            externalUrl="https://calendly.com/dojah/dojah-sales"
          />
        </div>
      </div>
    </section>
  );
}
