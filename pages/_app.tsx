import React from "react";
import OGlobalHeader from "@/components/organisms/OGlobalHeader";
import OFooter from "@/components/organisms/OFooter";
import { AppProps } from "next/app";
import "./main.css";
import "./tailwind.css";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <OGlobalHeader />
      <Component {...pageProps} />
      <OFooter />
    </>
  );
};

export default MyApp;