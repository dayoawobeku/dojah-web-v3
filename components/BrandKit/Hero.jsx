export default function Hero() {
  return (
    <section
      className="bg-white-600 bg-[url('../assets/images/pages-hero-art-mobile.svg')] sm:bg-[url('../assets/images/brand-kit-art.svg')] bg-no-repeat"
      id="maincontent"
      tabIndex={-1}
    >
      <div className="flex flex-col items-start sm:items-center max-w-[751px] text-center mx-auto px-4 py-30">
        <h2 className="text-2xl font-bold text-start sm:text-center text-secondary">
          Brand Kit
        </h2>
        <p className="max-w-xl mt-6 text-base text-secondary-300">
          Dojah is focused on enabling confidence and credibility across digital
          businessses.
        </p>
      </div>
    </section>
  );
}
