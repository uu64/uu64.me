interface FrontMatter {
  title: string;
  date: string;
  description: string;
}

// See: https://github.com/jescalan/babel-plugin-import-glob-array
interface ImportMeta {
  absolutePath: string;
  importedPath: string;
}

declare module "*.mdx" {
  export const frontMatter: FrontMatter[];
  export const _importMeta: ImportMeta[];

  // See: https://mdxjs.com/advanced/typescript#typescript
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let MDXComponent: (props: any) => JSX.Element;
  export default MDXComponent;
}
