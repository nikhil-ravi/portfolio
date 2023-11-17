import { promises as fd } from "fs";

export const dynamic = "force-dynamic";

export async function GET(response) {
  const type = response.nextUrl.searchParams.get("type");
  const file_url = `src/app/api/ipl-elo/elo/elo${
    type !== null ? `_${type}` : ""
  }.json`;
  const file = await fd.readFile(file_url, "utf-8");
  const data = JSON.parse(file);

  return new Response(JSON.stringify(data));
}
