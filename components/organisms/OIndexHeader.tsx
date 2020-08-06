import React from "react";
import siteconfig from "@/siteconfig.json";

const OIndexHeader: React.FC = () => {
  return (
    <div className="py-8">
      <h1 className="font-semibold text-3xl text-custom-normal">
        {siteconfig.pages.blog.title}
      </h1>
      <p className="border-b-2 border-gray-400 py-2 text-sm">
        {siteconfig.pages.blog.description}
      </p>
    </div>
  );
};

export default OIndexHeader;
