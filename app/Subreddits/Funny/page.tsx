"use client";
import Link from "next/link";
import React from "react";
import { store } from "../../../store";
import { Providers } from "../../providers";
import Funny from "./Funny";

function page() {
  return (
    <Providers store={store}>
      <div>
        <Link href="/"></Link>
        <Funny />
      </div>
    </Providers>
  );
}

export default page;
