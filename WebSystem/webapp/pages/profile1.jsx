import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { UserCard } from "/components/organisms/UserCard";
import BaseButton from "components/atom/button/BaseButton";
//https://next-auth.js.org/providers/google このあたりの情報を参考

const Profile1 = () => {
  const { data: session } = useSession({ required: true });
  const router = useRouter();

  return (
    <>
      {session ? (// Session情報があれば=ログイン状態
        <div className="flex flex-col items-center h-screen">
          <h1 className="text-lg mb-3 text-fuchsia-500">ぷろふぃーる</h1>
          {/* UserCardにセッション情報を渡す */}
          <UserCard user={session.user} />
          <div className="mt-5">
            <BaseButton label="ろぐあうと" onClick={() => signOut()}/>
          </div>
        </div>
      ) : (// Session情報がない=ログインしていない状態
        <div>
          <p>ろぐいんしていないよ</p>
          <BaseButton label="ろぐいん" onClick={() => signIn()}/>
        </div>
      )}
    </>
  );
};

export default Profile1;