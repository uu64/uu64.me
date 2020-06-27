import React from "react";
import ALogo from "@/components/atoms/ALogo";

const OGlobalHeader: React.FC = () => {
  return (
    <div className="bg-custom-normal px-8 py-2 text-custom-white flex items-end">
      <ALogo />
    </div>
  );
};

export default OGlobalHeader;
