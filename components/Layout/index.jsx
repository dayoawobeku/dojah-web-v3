import {useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Hyperlink from '../Hyperlink';
import GetStarted from './GetStarted';
import {
  addIc,
  closeMenu,
  dropdown,
  facebook,
  hamburger,
  linkedin,
  logo,
  minusIc,
  rightArrowBlue,
  slack,
  twitter,
  youtube,
} from '../../assets/images/images';
import Developers from './Navigation/Developers';
import Company from './Navigation/Company';
import UseCases from './Navigation/UseCases';
import Products from './Navigation/Products';

export default function Layout({children}) {
  const signinUrl = process.env.NEXT_PUBLIC_APP_SIGNIN;
  const [isOpen, setIsOpen] = useState(false);
  const [productsMenu, setProductsMenu] = useState(false);
  const [useCasesMenu, setUseCasesMenu] = useState(false);
  const [developersMenu, setDevelopersMenu] = useState(false);
  const [companyMenu, setCompanyMenu] = useState(false);
  return (
    <>
      <a
        href="#maincontent"
        className="absolute left-0 z-50 p-2 bg-white text-primary -top-10 focus:top-0"
      >
        Skip to content
      </a>
      <nav className="relative bg-secondary">
        <div className="flex items-center justify-between max-w-[1195px] mx-auto px-4 py-3 lg:py-0">
          <Link href="/">
            <a className="w-[67px] h-[30px]">
              <Image
                src={logo}
                alt="Dojah logo"
                width={67}
                height={30}
                priority
              />
            </a>
          </Link>
          <div className="items-center hidden lg:flex">
            <button className="flex gap-2 px-4 py-[30px] group products">
              <span className="text-white text-tiny">Products</span>
              <div className="w-4 h-4 transition-all duration-300 group-hover:rotate-180">
                <Image src={dropdown} alt="" width={16} height={16} />
              </div>

              <Products dropdown />
            </button>
            <button className="flex gap-2 px-4 py-[30px] group use-cases">
              <span className="text-white text-tiny">Use cases</span>
              <div className="w-4 h-4 transition-all duration-300 group-hover:rotate-180">
                <Image src={dropdown} alt="" width={16} height={16} />
              </div>

              <UseCases dropdown />
            </button>
            <button className="flex gap-2 px-4 py-[30px] group developers">
              <span className="text-white text-tiny">Developers</span>
              <div className="w-4 h-4 transition-all duration-300 group-hover:rotate-180">
                <Image src={dropdown} alt="" width={16} height={16} />
              </div>

              <Developers dropdown />
            </button>
            <button className="flex gap-2 px-4 py-[30px] group company">
              <span className="text-white text-tiny">Company</span>
              <div className="w-4 h-4 transition-all duration-300 group-hover:rotate-180">
                <Image src={dropdown} alt="" width={16} height={16} />
              </div>

              <Company dropdown />
            </button>
          </div>
          <div
            onClick={() => setIsOpen(prev => !prev)}
            className={`block relative ${
              isOpen ? 'h-8 w-8' : 'w-6 h-6'
            } lg:hidden`}
          >
            <Image
              src={isOpen ? closeMenu : hamburger}
              alt="hamburger menu"
              width={isOpen ? 32 : 24}
              height={isOpen ? 32 : 24}
            />
          </div>
          <div className="items-center hidden gap-4 lg:flex">
            <a
              href={signinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex outline outline-1 outline-white px-[37px] pt-[16px] pb-[12px] rounded"
            >
              <span className="text-white text-tiny">Login</span>
            </a>
            <Hyperlink
              text="Contact sales"
              variant="primary"
              externalUrl="https://calendly.com/dojah/dojah-sales"
            />
          </div>
        </div>

        <div
          className={` ${
            isOpen ? 'block' : 'hidden'
          } min-h-screen bg-white max-w-[1195px] mx-auto px-4 pt-8`}
        >
          <div className="flex flex-col gap-6">
            <Link href="/">
              <>
                <a
                  onClick={() => setProductsMenu(prev => !prev)}
                  className="cursor-pointer flex items-center justify-between transition-all duration-300"
                >
                  <span className="text-base text-secondary">Products</span>
                  <Image
                    alt=""
                    src={productsMenu ? minusIc : addIc}
                    width={24}
                    height={24}
                    className={`transition-all duration-300 ${
                      productsMenu ? 'rotate-180' : ''
                    }`}
                  />
                </a>
                {productsMenu ? <Products /> : null}
              </>
            </Link>
            <Link href="/">
              <>
                <a
                  onClick={() => setUseCasesMenu(prev => !prev)}
                  className="cursor-pointer flex items-center justify-between transition-all duration-300"
                >
                  <span className="text-base text-secondary">Use cases</span>
                  <Image
                    alt=""
                    src={useCasesMenu ? minusIc : addIc}
                    width={24}
                    height={24}
                    className={`transition-all duration-300 ${
                      useCasesMenu ? 'rotate-180' : ''
                    }`}
                  />
                </a>

                {useCasesMenu ? <UseCases /> : null}
              </>
            </Link>
            <Link href="/">
              <>
                <a
                  onClick={() => setDevelopersMenu(prev => !prev)}
                  className="cursor-pointer flex items-center justify-between transition-all duration-300"
                >
                  <span className="text-base text-secondary">Developers</span>
                  <Image
                    alt=""
                    src={developersMenu ? minusIc : addIc}
                    width={24}
                    height={24}
                    className={`transition-all duration-300 ${
                      developersMenu ? 'rotate-180' : ''
                    }`}
                  />
                </a>
                {developersMenu ? <Developers /> : null}
              </>
            </Link>
            <Link href="/">
              <>
                <a
                  onClick={() => setCompanyMenu(prev => !prev)}
                  className="cursor-pointer flex items-center justify-between transition-all duration-300"
                >
                  <span className="text-base text-secondary">Company</span>
                  <Image
                    alt=""
                    src={companyMenu ? minusIc : addIc}
                    width={24}
                    height={24}
                    className={`transition-all duration-300 ${
                      companyMenu ? 'rotate-180' : ''
                    }`}
                  />
                </a>
                {companyMenu ? <Company /> : null}
              </>
            </Link>
          </div>

          <div className="mt-8 py-6 flex gap-4">
            <a
              href={signinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-primary rounded pb-3 pt-4 px-4"
            >
              <span className="text-tiny text-primary">Login</span>
              <Image alt="" src={rightArrowBlue} width={16} height={16} />
            </a>
            <Hyperlink
              text="Contact sales"
              variant="primary"
              externalUrl="https://calendly.com/dojah/dojah-sales"
            />
          </div>
        </div>
      </nav>

      <main>{children}</main>

      <footer className="bg-secondary">
        <GetStarted />
        <div className="max-w-[1195px] px-4 mx-auto">
          <div className="border-t-[0.5px] border-primary max-w-[1195px] mx-auto" />
          <div className="flex flex-col pt-14 md:pt-30">
            <div className="flex flex-wrap gap-14 sm:gap-10 lg:gap-8 lg:justify-between">
              <div className="md:max-w-[304px]">
                <Image src={logo} alt="Dojah logo" width={67} height={30} />
                <p className="leading-6 mt-7 text-secondary-100 text-tiny">
                  Dojah is focused on enabling confidence and credibility across
                  digital businessses. Our suite of API and no-code tools make
                  it easy to securely access the identities of customers.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-3 lg:gap-8 xl:gap-24">
                <div>
                  <p className="font-medium text-primary-100">Products</p>
                  <div className="flex flex-col gap-4 mt-6 text-sm whitespace-nowrap md:text-tiny text-primary-300">
                    <Link href="/all-products/government-id-verification">
                      <a className="transition-all hover:text-white">
                        Gov ID Verification
                      </a>
                    </Link>
                    <Link href="/all-products/document-verification">
                      <a className="transition-all hover:text-white">
                        Document Verification
                      </a>
                    </Link>
                    <Link href="/">
                      <a className="transition-all hover:text-white">
                        Biometric Verification
                      </a>
                    </Link>
                    <Link href="/all-products/address-verification">
                      <a className="transition-all hover:text-white">
                        Address Verification
                      </a>
                    </Link>
                    <Link href="/all-products/bank-account-verification">
                      <a className="transition-all hover:text-white">
                        Bank Account Verification
                      </a>
                    </Link>
                    <Link href="/">
                      <a className="transition-all hover:text-white">
                        Financial Connections
                      </a>
                    </Link>
                    <Link href="/all-products/ip-device-check">
                      <a className="transition-all hover:text-white">
                        IP & Device Check
                      </a>
                    </Link>
                    <Link href="/all-products/email-check">
                      <a className="transition-all hover:text-white">
                        Email Check
                      </a>
                    </Link>
                    <Link href="/all-products/phone-number-check">
                      <a className="transition-all hover:text-white">
                        Phone Number Check
                      </a>
                    </Link>
                    <Link href="/">
                      <a className="transition-all hover:text-white">
                        Liveness Check
                      </a>
                    </Link>
                    <Link href="/">
                      <a className="transition-all hover:text-white">
                        AML Check
                      </a>
                    </Link>
                    <Link href="/">
                      <a className="transition-all hover:text-white">
                        Financial Data Widget
                      </a>
                    </Link>
                    <Link href="/">
                      <a className="transition-all hover:text-white">
                        Identity Verification Widget
                      </a>
                    </Link>
                    <Link href="/all-products/easy-lookup">
                      <a className="transition-all hover:text-white">
                        Easy Lookup
                      </a>
                    </Link>
                    <Link href="/all-products/easy-connect">
                      <a className="transition-all hover:text-white">
                        Easy Connect
                      </a>
                    </Link>
                    <Link href="/all-products/easy-onboard">
                      <a className="transition-all hover:text-white">
                        Easy Onboard
                      </a>
                    </Link>
                  </div>
                </div>
                <div>
                  <p className="font-medium text-primary-100">Use cases</p>
                  <div className="flex flex-col gap-4 mt-6 text-sm whitespace-nowrap md:text-tiny text-primary-300">
                    <Link href="/financial-services">
                      <a className="transition-all hover:text-white">
                        Financial Services
                      </a>
                    </Link>
                    <Link href="/logistics">
                      <a className="transition-all hover:text-white">
                        Logistics
                      </a>
                    </Link>
                    <Link href="/retail-and-ecommerce">
                      <a className="transition-all hover:text-white">
                        Retail & eCommerce
                      </a>
                    </Link>
                    <Link href="/">
                      <a className="transition-all hover:text-white">
                        Fraud Detection
                      </a>
                    </Link>
                    <Link href="/">
                      <a className="transition-all hover:text-white">
                        Business Verification
                      </a>
                    </Link>
                    <Link href="/">
                      <a className="transition-all hover:text-white">
                        Authentication
                      </a>
                    </Link>
                    <Link href="/">
                      <a className="transition-all hover:text-white">
                        Geolocation
                      </a>
                    </Link>
                    <Link href="/">
                      <a className="transition-all hover:text-white">
                        Onboarding & Verification
                      </a>
                    </Link>

                    <div className="flex flex-col gap-4 mt-6 text-sm whitespace-nowrap md:text-tiny text-primary-300">
                      <p className="text-base font-medium leading-6 text-primary-100">
                        Developers
                      </p>
                      <a
                        href="https://docs.dojah.io/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-all hover:text-white"
                      >
                        Documentation
                      </a>
                      <Link href="/">
                        <a className="transition-all hover:text-white">
                          API References
                        </a>
                      </Link>
                      <Link href="/">
                        <a className="transition-all hover:text-white">
                          Status
                        </a>
                      </Link>
                      <Link href="/">
                        <a className="transition-all hover:text-white">FAQs</a>
                      </Link>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="font-medium text-primary-100">Company</p>
                  <div className="flex flex-col gap-4 mt-6 text-sm whitespace-nowrap md:text-tiny text-primary-300">
                    <Link href="/about-us">
                      <a className="transition-all hover:text-white">
                        About Us
                      </a>
                    </Link>
                    <Link href="/pricing">
                      <a className="transition-all hover:text-white">Pricing</a>
                    </Link>
                    <Link href="/contact-sales">
                      <a className="transition-all hover:text-white">
                        Contact Sales
                      </a>
                    </Link>
                    <Link href="/careers">
                      <a className="transition-all hover:text-white">Careers</a>
                    </Link>
                    <Link href="/terms-of-service">
                      <a className="transition-all hover:text-white">
                        Terms of Service
                      </a>
                    </Link>
                    <Link href="/privacy-policy">
                      <a className="transition-all hover:text-white">
                        Privacy Policy
                      </a>
                    </Link>
                    <Link href="/brand-kit">
                      <a className="transition-all hover:text-white">
                        Brand Kit
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-4 items-center justify-between mt-10 border-t-[0.5px] border-primary py-10">
              <p className="text-sm text-secondary-400">
                ©{new Date().getFullYear()} Dojah. All rights reserved
              </p>
              <div className="flex items-center gap-4">
                <a href="">
                  <Image
                    src={twitter}
                    alt="twitter icon"
                    width={20}
                    height={20}
                  />
                </a>
                <a href="">
                  <Image src={slack} alt="slack icon" width={20} height={20} />
                </a>
                <a href="">
                  <Image
                    src={youtube}
                    alt="youtube icon"
                    width={20}
                    height={20}
                  />
                </a>
                <a href="">
                  <Image
                    src={linkedin}
                    alt="linkedin icon"
                    width={20}
                    height={20}
                  />
                </a>
                <a href="">
                  <Image
                    src={facebook}
                    alt="facebook icon"
                    width={20}
                    height={20}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
