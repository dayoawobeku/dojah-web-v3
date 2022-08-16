import Video from '../Video';

export default function WhyJoin() {
  return (
    <section className="bg-secondary">
      <div className="flex flex-col items-center max-w-[1195px] mx-auto px-4 py-16 md:py-30">
        <Video />
        <div className="mt-12 max-w-2xl text-center">
          <p className="text-3md sm:text-lg font-bold text-white">
            Why should you join us?
          </p>
          <p className="mt-4 text-sm sm:text-base text-secondary-100">
            We are working on changing how the world feels and perceive
            identity, we know how impactful our work is and impossibility is far
            from our dictionary
          </p>
        </div>
      </div>
    </section>
  );
}
