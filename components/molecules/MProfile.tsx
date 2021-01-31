import React from "react";
import AAvatarImage from "@/components/atoms/AAvatarImage";

const MProfile: React.FC = () => {
  return (
     <>
      <div className="flex justify-center">
        <AAvatarImage src="icon.jpg" alt="profile" width={130} />
      </div>
      <p>
        某メーカーでソフトウェアエンジニアをしています。
      </p>
    </>
  );
};

export default MProfile;
