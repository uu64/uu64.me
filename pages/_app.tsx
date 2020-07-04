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
      <div className="app-main bg-custom-light">
        <div className="mx-auto max-w-xl py-8">
          <Component {...pageProps} />
        </div>
      </div>
      <OFooter />
    </>
  );
};

export default MyApp;