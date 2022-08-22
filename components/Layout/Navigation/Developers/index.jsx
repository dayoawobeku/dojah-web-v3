import NavItem from '../NavItem';
import Documentation from './Documentation';
import ApiReferences from './ApiReferences';
import ApiStatus from './ApiStatus';
import Faqs from './Faqs';

const DEVELOPERS = [
  {
    externalUrl: 'https://api-docs.dojah.io/docs',
    text: 'Documentation',
    icon: <Documentation />,
  },
  {
    externalUrl: 'https://api-docs.dojah.io/reference',
    text: 'API references',
    icon: <ApiReferences />,
  },
  {
    externalUrl: 'https://status.dojah.io',
    text: 'API status',
    icon: <ApiStatus />,
  },
  {externalUrl: 'https://help.dojah.io/en', text: 'FAQs', icon: <Faqs />},
];
export default function Developers({dropdown = false}) {
  return (
    <div
      className={`w-full bg-white cursor-default top-full ${
        dropdown ? 'developers-dropdown-menu absolute left-0 z-10 p-20' : ''
      }`}
    >
      <div className={`max-w-[1195px] mx-auto ${dropdown ? 'px-4' : ''}`}>
        <p className="text-xs font-medium uppercase text-start text-secondary-150">
          developers
        </p>
        <div
          className={` ${
            dropdown ? 'grid-cols-4' : 'grid-cols-1'
          } grid items-end gap-10 mt-6 place-items-start`}
        >
          {DEVELOPERS.map(({externalUrl, text, icon}) => (
            <NavItem
              key={text}
              icon={icon}
              text={text}
              externalUrl={externalUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
