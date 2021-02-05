import React from "react";
import MHead from "@/components/molecules/MHead";
import OIndexHeader from "@/components/organisms/OIndexHeader";
import siteconfig from "@/siteconfig.json";

interface Props {
  children: React.ReactNode;
}

const TIndexLayout: React.FC<Props> = (props: Props) => {
  const { children } = props;
  return (
    <div className="blog-index-content px-8">
      <MHead
        title={`${siteconfig.pages.blog.title} | ${siteconfig.name}`}
        description={siteconfig.pages.blog.description}
        pageUrl={siteconfig.url}
        coverImageUrl={`${siteconfig.url}/icon.jpg`}
        pageType="website"
      />
      <OIndexHeader />
      {children}
    </div>
  );
};

export default TIndexLayout;
