"use client";
import { unstable_getServerSession } from "next-auth";
import { getProviders, useSession } from "next-auth/react";
import React, { useState } from "react";

type Props = {
  //   // to get the return type of something u need to hover over the function
  session: Awaited<ReturnType<typeof unstable_getServerSession>>;
};
function SearchBar({ session }: Props) {
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    window.open(`https://www.reddit.com/r/${input}`, "_blank");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full px-10 space-x-2 border-gray-100 py-5"
      action=""
    >
      <input
        value={input}
        //TODO: add a diabled: if not logged in (!loggedin)

        disabled={!session}
        onChange={(e) => setInput(e.target.value)}
        className="flex-1 w-full focus:outline-none border-gray-300 
        rounded border focus:ring-2 focus:ring_red-500 focus:border-transparent
        px-5 py-3 disabled:opacity-50 disabled:cursor-not-allowed"
        placeholder="Search for a subreddit..."
        type="text"
      />
      <button
        disabled={!input}
        className="bg-red-400 text-white hover:bg-red-300 font-cold py-2 px-4 
        rounded disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Search
      </button>
    </form>
  );
}

export default SearchBar;
