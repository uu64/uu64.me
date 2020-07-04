import React from "react";
import blog from "@/data/blog.json";

const OGlobalHeader: React.FC = () => {
  return (
    <div className="py-8">
      <h1 className="font-semibold text-3xl text-custom-normal">
        {blog.title}
      </h1>
      <p className="border-b-2 border-gray-400 py-2 text-sm">
        {blog.description}
      </p>
    </div>
  );
};

export default OGlobalHeader;
