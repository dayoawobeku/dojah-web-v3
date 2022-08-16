import Image from 'next/image';
import {
  gapIcon,
  number1,
  number2,
  number3,
} from '../../../assets/images/images';

export default function VerifyDocument() {
  return (
    <section className="bg-white py-16 sm:py-28">
      <div className="max-w-[1195px] mx-auto px-4">
        <p className="uppercase text-danger text-xs font-medium">
          HOW It works
        </p>
        <h3 className="mt-2 text-2lg text-secondary font-bold">
          Verify documents in just three steps
        </h3>

        <div className="mt-16 flex items-center justify-between">
          <div className="bg-[url('../assets/images/verify-documents-bg.svg')] bg-center py-7 px-6 flex flex-col items-start gap-4 max-w-[312px]">
            <Image alt="" src={number1} />
            <h4 className="text-3md text-secondary font-bold">Image capture</h4>
            <p className="text-base text-secondary-150">
              The end-user captures and uploads the photo of any identity
              document, e.g. International Passport, Utility Bill etc.
            </p>
          </div>

          <Image alt="" src={gapIcon} width={74} height={25} />

          <div className="bg-[url('../assets/images/verify-documents-bg.svg')] bg-center py-7 px-6 flex flex-col items-start gap-4 max-w-[312px]">
            <Image alt="" src={number2} />
            <h4 className="text-3md text-secondary font-bold">Extract data</h4>
            <p className="text-base text-secondary-150">
              Our technology detects and extracts text from the documents in
              real-time and with great accuracy.
            </p>
          </div>

          <Image alt="" src={gapIcon} width={74} height={25} />

          <div className="bg-[url('../assets/images/verify-documents-bg.svg')] bg-center py-7 px-6 flex flex-col items-start gap-4 max-w-[312px]">
            <Image alt="" src={number3} />
            <h4 className="text-3md text-secondary font-bold">
              Instant feedback
            </h4>
            <p className="text-base text-secondary-150">
              We then provide instant and detailed feedback from the document;
              completing the verification process.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
