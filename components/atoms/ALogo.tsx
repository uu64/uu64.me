import React from "react";
import Link from "next/link";
import blog from "@/data/blog.json";

const ALogo: React.FC = () => {
  return (
    <Link href="/">
      <span className="logo">
        <a>{blog.title}</a>
      </span>
    </Link>
  );
};

export default ALogo;
