import React from "react";
import siteconfig from "@/siteconfig.json";

const OFooter: React.FC = () => {
  return <div className="text-center py-8">{siteconfig.copyright}</div>;
};

export default OFooter;
