import React from "react";
import ALogo from "@/components/atoms/ALogo";
import MMenu from "@/components/molecules/MMenu";

const OGlobalHeader: React.FC = () => {
  return (
    <nav>
      <div className="max-w-2xl px-8 py-4 flex items-end mx-auto">
        <div className="flex-grow">
          <ALogo />
        </div>
        <MMenu />
      </div>
    </nav>
  );
};

export default OGlobalHeader;
