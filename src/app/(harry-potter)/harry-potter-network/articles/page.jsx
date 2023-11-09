import { getAllDocs } from "@/lib/fetchArticles";
import Link from "next/link";

export default async function Page() {
  const docs = await getAllDocs();

  return (
    <>
      {docs.map((doc) => (
        <Link key={doc.slugAsParams} href={`articles/${doc.slugAsParams}`}>
          <p>{doc.title}</p>
        </Link>
      ))}
    </>
  );
}
