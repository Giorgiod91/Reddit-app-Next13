import { unstable_getServerSession } from "next-auth";
import { Provider } from "react-redux";
import { RootState, store } from "../store";
import "../styles/globals.css";
import SearchBar from "./SearchBar";

import Navbar from "./Navbar";
import { Providers } from "./providers";
import { SessionProvider } from "next-auth/react";
import Header from "./Header";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session =
  return (
    <html>
      <head />

      <body>
        <Header />

        <Navbar />

        <SearchBar />

        {children}
      </body>
    </html>
  );
}
