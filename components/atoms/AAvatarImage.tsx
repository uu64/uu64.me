import React from "react";

interface Props {
  src: string;
  alt: string;
  width: number;
}

const AAvatarImage: React.FC<Props> = (props: Props) => {
  const { src, alt, width } = props;
  const style = {
    width,
    height: width,
  }
  return (
    <>
      <img className="rounded-full p-4" style={style} src={src} alt={alt} />
    </>
  );
};

export default AAvatarImage;
