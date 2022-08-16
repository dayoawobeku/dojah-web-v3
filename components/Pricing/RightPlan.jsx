import Hyperlink from '../Hyperlink';

export default function RightPlan() {
  return (
    <section className="px-4 max-w-[1195px] mx-auto py-16 sm:pt-20 sm:pb-30">
      <div className="flex items-center flex-wrap md:flex-nowrap justify-between gap-4 bg-white-700 py-16 sm:py-[50px] -mx-4 sm:mx-0 px-4 lg:px-14 rounded-lg">
        <div className="max-w-[602px]">
          <h3 className="font-bold text-secondary text-2lg">
            Not sure about the right plan for you?
          </h3>
          <p className="my-4 sm:mb-0 sm:mt-2 text-base text-secondary-300">
            Our sales team can help you pick the right plan or help you figure
            out your product phase.
          </p>
        </div>
        <Hyperlink variant="primary" text="Talk to sales" arrow />
      </div>
    </section>
  );
}
