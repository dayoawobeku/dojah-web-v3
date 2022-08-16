import Link from 'next/link';

export default function NavItem({
  href = '',
  externalUrl,
  icon,
  text,
  smallText,
}) {
  if (href) {
    return (
      <Link href={href} passHref>
        <a className="flex items-center gap-2 nav-li">
          {icon}
          <div
            className={`${smallText ? '' : '-mb-1'} flex flex-col items-start`}
          >
            <div className="flex items-center gap-1">
              <p className="-mb-1 text-sm font-bold text-secondary-150">
                {text}
              </p>
              <svg
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="arrow"
              >
                <path
                  d="M10.9766 10.3197L6.85158 6.19471L8.02992 5.01638L13.3333 10.3197L8.02992 15.623L6.85158 14.4447L10.9766 10.3197Z"
                  fill="#8F91AA"
                />
              </svg>
            </div>
            <p className="mt-1 text-xs text-secondary-150">{smallText}</p>
          </div>
        </a>
      </Link>
    );
  }
  return (
    <a
      href={externalUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 nav-li"
    >
      {icon}
      <div className={`${smallText ? '' : '-mb-1'} flex flex-col items-start`}>
        <div className="flex items-center gap-1">
          <p className="-mb-1 text-sm font-bold text-secondary-150">{text}</p>
          <svg
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="arrow"
          >
            <path
              d="M10.9766 10.3197L6.85158 6.19471L8.02992 5.01638L13.3333 10.3197L8.02992 15.623L6.85158 14.4447L10.9766 10.3197Z"
              fill="#8F91AA"
            />
          </svg>
        </div>
        <p className="mt-1 text-xs text-secondary-150">{smallText}</p>
      </div>
    </a>
  );
}
