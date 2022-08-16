import Link from 'next/link';
import Image from 'next/image';
import {
  rightArrowBlue,
  rightArrowDisabled,
  rightArrowWhite,
} from '../assets/images/images';

export default function Hyperlink({
  centerAlign = false,
  arrow,
  src = rightArrowWhite,
  variant,
  text,
  href = '',
  externalUrl,
  width = 'w-fit',
}) {
  if (!externalUrl) {
    return (
      <Link href={href}>
        <a
          className={`px-4 pt-[16px] pb-[12px] flex items-start gap-2 outline outline-1 ${
            centerAlign ? 'justify-center' : ''
          } ${width} ${
            variant === 'primary'
              ? 'bg-primary outline-primary'
              : variant === 'secondary'
              ? 'bg-lightBlue outline-lightBlue'
              : variant === 'disabled'
              ? 'bg-[#3F7CDB30] outline-none'
              : ''
          } rounded`}
        >
          <span
            className={`${
              variant === 'primary'
                ? 'text-white'
                : variant === 'secondary'
                ? 'text-primary'
                : variant === 'disabled'
                ? 'text-[#546089]'
                : ''
            } text-tiny`}
          >
            {text}
          </span>
          {arrow && (
            <Image
              src={
                variant === 'primary'
                  ? rightArrowWhite
                  : variant === 'secondary'
                  ? rightArrowBlue
                  : variant === 'disabled'
                  ? rightArrowDisabled
                  : src
              }
              alt=""
              width={16}
              height={16}
            />
          )}
        </a>
      </Link>
    );
  }
  return (
    <a
      href={externalUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`px-4 pt-[16px] pb-[12px] flex items-start gap-2 outline outline-1 ${
        centerAlign ? 'justify-center' : ''
      } ${width} ${
        variant === 'primary'
          ? 'bg-primary outline-primary'
          : variant === 'secondary'
          ? 'bg-lightBlue outline-lightBlue'
          : variant === 'disabled'
          ? 'bg-[#3F7CDB30] outline-none'
          : ''
      } rounded`}
    >
      <span
        className={`${
          variant === 'primary'
            ? 'text-white'
            : variant === 'secondary'
            ? 'text-primary'
            : variant === 'disabled'
            ? 'text-[#546089]'
            : ''
        } text-tiny`}
      >
        {text}
      </span>
      {arrow && (
        <Image
          src={
            variant === 'primary'
              ? rightArrowWhite
              : variant === 'secondary'
              ? rightArrowBlue
              : variant === 'disabled'
              ? rightArrowDisabled
              : src
          }
          alt=""
          width={16}
          height={16}
        />
      )}
    </a>
  );
}
