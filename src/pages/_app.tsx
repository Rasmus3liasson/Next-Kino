import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "@/styles/globals.scss";
import { AppProps } from "next/app";
import React, { createContext, useState } from "react";
import validateAuthToken from "@/util/validateAuthToken";
import { userData } from "../types/userTypes";
import { parse } from "cookie";
import { loginModalContext } from "@/util/loginModalContext";
import { GetServerSideProps, GetServerSidePropsContext } from "next";

export const accountStateContext = createContext<{
  accountState: userData | null;
  setAccountState: React.Dispatch<React.SetStateAction<userData | null>>;
}>({
  accountState: null,
  setAccountState: () => {},
});

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const cookie = parse(context.req?.headers.cookie || "");
  const token = await validateAuthToken(cookie.value);
  if (token) {
    const { name, email, userName } = token;
    return {
      props: {
        user: {
          name,
          email,
          userName,
        },
      },
    };
  }

  // needs this so it dont complain even if the user props is empty
  else {
    return {
      props: {},
    };
  }
};

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

export default App;
