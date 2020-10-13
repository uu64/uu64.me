import React from "react";
import renderer from "react-test-renderer";
import App from "../../../pages/about/index.mdx";

describe("App", () => {
  it("renders correctly", async () => {
    const component = renderer.create(<App />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
