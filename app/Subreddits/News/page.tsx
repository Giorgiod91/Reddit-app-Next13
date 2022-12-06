"use client";
import Link from "next/link";
import React from "react";
import { store } from "../../../store";
import { Providers } from "../../providers";
import News from "./News";

function page() {
  return (
    <Providers store={store}>
      <div>
        <Link href="/"></Link>
        <News />
      </div>
    </Providers>
  );
}

export default page;
