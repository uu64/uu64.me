import React from "react";
import renderer from "react-test-renderer";
import mdxUtil from "@/lib/mdx-util";
import { IPostItem } from "@/components/organisms/OPostList";
import App from "@/pages/index";

describe("App", () => {
  it("renders correctly", async () => {
    const posts = await mdxUtil.getPosts();
    const component = renderer.create(
      <App
        // Use the 5 oldest posts
        posts={posts.slice(-5).map(
          (post): IPostItem => {
            return {
              resourceId: post.resourceId,
              date: post.frontMatter.date,
              title: post.frontMatter.title,
            };
          }
        )}
      />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
