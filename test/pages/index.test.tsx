import React from "react";
import { render, screen } from "@testing-library/react";
import mdxUtil from "@/lib/mdx-util";
import { IPostItem } from "@/components/organisms/OPostList";
import App from "@/pages/index";

describe("App", () => {
  it("renders without crashing", async () => {
    const posts = await mdxUtil.getPosts();
    render(
      <App
        posts={posts.map(
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
    screen.debug();
  });
});
