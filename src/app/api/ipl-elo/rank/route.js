import { promises as fd } from "fs";

export async function GET(response) {
  const type = response.nextUrl.searchParams.get("type");
  const file_url = `src/app/api/ipl-elo/rank/${
    type === "days" ? "daysAtRank1" : "season"
  }.json`;
  const file = await fd.readFile(file_url, "utf-8");
  const data = JSON.parse(file);
  if (type === "scatter") {
    const data_ = data.map((datum) => ({
      ...datum,
      data: [
        ...datum.data.map((d) => ({
          ...d,
          x: d.table,
          year: d.x,
        })),
      ],
    }));

    return new Response(JSON.stringify(data_));
  } else if (type === "swarm") {
    const data_ = [].concat
      .apply(
        [],
        data.map((datum) => [
          ...datum.data.map((d) => ({
            id: datum.id + "." + d.x,
            eloRank: d.y,
            tableRank: d.table,
            elo: d.elo,
            year: d.x,
          })),
        ])
      )
      .filter((d) => (d.eloRank !== null) & (d.tableRank !== null));
    return new Response(JSON.stringify(data_));
  }
  return new Response(JSON.stringify(data));
}
