import { useRouter } from "next/router";
import { getAllPostIds, getPostData } from "../../lib/posts";

export default function PostData({ post }) {
  const router = useRouter();

  if (router.isFallback || !post) {
    return <div>Loading...</div>;
  }

  return (
    <div className="space-y-5 w-full">
      <div className="flex justify-center flex-col items-center m-5">
        <h1 className="text-3xl mb-3 font-bold text-gray-800">{post.title}</h1>
        <p className="mb-5 font-bold text-gray-800">{`著者: ${post.author}`}</p>
        <p className="mb-3 text-gray-800 font-normal">{`読み終わった日: ${post.finished_date}`}</p>
        <div className="border w-28"></div>
      </div>
      <div id="content" className="whitespace-pre-wrap text-gray-800 font-medium m-5">
        <p>{post.content}</p>
      </div>
    </div>
  );
}

// 投稿一覧のIDを取得
export async function getStaticPaths() {
  const paths = await getAllPostIds();

  return {
    paths,
    fallback: true,
  };
}

// 投稿詳細のデータを取得
export async function getStaticProps({ params }) {
  const post = await getPostData(params.id);
  return {
    props: {
      post,
    },
    revalidate: 3,
  };
}