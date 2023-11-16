import { allDocs } from "contentlayer/generated";
import { notFound } from "next/navigation";

export async function getAllDocs() {
  const docs = allDocs;

  return docs.sort((a, b) => a.order - b.order);
}

export async function getAllDocsInSection(section) {
  const docs = allDocs.filter((doc) => doc.sectionAsParams === section);

  if (!docs) notFound();
  return docs.sort((a, b) => a.order - b.order);
}

export async function getDocInSectionBySlug(section, slug) {
  const doc = allDocs.find(
    (doc) => doc.slugAsParams === slug && doc.sectionAsParams === section
  );

  if (!doc) notFound();
  return doc;
}
