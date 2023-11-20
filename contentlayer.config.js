import {
  defineDocumentType,
  defineNestedType,
  makeSource,
} from "contentlayer/source-files";
import readingTime from "reading-time";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeKatex from "rehype-katex";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";

const ReadTimeResults = defineNestedType(() => ({
  name: "ReadTimeResults",
  fields: {
    text: "string",
    time: "number",
    words: "number",
    minutes: "number",
  },
}));

const TableOfContentsType = defineNestedType(() => ({
  name: "TableOfContentsType",
  fields: {
    level: "number",
    id: "string",
    heading: "string",
  },
}));

export function getTableOfContents(markdown) {
  const regXHeader = /#{2,6}.+/g;
  const headingArray = markdown.match(regXHeader)
    ? markdown.match(regXHeader)
    : [];
  const headingCounts = new Map();
  return headingArray?.map((heading) => {
    const cleanHeading = heading.replace(/#{2,6}/, "").trim();
    let suffix = "";

    if (headingCounts.has(cleanHeading)) {
      const count = headingCounts.get(cleanHeading) + 1;
      headingCounts.set(cleanHeading, count);
      suffix = `-${count}`;
    } else {
      headingCounts.set(cleanHeading, 0);
    }
    return {
      level: heading.split("#").length - 1 - 2,
      id: cleanHeading + suffix,
      heading: heading.replace(/#{2,6}/, "").trim(),
    };
  });
}

export const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
export function getFormattedDate(date) {
  return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
}

/** @type {import('contentlayer/source-files').ComputeFields} */
const computedFields = {
  slug: {
    type: "string",
    resolve: (doc) => `/${doc._raw.flattenedPath}`,
  },
  projectAsParams: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath.split("/")[0],
  },
  sectionAsParams: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath.split("/").slice(2)[0],
  },
  slugAsParams: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath.split("/").slice(3).join("/"),
  },
  readingTime: {
    type: "nested",
    of: ReadTimeResults,
    resolve: (doc) => readingTime(doc.body.raw),
  },
  tableOfContents: {
    type: "list",
    of: TableOfContentsType,
    resolve: (doc) => getTableOfContents(doc.body.raw),
  },
  formattedDate: {
    type: "date",
    resolve: (doc) => getFormattedDate(new Date(doc.date)),
  },
};

export const Doc = defineDocumentType(() => ({
  name: "Doc",
  filePathPattern: `***/articles/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    order: {
      type: "number",
      required: true,
    },
    description: {
      type: "string",
      required: true,
    },
    date: {
      type: "date",
      required: true,
    },
    published: {
      type: "boolean",
      default: true,
    },
    keywords: {
      type: "string",
      required: true,
    },
    next: {
      type: "string",
    },
    previous: {
      type: "string",
    },
  },
  computedFields,
}));

const rehypePrettyCodeOptions = {
  theme: "github-dark",
  onVisitLine(node) {
    // Prevent lines from collapsing in `display: grid` mode, and
    // allow empty lines to be copy/pasted
    if (node.children.length === 0) {
      node.children = [{ type: "text", value: " " }];
    }
  },
  // Feel free to add classNames that suit your docs
  onVisitHighlightedLine(node) {
    node.properties.className.push("highlighted");
  },
  onVisitHighlightedWord(node) {
    node.properties.className = ["word"];
  },
};

const rehypeAutolinkHeadingsOptions = {
  properties: {
    className: ["subheading-anchor"],
    ariaLabel: "Link to section",
  },
};

export default makeSource({
  contentDirPath: "src/content",
  documentTypes: [Doc],
  mdx: {
    remarkPlugins: [remarkMath, remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [rehypeKatex, { output: "mathml" }],
      [rehypePrettyCode, rehypePrettyCodeOptions],
      [rehypeAutolinkHeadings, rehypeAutolinkHeadingsOptions],
    ],
  },
});
