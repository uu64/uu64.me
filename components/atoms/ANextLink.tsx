import React from "react";
import Link from "next/link";

interface Props {
  as?: string;
  href: string;
  children: React.ReactNode;
}

const ANextLink: React.FC<Props> = (props: Props) => {
  const { as, href, children } = props;
  return (
    <Link href={href} as={as}>
      {children}
    </Link>
  );
};

export default ANextLink;
