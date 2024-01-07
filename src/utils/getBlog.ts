import fs from "fs";

const CONTENT_PATH = "content";
const BLOG_PATH = `${CONTENT_PATH}/blog`;

interface PostInfos {
  title: string;
  banner: string;
  icon: string;
}

export function getPost(id: string): { infos: PostInfos; content: string } {
  const content = fs.readFileSync(`${BLOG_PATH}/${id}/post.md`, {
    encoding: "utf8",
  });
  const infosBuffer = fs.readFileSync(`${BLOG_PATH}/${id}/infos.json`, {
    encoding: "utf8",
  });
  const infos: PostInfos = JSON.parse(infosBuffer);

  return {
    infos,
    content,
  };
}

export function getPinnedPosts() {
  const infosBuffer = fs.readFileSync(`${CONTENT_PATH}/pinned.json`, {encoding: "utf8"});
  const infos: string[] = JSON.parse(infosBuffer);

  return infos.map((id) => getPost(id))
}
