import Link from "next/link";
import Code from "./Code";
import CodeSandbox from "./CodeSandbox";
import CodeTitle from "./CodeTitle";
import Codepen from "./Codepen";
import Danger from "./Danger";
import EmbedBlog from "./EmbedBlog";
import Figcaption from "./Figcaption";
import NextAndPreviousButton from "./NextAndPreviousButton";
import Pre from "./Pre";
import Step from "./Step";
import Tip from "./Tip";
import UrlMetaInfo from "./UrlMetaInfo";
import Warning from "./Warning";
import YouTube from "./YouTube";
import Graph from "@/components/HarryPotter/Graph";
import ListOfArticlesInSection from "@/components/HarryPotter/ListOfArticlesInSection";

const MDXComponents = {
  Codepen,
  Figcaption,
  Warning,
  Danger,
  CodeTitle,
  Tip,
  Step,
  CodeSandbox,
  NextAndPreviousButton,
  YouTube,
  EmbedBlog,
  UrlMetaInfo,
  pre: Pre,
  code: Code,
  Graph,
  ListOfArticlesInSection,
  a: ({ href, children }) => <Link href={href}>{children}</Link>,
};

export default MDXComponents;
