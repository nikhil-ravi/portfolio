import { fetchData } from "@/lib/jsonbinio";
import { NextResponse } from "next/server";

export async function GET(request) {
  const type = request.nextUrl.searchParams.get("type");
  const response = await fetchData(type);
  if (response.status === 400) {
    console.log("Invalid Bin Id provided.");
    return NextResponse.json({ error: "Invalid Bin Id provided." });
  } else if (response.status === 401) {
    console.log("You either passed an invalid X-Master-Key or X-Access-Key.");
    return NextResponse.json({
      error: "You either passed an invalid X-Master-Key or X-Access-Key.",
    });
  } else if (response.status === 403) {
    console.log(
      "One of two errors: 1) Bins not associated to any user are now blocked. Contact the admin at https://jsonbin.io/contact for further info. 2) Requests exhausted. Buy additional requests at https://jsonbin.io/pricing"
    );
    return NextResponse.json({
      error:
        "One of two errors: 1) Bins not associated to any user are now blocked. Contact the admin at https://jsonbin.io/contact for further info. 2) Requests exhausted. Buy additional requests at https://jsonbin.io/pricing",
    });
  } else if (response.status === 404) {
    console.log("Bin not found.");
    return NextResponse.json({ error: "Bin not found." });
  }

  const data = await response.json();
  if (type === "season-end-rank" || type === "days-at-rank-1") {
    return NextResponse.json(data.record[0]);
  } else {
    return NextResponse.json(data.record);
  }
}
