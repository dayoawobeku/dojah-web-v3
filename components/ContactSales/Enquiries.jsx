export default function Enquiries() {
  return (
    <section className="px-4 max-w-[1195px] mx-auto pt-24 sm:pt-20 pb-16 sm:pb-30">
      <div className="flex flex-col gap-4 sm:gap-2 items-start bg-white-700 py-[50px] px-4 sm:pl-14 -mx-4 sm:mx-0 rounded-lg sm:bg-[url('../assets/images/contact-sales-enquiries-art.svg')] bg-none sm:bg-no-repeat sm:bg-right">
        <h3 className="font-bold text-secondary text-lg sm:text-2lg">
          Have any other information or enquiries?
        </h3>
        <p className="text-base text-secondary-300">
          For existing Dojah customers, please send an email to {''}
          <a
            href="mailto:support@dojah.io"
            className="font-bold text-secondary"
          >
            support@dojah.io
          </a>
        </p>
        <p className="text-base text-secondary-300">
          Not a Dojah customer yet? Send an email to {''}
          <a href="mailto:Sales@dojah.io" className="font-bold text-secondary">
            Sales@dojah.io {''}
          </a>
          <span className="font-bold text-secondary">or {''}</span>
          <a
            href="/link"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-secondary"
          >
            Sign in
          </a>
        </p>
        <p className="text-base text-secondary-300">
          You can also have a look at our {''}
          <a
            href="/link"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-secondary"
          >
            API documentation
          </a>
        </p>
      </div>
    </section>
  );
}
