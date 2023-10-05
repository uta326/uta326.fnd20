import NextAuth from 'next-auth';
import GoogleProvider from "next-auth/providers/google";
//本当はバックエンドで保有している認証情報を照合した方が良い
const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);