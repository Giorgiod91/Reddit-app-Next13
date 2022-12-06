"use client";
import React, { useEffect, useState } from "react";

function Navbar() {
  return (
    <div
      className="flex px-10 sm:px-20 text-2xl space-x-10 sm:space-x-20 xl:space-x-44
    overflow-x-scroll whitespace-nowrap justify-between scrollbar-hide mb-5 p-3"
    >
      <a
        href="/Subreddits/Popular"
        className="last:pr-24 pr-l-24 
                cursor-pointer transition duration-100  
                transform hover:scale-125 hover:text-red-300 active:text-red-500"
      >
        POPULAR
      </a>
      <a
        href="/Subreddits/Funny"
        className="last:pr-24 pr-l-24 
                cursor-pointer transition duration-100  
                transform hover:scale-125 hover:text-red-300 active:text-red-500"
      >
        FUNNY
      </a>
      <a
        className="last:pr-24 pr-l-24 
                cursor-pointer transition duration-100  
                transform hover:scale-125 hover:text-red-300 active:text-red-500"
        href="/Subreddits/Gaming"
      >
        GAMING
      </a>
      <a
        className="last:pr-24 pr-l-24 
                cursor-pointer transition duration-100  
                transform hover:scale-125 hover:text-red-300 active:text-red-500"
        href="/Subreddits/News"
      >
        NEWS
      </a>
      <a
        href="/Subreddits/FunnyAnimals"
        className="last:pr-24 pr-l-24 
                cursor-pointer transition duration-100  
                transform hover:scale-125 hover:text-red-300 active:text-red-500"
      >
        FUNNYANIMALS
      </a>
    </div>
  );
}

export default Navbar;
