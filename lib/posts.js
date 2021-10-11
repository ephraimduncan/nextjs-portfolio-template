import fs from "fs";
import path from "path";
import { remark } from "remark";
import html from "remark-html";
import prism from "remark-prism";
import matter from "gray-matter";

// Get the current Post Directory
const postsDirectory = path.join(process.cwd(), "posts");

// Get the posts sorted by date
export function getSortedPostsData() {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");

    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);

    return {
      id,
      ...matterResult.data,
    };
  });

  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

// Get all the post ids
export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

// Get each and every post data
export async function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { content: markdown, data } = matter(fileContents);

  const processedContent = await remark()
    .use(html, { sanitize: false }) // remark-prism was not working with remark-html v13.0.2+
    .use(prism)
    .process(markdown);

  const contentHtml = processedContent.toString();

  return {
    id,
    contentHtml,
    ...data,
  };
}
