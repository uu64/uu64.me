import React from "react";
import AAvatarImage from "@/components/atoms/AAvatarImage";

const MProfile: React.FC = () => {
  return (
    <>
      <div className="flex justify-center">
        <AAvatarImage src="icon.jpg" alt="profile" width={130} />
      </div>
      <h2 className="text-center font-bold pb-4">uu</h2>
      <p>
        某メーカーのソフトウェアエンジニア。
        <br />
        最近の仕事では AWS CloudFormation を活用した IaC や CI/CD
        パイプラインの実装を担当することが多い。
        <br />
        <br />
        主な技術スタック： JavaScript, Java, Amazon Web Services, Git, Linux
      </p>
    </>
  );
};

export default MProfile;
