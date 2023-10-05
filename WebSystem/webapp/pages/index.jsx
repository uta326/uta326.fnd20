import Image from "next/image";
import Head from "next/head";

import Post from "../components/post/post";
import { getAllPostsData } from "../lib/posts";

export default function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>Book Review Management App</title>
      </Head>
      <div className="mb-10 p-3">
        <Image
          className="object-cover rounded"
          src="/top.jpg"
          alt="top"
          width={1280}
          height={500}
        />
      </div>
      <div className="flex justify-center flex-col items-center mb-10">
        <div className="text-lg mb-3 font-semibold text-gray-800">よ ん だ ほ ん</div>
        <div className="border w-28"></div>
      </div>
      <div className="flex flex-wrap -m-4 mb-5 text-gray-800 font-medium">
        {posts && posts.map((post) => <Post key={post.id} post={post}/>)}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const posts = await getAllPostsData();

  return {
    props: { posts },
    revalidate: 3,
  };
}