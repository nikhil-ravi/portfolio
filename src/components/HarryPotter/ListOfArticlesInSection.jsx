import { getAllDocsInSection } from "@/lib/fetchArticles";
import Link from "next/link";

export default async function ListOfArticlesInSection({ section }) {
  const stuff = await getAllDocsInSection(section);
  if (!stuff) return null;
  return (
    <div>
      {stuff.map((doc) => (
        <div key={doc.slug}>
          <Link href={`/data/${doc.slug}`}>{doc.title}</Link>
        </div>
      ))}
    </div>
  );
}
