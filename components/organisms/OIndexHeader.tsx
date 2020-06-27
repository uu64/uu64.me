import React from "react";
import blog from "@/data/blog";

const OGlobalHeader: React.FC = () => {
  return (
    <div className="text-center py-8">
      <div className="py-4">
        <h1>{blog.title}</h1>
      </div>
      <p className="text-sm">{blog.description}</p>
    </div>
  );
};

export default OGlobalHeader;
