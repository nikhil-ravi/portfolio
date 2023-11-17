import { promises as fd } from "fs";

export async function GET(response) {
  const file_url = `src/app/api/ipl-elo/head-to-head/head2head.json`;
  const file = await fd.readFile(file_url, "utf-8");
  const data = JSON.parse(file);
  return new Response(JSON.stringify(data));
}
