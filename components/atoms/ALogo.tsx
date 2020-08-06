import React from "react";
import Link from "next/link";
import siteconfig from "@/siteconfig.json";

const ALogo: React.FC = () => {
  return (
    <Link href="/">
      <span className="font-logo">
        <a>{siteconfig.name}</a>
      </span>
    </Link>
  );
};

export default ALogo;
