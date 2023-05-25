import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "@/styles/globals.scss";
import { AppProps } from "next/app";
import React, { createContext, useState } from "react";
import validateAuthToken from "@/util/validateAuthToken";
import { userData } from "@/util/types";
import { NextPageContext } from "next";
import { parse } from "cookie";
import { loginModalContext } from "@/util/loginModalContext";

export const accountStateContext = createContext<{
  accountState: userData | null;
  setAccountState: React.Dispatch<React.SetStateAction<userData | null>>;
}>({
  accountState: null,
  setAccountState: () => {},
});

function App({ Component, pageProps }: AppProps) {
  const [accountState, setAccountState] = useState<userData | null>(null);
  const [loginModalOpen, setLoginModalOpen] = useState(false);

  return (
    <>
      <loginModalContext.Provider value={{ loginModalOpen, setLoginModalOpen }}>
        <accountStateContext.Provider value={{ accountState, setAccountState }}>
          <Header />
          <main>
            <Component {...pageProps} />
          </main>
          <Footer />
        </accountStateContext.Provider>
      </loginModalContext.Provider>
    </>
  );
}

App.getInitialProps = async ({ ctx }: { ctx: NextPageContext }) => {
  const cookie = parse(ctx.req?.headers.cookie || "");
  const token = await validateAuthToken(cookie.value);
  if (token) {
    const { name, email, userName } = token;
    return {
      user: {
        name,
        email,
        userName,
      },
    };
  } else return {};
};

export default App;
