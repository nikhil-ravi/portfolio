import { allDocs } from "contentlayer/generated";
import { notFound } from "next/navigation";

export async function getAllDocs() {
  const docs = allDocs;

  return docs.sort((a, b) => a.order - b.order);
}

export async function getDocFromSlug(slug) {
  const doc = allDocs.find((doc) => doc.slugAsParams === slug);

  if (!doc) notFound();

  return doc;
}
