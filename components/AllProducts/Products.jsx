import Image from 'next/image';
import Link from 'next/link';
import {useRouter} from 'next/router';
import {rightArrowBlue} from '../../assets/images/images';

function Product({link = '', src, largeText, smallText}) {
  return (
    <Link href={link}>
      <a className="pl-6 pt-6 pb-[19px] pr-[45px] sm:pr-6 xl:pr-[45px] rounded-lg border border-white bg-white flex flex-col items-start gap-2 hover:border-secondary-400 transition-all">
        <Image alt="" src={src} width={44} height={44} />
        <p className="text-2md text-secondary font-bold">{largeText}</p>
        <p className="text-secondary-150 text-sm">{smallText}</p>
        <div className="flex items-center gap-2 mt-auto">
          <p className="text-primary text-sm -mb-1">Learn more</p>
          <Image alt="" src={rightArrowBlue} />
        </div>
      </a>
    </Link>
  );
}

function Tabs() {
  const {pathname} = useRouter();

  return (
    <div className="bg-white border-b border-b-primary-100 flex items-center gap-2 px-4 md:pl-[15.23%] whitespace-nowrap overflow-x-auto">
      <Link href="/all-products" scroll={false}>
        <a
          className={`text-xs ${
            pathname === '/all-products'
              ? 'text-primary border-b-2 border-b-primary'
              : 'text-secondary-150'
          }  uppercase py-[17px] px-[10px]`}
        >
          All
        </a>
      </Link>
      <Link href="/all-products/identity-verification" scroll={false}>
        <a
          className={`text-xs ${
            pathname === '/all-products/identity-verification'
              ? 'text-primary border-b-2 border-b-primary'
              : 'text-secondary-150'
          }  uppercase py-[17px] px-[10px]`}
        >
          identity verification
        </a>
      </Link>
      <Link href="/all-products/authentication-and-checks" scroll={false}>
        <a
          className={`text-xs ${
            pathname === '/all-products/authentication-and-checks'
              ? 'text-primary border-b-2 border-b-primary'
              : 'text-secondary-150'
          }  uppercase py-[17px] px-[10px]`}
        >
          authentication & checks
        </a>
      </Link>
      <Link href="/all-products/widgets" scroll={false}>
        <a
          className={`text-xs ${
            pathname === '/all-products/widgets'
              ? 'text-primary border-b-2 border-b-primary'
              : 'text-secondary-150'
          }  uppercase py-[17px] px-[10px]`}
        >
          widgets
        </a>
      </Link>
      <Link href="/all-products/no-code-tools" scroll={false}>
        <a
          className={`text-xs ${
            pathname === '/all-products/no-code-tools'
              ? 'text-primary border-b-2 border-b-primary'
              : 'text-secondary-150'
          }  uppercase py-[17px] px-[10px]`}
        >
          no code tools
        </a>
      </Link>
    </div>
  );
}

export default function Products({ALL_PRODUCTS}) {
  return (
    <>
      <Tabs />
      <section className="bg-[#ECF3FF] pt-20 pb-10 sm:pb-16">
        <div className="flex items-center md:justify-between justify-center flex-wrap md:flex-nowrap gap-18 md:gap-6 max-w-[1195px] mx-auto px-12 sm:px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 xl:gap-x-12 gap-y-10 xl:gap-y-16">
            {ALL_PRODUCTS.length !== 0 ? (
              ALL_PRODUCTS.map((product, index) => (
                <Product key={index} {...product} />
              ))
            ) : (
              <p className="text-center md:whitespace-nowrap">
                We don&apos;t have what you&apos;re searching for atm 🙄
              </p>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
