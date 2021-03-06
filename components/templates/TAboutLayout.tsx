import React from "react";
import { MDXProvider } from "@mdx-js/react";
import AList from "@/components/atoms/AList";
import ALink from "@/components/atoms/ALink";
import AImage from "@/components/atoms/AImage";
import AParagraph from "@/components/atoms/AParagraph";
import APostHeading from "@/components/atoms/APostHeading";
import MHead from "@/components/molecules/MHead";
import OAboutHeader from "@/components/organisms/OAboutHeader";
import siteconfig from "@/siteconfig.json";

interface Props {
  frontMatter: FrontMatter;
  children: React.ReactNode;
}

const TAboutLayout: React.FC<Props> = (props: Props) => {
  const { children } = props;
  const state = {
    h1: APostHeading.H1,
    h2: APostHeading.H2,
    h3: APostHeading.H3,
    h4: APostHeading.H4,
    h5: APostHeading.H5,
    p: AParagraph,
    ul: AList.Ul,
    li: AList.Li,
    a: ALink,
    img: AImage,
  };

  return (
    <div className="about-content px-8">
      <MHead
        title={`${siteconfig.pages.about.title} | ${siteconfig.name}`}
        description={siteconfig.pages.about.description}
        pageUrl={`${siteconfig.url}/about`}
        coverImageUrl={`${siteconfig.url}/icon.jpg`}
        pageType="website"
      />
      <MDXProvider components={state}>
        <OAboutHeader />
        {children}
      </MDXProvider>
    </div>
  );
};

export default TAboutLayout;
