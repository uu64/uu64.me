import React from "react";
import blog from "@/data/blog.json";

const OGlobalHeader: React.FC = () => {
  return (
    <div className="text-center py-8">
      <h1 className="font-semibold text-3xl text-custom-normal">{blog.title}</h1>
      <p className="text-sm">{blog.description}</p>
    </div>
  );
};

export default OGlobalHeader;
