export default function VerificationTime() {
  return (
    <section className="bg-secondary py-10">
      <div className="flex item-center justify-between gap-8 max-w-[1011px] mx-auto px-4">
        <div className="flex flex-col items-center gap-1 text-white">
          <span className="text-[80px] font-medium">~4s</span>
          <span>Avg. Verification Time</span>
        </div>
        <div className="flex flex-col items-center gap-1 text-white">
          <span className="text-[80px] font-medium">99%</span>
          <span>Verified on the first try</span>
        </div>
        <div className="flex flex-col items-center gap-1 text-white">
          <span className="text-[80px] font-medium">+10</span>
          <span>African Countries</span>
        </div>
      </div>
    </section>
  );
}
