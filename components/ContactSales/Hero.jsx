export default function Hero() {
  return (
    <main
      className="bg-[url('../assets/images/pages-hero-art-mobile.svg')] sm:bg-[url('../assets/images/contact-sales-art.svg')] bg-no-repeat sm:bg-cover"
      id="maincontent"
      tabIndex={-1}
    >
      <div className="flex flex-col items-start sm:items-center text-center mx-auto px-4 pt-17 sm:pt-[106px] pb-32 sm:pb-[200px]">
        <h2 className="text-xl font-bold text-secondary">Contact Sales</h2>
      </div>
    </main>
  );
}
