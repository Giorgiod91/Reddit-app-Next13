import Image from "next/image";
import Link from "next/link";
import React from "react";
import LogoutButton from "./LogoutButton";
import { unstable_getServerSession } from "next-auth/next";

async function Header() {
  const session = await unstable_getServerSession();
  type session = {
    user
  if (session)
    return (
      <header className="sticky top-0 z-50 bg-white flex justify-between items-center p-10 shadow-sm">
        <div className="flex space-x-2">
          <a href="/">
            <Image
              className="rounded-full mx-2 object-contain"
              height={10}
              width={50}
              src="https://www.redditinc.com/assets/images/site/reddit-logo.png"
              alt="reddit logo"
            />
          </a>
          <div>
            <p className="text-red-400">Logged in as:</p>
            <p className="font-bold text-lg">{session.user.name}</p>
          </div>
        </div>
        <LogoutButton />
      </header>
    );
  return (
    //Z 50
    <header className="sticky top-0 z-50 bg-white flex justify-center items-center p-10 shadow-sm">
      <div className="flex flex-col items-center space-y-5">
        <div className="flex space-x-2 items-center">
          <Image
            src="https://www.redditinc.com/assets/images/site/reddit-logo.png"
            alt="Logo"
            height={10}
            width={50}
          />
          <p className="text-red-300">Welcome to Reddit</p>
        </div>
        <Link
          href="./auth/signin"
          className="bg-red-400 hover:bg-red-300 text-white font-bold py-2 px-4 rounded"
        >
          Sign In
        </Link>
      </div>
    </header>
  );
}

export default Header;
