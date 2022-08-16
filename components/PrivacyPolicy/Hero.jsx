export default function Hero() {
  return (
    <main
      className="bg-white-700 bg-[url('../assets/images/pages-hero-art-mobile.svg')] sm:bg-[url('../assets/images/privacy-policy-art.svg')] bg-no-repeat sm:bg-cover"
      id="maincontent"
      tabIndex={-1}
    >
      <div className="flex flex-col gap-6 items-center text-center max-w-2xl mx-auto px-4 py-20">
        <h1 className="text-xl font-bold text-secondary">Privacy Policy</h1>
        <p className="text-base text-secondary-300">
          Effective starting:{' '}
          <span className="font-bold text-secondary">May 28, 2022</span>
        </p>
        <p className="text-base text-secondary-300">
          Privacy is important to us, and so is being transparent about how we
          collect, use, and share data when you visit or use {''}
          <a href="/sth" className="font-bold text-secondary">
            www.dojah.io
          </a>
        </p>
      </div>
    </main>
  );
}
