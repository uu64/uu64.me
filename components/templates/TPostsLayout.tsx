import React from "react";
import { MDXProvider } from "@mdx-js/react";
import AList from "@/components/atoms/AList";
import ALink from "@/components/atoms/ALink";
import AImage from "@/components/atoms/AImage";
import AParagraph from "@/components/atoms/AParagraph";
import ABlockquote from "@/components/atoms/ABlockquote";
import APostHeading from "@/components/atoms/APostHeading";
import AInlineCode from "@/components/atoms/AInlineCode";
import MHead from "@/components/molecules/MHead";
import MCodeBlock from "@/components/molecules/MCodeBlock";
import OPostHeader from "@/components/organisms/OPostHeader";
import siteconfig from "@/siteconfig.json";

interface Props {
  frontMatter: FrontMatter;
  path: string;
  children: React.ReactNode;
}

const TPostsLayout: React.FC<Props> = (props: Props) => {
  const { children, frontMatter, path } = props;
  const state = {
    h1: APostHeading.H1,
    h2: APostHeading.H2,
    h3: APostHeading.H3,
    h4: APostHeading.H4,
    h5: APostHeading.H5,
    p: AParagraph,
    blockquote: ABlockquote,
    ul: AList.Ul,
    li: AList.Li,
    a: ALink,
    img: AImage,
    inlineCode: AInlineCode,
    code: MCodeBlock,
  };

  return (
    <div className="blog-post-content px-8">
      <MHead
        title={`${frontMatter.title} | ${siteconfig.name}`}
        description={frontMatter.description}
        pageUrl={`${siteconfig.url}${path}`}
        coverImageUrl={`${siteconfig.url}${frontMatter.cover}`}
        pageType="article"
      />
      <MDXProvider components={state}>
        <OPostHeader frontMatter={frontMatter} />
        {children}
      </MDXProvider>
    </div>
  );
};

export default TPostsLayout;
