import React from "react";
import { MDXProvider } from "@mdx-js/react";
import AList from "@/components/atoms/AList";
import ALink from "@/components/atoms/ALink";
import AImage from "@/components/atoms/AImage";
import AParagraph from "@/components/atoms/AParagraph";
import APostHeading from "@/components/atoms/APostHeading";
import MHead from "@/components/molecules/MHead";
import OPostHeader from "@/components/organisms/OPostHeader";
import blog from "@/data/blog.json";

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
    ul: AList.Ul,
    li: AList.Li,
    a: ALink,
    img: AImage,
  };

  return (
    <div className="blog-post-content px-8">
      <MHead
        title={`${frontMatter.title} | ${blog.title}`}
        description={frontMatter.description}
        pageUrl={`${blog.url}/${path}`}
        pageType="article"
        coverImage={frontMatter.cover}
      />
      <MDXProvider components={state}>
        <OPostHeader frontMatter={frontMatter} />
        {children}
      </MDXProvider>
    </div>
  );
};

export default TPostsLayout;
