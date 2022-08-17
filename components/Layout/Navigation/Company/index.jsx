import NavItem from '../NavItem';
import AboutUs from './AboutUs';
import Pricing from './Pricing';
import ContactSales from './ContactSales';
import Careers from './Careers';
import TermsOfService from './TermsOfService';
import PrivacyPolicy from './PrivacyPolicy';
import BrandKit from './BrandKit';

const COMPANY = [
  {
    href: '/about-us',
    text: 'About Us',
    icon: <AboutUs />,
  },
  {href: '/pricing', text: 'Pricing', icon: <Pricing />},
  {href: '/contact-sales', text: 'Contact Sales', icon: <ContactSales />},
  {href: '/careers', text: 'Careers', icon: <Careers />},
  {
    href: '/terms-of-service',
    text: 'Terms of Service',
    icon: <TermsOfService />,
  },
  {href: '/privacy-policy', text: 'Privacy Policy', icon: <PrivacyPolicy />},
  {href: '/brand-kit', text: 'Brand Kit', icon: <BrandKit />},
];
export default function Company({dropdown = false}) {
  return (
    <div
      className={`w-full bg-white cursor-default top-full ${
        dropdown ? 'company-dropdown-menu absolute left-0 z-10 p-20' : ''
      }`}
    >
      <div className={`max-w-[1195px] mx-auto ${dropdown ? 'px-4' : ''}`}>
        <p className="text-xs font-medium uppercase text-start text-secondary-150">
          company
        </p>
        <div
          className={`grid items-end ${
            dropdown ? 'grid-cols-4' : 'grid-cols-1'
          } mt-6 place-items-start gap-x-10 gap-y-6`}
        >
          {COMPANY.map(({href, externalUrl, text, icon}) => (
            <NavItem
              key={text}
              icon={icon}
              text={text}
              href={href}
              externalUrl={externalUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
