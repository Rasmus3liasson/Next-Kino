import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import React, { createContext, useContext, useState } from "react";

export const accountStateContext = createContext<{
  accountState: boolean;
  setAccountState: React.Dispatch<React.SetStateAction<boolean>>;
}>({
  accountState: false,
  setAccountState: () => {},
});

export default function App({ Component, pageProps }: AppProps) {
  const [userDetails, setUserDetails] = useState(false);

  return (
    <>
      <accountStateContext.Provider
        value={{ accountState: userDetails, setAccountState: setUserDetails }}
      >
        <Header />
        <main>
          <Component {...pageProps} />
        </main>
        <Footer />
      </accountStateContext.Provider>
    </>
  );
}
