import Header from "@/components/Header";
import Footer from "@/components/Footer";

import "@/styles/globals.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
