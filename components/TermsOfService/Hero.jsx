export default function Hero() {
  return (
    <main
      className="bg-white-700 bg-[url('../assets/images/pages-hero-art-mobile.svg')] sm:bg-[url('../assets/images/privacy-policy-art.svg')] bg-no-repeat sm:bg-cover"
      id="maincontent"
      tabIndex={-1}
    >
      <div className="flex flex-col items-center max-w-2xl gap-6 px-4 py-20 mx-auto text-center">
        <h1 className="text-xl font-bold text-secondary">
          Dojah Terms of Service
        </h1>
        <p className="text-base text-secondary-300">
          Effective starting: {''}
          <span className="font-bold text-secondary">May 28, 2022</span>
        </p>
        <p className="text-base text-secondary-300">
          These terms and conditions outline the rules and regulations for the
          use of the Dojah Incorporated Website, located at {''}
          <a href="/sth" className="font-bold text-secondary">
            www.dojah.io
          </a>
        </p>
      </div>
    </main>
  );
}
