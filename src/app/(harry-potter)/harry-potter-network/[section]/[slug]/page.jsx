import BlogLayout from "@/components/BlogLayout";
import {
  getDoc,
  getDocsInProject,
  getDocsInSection,
} from "@/lib/fetchArticles";
import Mdx from "@/components/Mdx";
import NextAndPreviousButton from "@/components/MDXComponents/NextAndPreviousButton";

const Article = async ({ params: { section, slug } }) => {
  const docs = await getDocsInSection("HarryPotter", section);
  const doc = await getDoc("HarryPotter", section, slug);
  const next = docs.find((d) => d.slugAsParams === doc.next);
  const previous = docs.find((d) => d.slugAsParams === doc.previous);
  const meta = {
    title: doc.title,
    date: doc.date,
    readingTime: doc.readingTime,
    tableOfContents: doc.tableOfContents,
    formattedDate: doc.formattedDate,
  };

  return (
    <BlogLayout meta={meta}>
      <Mdx code={doc.body.code} />
      {/* Navigate to previous and next pages */}
      <NextAndPreviousButton
        prevHref={previous && previous.slugAsParams}
        prevTitle={previous && previous.title}
        nextHref={next && next.slugAsParams}
        nextTitle={next && next.title}
      />
    </BlogLayout>
  );
};

export async function generateStaticParams() {
  const docs = await getDocsInProject("HarryPotter");

  return docs.map((doc) => ({
    section: doc.sectionAsParams,
    slug: doc.slugAsParams,
  }));
}

export default Article;
