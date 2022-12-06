import NextAuth from "next-auth/next";
import RedditProvider from "next-auth/providers/reddit";

export const authOptions = {
    providers: [
        RedditProvider({
            //envirement variables for safety
            clientId: process.env.REDDIT_ID,
            clientSecret: process.env.REDDIT_SECRET,
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET!,
    pages: {
        signIn: "/auth/signin",
    },
};
export default NextAuth(authOptions);