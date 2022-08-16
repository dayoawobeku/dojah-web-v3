import NavItem from '../NavItem';
import Documentation from './Documentation';
import ApiReferences from './ApiReferences';
import ApiStatus from './ApiStatus';
import Faqs from './Faqs';

const DEVELOPERS = [
  {
    href: '/',
    text: 'Documentation',
    icon: <Documentation />,
  },
  {href: '/', text: 'Api references', icon: <ApiReferences />},
  {href: '/', text: 'Api status', icon: <ApiStatus />},
  {href: '/', text: 'FAQs', icon: <Faqs />},
];
export default function Developers() {
  return (
    <div className="absolute left-0 z-10 w-full p-20 bg-white cursor-default top-full developers-dropdown-menu">
      <div className="max-w-[1195px] mx-auto px-4">
        <p className="text-xs font-medium uppercase text-start text-secondary-200">
          developers
        </p>
        <div className="grid items-end grid-cols-4 gap-10 mt-6 place-items-start">
          {DEVELOPERS.map(({href, externalUrl, text, icon}) => (
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
