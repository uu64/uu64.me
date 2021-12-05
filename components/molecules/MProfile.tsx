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
        データエンジニアをやっています。データ基盤の管理やデータ活用に関するアプリケーション開発をやってます。
        <br />
        <br />
        主な技術スタック： JavaScript, TypeScript, React, Golang, Amazon Web Services, Google Cloud Platform, Git, Linux
      </p>
    </>
  );
};

export default MProfile;
