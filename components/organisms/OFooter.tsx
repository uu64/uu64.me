import React from "react";
import siteconfig from "@/siteconfig.json";
import styled from "styled-components";

const Svg = styled.svg`
  margin: -1px;
`;

const OFooter: React.FC = () => {
  return (
    <>
      <Svg
        className="pt-12 fill-night1 stroke-night1"
        version="1.1"
        viewBox="0 0 1228 80.448"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="border-custom-night1"
          d="m0.096151 25.992c182.86-27.18 266.83-25.886 345.19-25.886s433.22 32.243 543.82 45.3c175.4 20.709 338.76-1.2943 338.76-1.2943v36.24h-1227.8z"
        />
      </Svg>
      <div className="bg-custom-night1 text-center pt-4 pb-8">
        {siteconfig.copyright}
      </div>
    </>
  );
};

export default OFooter;
