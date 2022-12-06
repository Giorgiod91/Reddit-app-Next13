"use client";
import Link from "next/link";
import React from "react";
import { store } from "../../../store";
import { Providers } from "../../providers";
import Gaming from "./Gaming";

function page() {
  return (
    <Providers store={store}>
      <div>
        <Link href="/"></Link>
        <Gaming />
      </div>
    </Providers>
  );
}

export default page;
