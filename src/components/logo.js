import Image from 'next/image';

const LargeLogo = ({ className }) => {
  return (
    <Image
      className={className}
      src="/images/logo.png"
      width={354}
      height={108}
      alt="logo"
    />
  );
};

const SmallLogo = ({ className }) => {
  return (
    <Image
      className={className}
      src="/images/short-logo.png"
      width={190}
      height={190}
      alt="logo"
    />
  );
};

export { LargeLogo, SmallLogo };
