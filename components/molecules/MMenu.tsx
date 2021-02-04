import React from "react";
import ANextLink from "@/components/atoms/ANextLink";
import siteconfig from "@/siteconfig.json";

const MMenu: React.FC = () => {
  return (
    <ul>
      <li>
        <ANextLink href="/about">
          <a className="hover:text-custom-frost1">
            {siteconfig.pages.about.title}
          </a>
        </ANextLink>
      </li>
    </ul>
  );
};

export default MMenu;
