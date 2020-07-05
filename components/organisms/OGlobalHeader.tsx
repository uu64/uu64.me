import React from "react";
import ALogo from "@/components/atoms/ALogo";
import MMenu from "@/components/molecules/MMenu";

const OGlobalHeader: React.FC = () => {
  return (
    <nav className="bg-custom-normal px-8 py-2 text-custom-white flex flex-grow items-end">
      <div className="flex-grow">
        <ALogo />
      </div>
      <MMenu />
    </nav>
  );
};

export default OGlobalHeader;
