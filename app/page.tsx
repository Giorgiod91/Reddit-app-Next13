import { unstable_getServerSession } from "next-auth";

import React from "react";
import { Provider } from "react-redux";
import { store } from "../store";
import RedditVideo from "./ConntentCard";
import { Providers } from "./providers";

async function HomePage() {
  const session = await unstable_getServerSession();
  return (
    <Providers session={session}>
      <main>
        <RedditVideo />
      </main>
    </Providers>
  );
}

export default HomePage;
