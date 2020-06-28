// babel-plugin-import-glob-arrayとaliasの併用はできない
import { frontMatter as fms, _importMeta as metadatas } from "../posts/*.mdx";

export interface IPost {
  filepath: string;
  frontMatter: FrontMatter;
}

class MdxUtil {
  private static get posts(): IPost[] {
    const posts: IPost[] = [];

    fms.forEach((fm, index) => {
      posts.push({
        filepath: metadatas[index].absolutePath,
        frontMatter: fm,
      });
    });
    return posts;
  }

  private static sortDescPost(a: IPost, b: IPost): number {
    const pathA = a.filepath;
    const pathB = b.filepath;
    if (pathA > pathB) {
      return -1;
    }
    if (pathA < pathB) {
      return 1;
    }
    return 0;
  }

  static async getPosts(): Promise<IPost[]> {
    return MdxUtil.posts.sort(MdxUtil.sortDescPost);
  }
}

export default MdxUtil;