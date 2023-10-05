import React from "react";
import { SessionProvider, useSession, signIn, signOut } from "next-auth/react";
import { NextPage } from "next";
import BaseButton from "components/atom/button/BaseButton";
//https://next-auth.js.org/providers/google この情報を参考に

const Login = () => {
  const { data: session } = useSession();

  return (
    <>
      {
        session && (
          <div>
            <h1>ようこそ, {session.user && session.user.email}</h1>
            <BaseButton label="ろぐあうと" onClick={() => signOut()}/>

          </div>
        )
      }
      {
        !session && (
          <div>
            <p>ろぐいんしてないよ</p>
            <BaseButton label="ろぐいん" onClick={() => signIn()}/>

          </div>
        )
      }
    </>
  );
  
};

export default Login;