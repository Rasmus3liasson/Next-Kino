import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "@/styles/globals.scss";
import { AppProps } from "next/app";
import React, { createContext, useState } from "react";
import { IUser } from "../../models/user";
import validateAuthToken from "@/util/validateAuthToken";

// Create context
export const accountStateContext = createContext<{
  accountState: IUser | null;
}>({
  accountState: null,
});

function App({
  Component,
  pageProps,
  token,
}: AppProps & { token: IUser | null }) {
  const [accountState, setAccountState] = useState<IUser | null>(token);

  return (
    <>
      <accountStateContext.Provider value={{ accountState }}>
        <Header />
        <main>
          <Component {...pageProps} />
        </main>
        <Footer />
      </accountStateContext.Provider>
    </>
  );
}

App.getInitialProps = async ({ ctx }) => {
  const token = validateAuthToken(ctx.req?.cookies.AuthToken!);
  return {
    token,
  };
};

export default App;
