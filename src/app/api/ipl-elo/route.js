import { fetchData } from "@/lib/jsonbinio";

export const dynamic = "force-dynamic";

export async function GET(res) {
  const type = res.nextUrl.searchParams.get("type");
  const response = await fetchData(type);
  if (response.status === 400) {
    console.log("Invalid Bin Id provided.");
    return new Response(JSON.stringify({ error: "Invalid Bin Id provided." }));
  } else if (response.status === 401) {
    console.log("You either passed an invalid X-Master-Key or X-Access-Key.");
    return new Response(
      JSON.stringify({
        error: "You either passed an invalid X-Master-Key or X-Access-Key.",
      })
    );
  } else if (response.status === 403) {
    console.log(
      "One of two errors: 1) Bins not associated to any user are now blocked. Contact the admin at https://jsonbin.io/contact for further info. 2) Requests exhausted. Buy additional requests at https://jsonbin.io/pricing"
    );
    return new Response(
      JSON.stringify({
        error:
          "One of two errors: 1) Bins not associated to any user are now blocked. Contact the admin at https://jsonbin.io/contact for further info. 2) Requests exhausted. Buy additional requests at https://jsonbin.io/pricing",
      })
    );
  } else if (response.status === 404) {
    console.log("Bin not found.");
    return new Response(JSON.stringify({ error: "Bin not found." }));
  }

  const data = await response.json();

  return new Response(JSON.stringify(data.record));
}
