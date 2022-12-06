import { unstable_getServerSession } from "next-auth";
import { Provider } from "react-redux";
import { RootState, store } from "../store";
import "../styles/globals.css";
import SearchBar from "./SearchBar";
import Header from "./Header";
import Navbar from "./Navbar";
import { Providers } from "./providers";
import { SessionProvider } from "next-auth/react";

type AppProps = {
  Component: React.ComponentType;
  pageProps: any;
};
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  return (
    <html>
      <head />

      <body>
        <Header props{} />

        <Navbar />
        
        <SearchBar />
        
        

        {children}
      </body>
    </html>
  );
}

 