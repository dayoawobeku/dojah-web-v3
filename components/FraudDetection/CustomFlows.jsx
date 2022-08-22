export default function CustomFlows() {
  return (
    <section className="py-28">
      <div className="flex flex-col items-center justify-center flex-wrap md:flex-nowrap gap-14 max-w-[1380px] mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <h3 className="text-2lg text-secondary font-bold max-w-[468px]">
            Custom onboarding flows to fit your product journey
          </h3>
          <p className="max-w-2xl mt-4 text-base text-secondary-300">
            Mix and match our full-stack of fraud detection APIs with widgets
            and no-code tools or direct integration that fits into your existing
            product journey.
          </p>
        </div>
        <video
          width={1178}
          height={578}
          loop
          playsInline
          muted
          autoPlay
          src="/fraud-detection.mp4"
        >
          Your browser does not support the HTML5 Video element.
        </video>
      </div>
    </section>
  );
}
