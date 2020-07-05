import React from "react";
import ANextLink from "@/components/atoms/ANextLink";
import blog from "@/data/blog.json";

const MMenu: React.FC = () => {
  return (
    <ul>
      <li>
        <ANextLink href="/about">
          <a>{blog.pages.about.title}</a>
        </ANextLink>
      </li>
    </ul>
  );
};

export default MMenu;
