import BlogLayout from "@/components/BlogLayout";
import Mdx from "@/components/Mdx";
import { getDoc } from "@/lib/fetchArticles";

export const metadata = {
  title: "Nikhil Ravi | IPL ELO",
};

export default async function Page() {
  const doc = await getDoc("IPLElo", "ipl-elo", "");
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
