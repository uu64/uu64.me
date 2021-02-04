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
      <div className="app-main">
        <div className="mx-auto max-w-2xl py-8">
          <Component {...pageProps} />
        </div>
      </div>
      <OFooter />
    </>
  );
};

export default MyApp;
