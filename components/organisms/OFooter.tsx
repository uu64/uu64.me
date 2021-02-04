import React from "react";
import siteconfig from "@/siteconfig.json";

const OFooter: React.FC = () => {
  return (
    <div className="bg-custom-night1 text-center py-8">
      {siteconfig.copyright}
    </div>
  );
};

export default OFooter;
