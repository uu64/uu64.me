import React from "react";

interface ABlogHeading {
  H1: typeof H1;
  H2: typeof H2;
  H3: typeof H3;
  H4: typeof H4;
  H5: typeof H5;
}

interface Props {
  children: React.ReactNode;
}

const H1: React.FC<Props> = (props: Props) => {
  const { children } = props;
  return <h1 className="pt-8 pb-2 font-semibold">{children}</h1>;
};

const H2: React.FC<Props> = (props: Props) => {
  const { children } = props;
  return <h2 className="pt-8 pb-2 font-semibold">{children}</h2>;
};

const H3: React.FC<Props> = (props: Props) => {
  const { children } = props;
  return <h3 className="pt-4 pb-2 font-semibold">{children}</h3>;
};

const H4: React.FC<Props> = (props: Props) => {
  const { children } = props;
  return <h4 className="pb-2 font-semibold">{children}</h4>;
};

const H5: React.FC<Props> = (props: Props) => {
  const { children } = props;
  return <h5 className="pb-2 font-semibold">{children}</h5>;
};

const ABlogHeading: React.FC<Props> & ABlogHeading = () => null;
ABlogHeading.H1 = H1;
ABlogHeading.H2 = H2;
ABlogHeading.H3 = H3;
ABlogHeading.H4 = H4;
ABlogHeading.H5 = H5;

export default ABlogHeading;
