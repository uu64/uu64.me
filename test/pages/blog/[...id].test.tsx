import React from "react";
import renderer from "react-test-renderer";
import TPostsLayout from "@/components/templates/TPostsLayout";
import MDX, { frontMatter as fms } from "@/posts/test/sample.mdx";

describe("App", () => {
  it("renders correctly", async () => {
    const frontMatter: FrontMatter = Array.isArray(fms) ? fms[0] : fms;
    const component = renderer.create(
      <TPostsLayout frontMatter={frontMatter} path="/blog/test/sample">
        <MDX />
      </TPostsLayout>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
