"use client";
import { Provider} from "react-redux";
import { store } from "../store";
import {SessionProvider} from "next-auth/react";
export function Providers({ session, children }: any) {
  return (
    <SessionProvider session={session}>
    <Provider store={store}>
      {children}
    </Provider>
     </SessionProvider>
  );
}
//this file is to wrap the app with the redux store this is the next 13 approach
