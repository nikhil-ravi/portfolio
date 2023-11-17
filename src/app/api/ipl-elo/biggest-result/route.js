import { promises as fsPromises } from "fs";

export async function GET(response) {
  const types = ["upsets", "wins"];
  const data = {};

  for (const type of types) {
    const fileUrl = `src/app/api/biggest-result/${type}.json`;
    const fileContent = await fsPromises.readFile(fileUrl, "utf-8");
    data[type] = JSON.parse(fileContent);
  }

  return new Response(JSON.stringify(data));
}
