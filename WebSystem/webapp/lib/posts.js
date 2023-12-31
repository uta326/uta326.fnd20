import fetch from "node-fetch";

// Django APIサーバーURL
// const SERVERURL = "http://127.0.0.1:8000/";

const SERVERURL = "http://backend:8000/";
const originalName = "backend";
const resolveName = "localhost"


// Image URL変換
function resolveImageURLObject(posts, originalName, resolveName) {
  Object.keys(posts).map(index => {
    const originalImageURL = posts[index].image;
    const resolvedImageURL = originalImageURL.replace(originalName, resolveName);
    posts[index].image = resolvedImageURL;
  })
}

// Image URL変換
function resolveImageURL(post, originalName, resolveName) {
    const originalImageURL = post.image;
    const resolvedImageURL = originalImageURL.replace(originalName, resolveName);
    post.image = resolvedImageURL;
}

// 投稿一覧を取得
export async function getAllPostsData() {
  const res = await fetch(new URL(`${SERVERURL}api/post/`));
  const posts = await res.json();
  
  // 画像用URLとしてコンテナ名をhostnameに変換する
  resolveImageURLObject(posts, originalName, resolveName);

  return posts;
}

// 投稿一覧のIDを取得
export async function getAllPostIds() {
  const res = await fetch(new URL(`${SERVERURL}api/post/`));
  const posts = await res.json();
  return posts.map((post) => {
    return {
      params: {
        id: String(post.id),
      },
    };
  });
}

// 投稿詳細を取得
export async function getPostData(id) {
  const res = await fetch(new URL(`${SERVERURL}api/post/${id}/`));
  const post = await res.json();
  // 画像用URLとしてコンテナ名をhostnameに変換する
  resolveImageURL(post, originalName, resolveName);
  return post;
}