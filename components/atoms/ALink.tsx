import React from "react";

interface Props {
  href: string;
  children: React.ReactNode;
  ariaLabel?: string;
}

const ALink: React.FC<Props> = (props: Props) => {
  const { href, children, ariaLabel } = props;
  return (
    <>
      <a
        className="text-custom-frost1 hover:underline"
        href={href}
        rel="noopener noreferrer"
        target="_blank"
        aria-label={ariaLabel}
      >
        {children}
      </a>
    </>
  );
};

export default ALink;
