"use client";
import { signOut } from "next-auth/react";

import Link from "next/link";
import React from "react";

function LogoutButton() {
  return (
    <button
      onClick={() => signOut()}
      className="bg-red-400 hover:bg-red-300 text-white font-bold py-2 px-4 rounded"
    >
      Logout
    </button>
  );
}

export default LogoutButton;
