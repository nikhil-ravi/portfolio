export default async function fetcher(url) {
  return fetch(url)
    .then((r) => r.json())
    .catch((e) => console.error(e));
}
