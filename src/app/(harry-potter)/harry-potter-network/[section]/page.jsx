import BlogLayout from "@/components/BlogLayout";
import Mdx from "@/components/Mdx";
import { getAllDocs, getDocInSectionBySlug } from "@/lib/fetchArticles";

export default async function Page({ params: { section } }) {
  const doc = await getDocInSectionBySlug(section, section);
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
    </BlogLayout>
  );
}

export async function generateStaticParams() {
  const docs = await getAllDocs();

  return docs.map((doc) => ({
    section: doc.sectionAsParams,
  }));
}
