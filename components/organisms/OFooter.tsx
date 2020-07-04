import React from "react";
import blog from "@/data/blog.json";

const OFooter: React.FC = () => {
  return <div className="text-center py-8">{blog.copyright}</div>;
};

export default OFooter;
