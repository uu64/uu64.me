// cannnot use babel-plugin-impoprt-glob-array and webpack alias together
import {
  frontMatter as fms,
  _importMeta as metadatas,
} from "../posts/**/*.mdx";

const MDX_FILE_ROOT = "/posts/";
const POST_RESOURCE_ROOT = "/";

export interface IPost {
  resourcePath: string;
  frontMatter: FrontMatter;
}

class MdxUtil {
  private static get posts(): IPost[] {
    const posts: IPost[] = [];

    fms.forEach((fm, index) => {
      const absolutePath = metadatas[index].absolutePath;
      const relativePath = absolutePath.split(MDX_FILE_ROOT).slice(-1)[0];
      posts.push({
        resourcePath: `${POST_RESOURCE_ROOT}${relativePath
          .split(".")
          .slice(0, -1)
          .join(".")}`,
        frontMatter: fm,
      });
    });
    return posts.sort(MdxUtil.sortDescPost);
  }

  private static sortDescPost(a: IPost, b: IPost): number {
    const dateA = a.frontMatter.date;
    const dateB = b.frontMatter.date;
    if (dateA > dateB) {
      return -1;
    }
    if (dateA < dateB) {
      return 1;
    }
    return 0;
  }

  static async getPosts(): Promise<IPost[]> {
    return MdxUtil.posts;
  }

  static async getPostByResourcePath(resourcePath: string): Promise<IPost> {
    const filtered = MdxUtil.posts.filter((post) => {
      return post.resourcePath === resourcePath;
    });
    return filtered[0];
  }
}

export default MdxUtil;
