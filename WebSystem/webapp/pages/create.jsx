import Head from 'next/head';

const Create = () => {
  return (
    <>
      <Head>
        <title>かんそうにゅうりょくページ</title>
        <meta name="impression" content="よんだほんのかんそうをにゅうりょく" />
      </Head>
      <div className="bg-white p-8 rounded-lg shadow-md w-96 h-2/3">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6 mt-2">
          よんだ本のきろく
        </h1>
        <form
          action="https://xxxxxx.form.newt.so/v1/xxxxxx" //　なにかしらのアクション
          method="post"
        >
          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-700 mb-2">
              本のタイトル
            </label>
            <input
              id="title"
              name="title"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="author" className="block text-gray-700 mb-2">
              さくしゃ
            </label>
            <input
              id="author"
              name="author"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="content" className="block text-gray-700 mb-2">
              かんそう
            </label>
            <textarea
              id="content"
              name="content"
              className="w-full p-2 border rounded-md h-40 focus:outline-none focus:ring focus:border-blue-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-pink-200 text-gray-800 rounded-full px-4 py-2 hover:bg-pink-300 py-2 px-4 rounded-md w-full"
          >
            とうろく
          </button>
        </form>
      </div>
    </>
  );
};

export default Create;
