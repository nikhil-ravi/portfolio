import { allDocs } from "contentlayer/generated";
import { notFound } from "next/navigation";

export async function getAllDocs() {
  const docs = allDocs;

  return docs.sort((a, b) => a.order - b.order);
}

export async function getDocsInProject(project) {
  const docs = allDocs.filter((doc) => doc.projectAsParams === project);

  if (!docs) notFound();
  return docs.sort((a, b) => a.order - b.order);
}

export async function getDocsInSection(project, section) {
  const docs = allDocs.filter(
    (doc) => doc.projectAsParams === project && doc.sectionAsParams === section
  );

  if (!docs) notFound();
  return docs.sort((a, b) => a.order - b.order);
}

export async function getDoc(project, section, slug) {
  const doc = allDocs.find(
    (doc) =>
      doc.projectAsParams === project &&
      doc.sectionAsParams === section &&
      doc.slugAsParams === slug
  );

  if (!doc) notFound();
  return doc;
}
