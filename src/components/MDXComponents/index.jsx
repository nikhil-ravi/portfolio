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
import EloLine from "@/components/IPLElo/EloLine";
import RankBump from "@/components/IPLElo/RankBump";
import DaysAtRank1 from "../IPLElo/DaysAtRank1";
import RankTableSwarm from "../IPLElo/RankTableSwarm";
import EloBox from "../IPLElo/EloBox";
import HeadToHead from "../IPLElo/HeadToHead";

import CirclePacking from "../ASOIAF/CirclePacking";

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
  a: ({ href, children }) => <Link href={href}>{children}</Link>,
  // Harry Potter
  Graph,
  ListOfArticlesInSection,

  // IPLElo
  EloLine,
  RankBump,
  DaysAtRank1,
  RankTableSwarm,
  EloBox,
  HeadToHead,

  // ASOIAF
  CirclePacking,
};

export default MDXComponents;
