import BlogLayout from "@/layout/BlogLayout";
import { getAllDocs, getDocFromSlug } from "@/lib/fetchArticles";
import Mdx from "@/components/Mdx";

const Article = async ({ params: { slug } }) => {
  const doc = await getDocFromSlug(slug);
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
};

export async function generateStaticParams() {
  const docs = await getAllDocs();
  return docs.map((doc) => {
    slug: doc.slugAsParams;
  });
}

export default Article;
