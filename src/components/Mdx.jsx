"use client";

import MDXComponents from "@/components/MDXComponents";
import { useMDXComponent } from "next-contentlayer/hooks";

const Mdx = ({ code }) => {
  const Component = useMDXComponent(code);

  return <Component components={MDXComponents} />;
};

export default Mdx;
