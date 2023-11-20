export const typeURL = {
  "biggest-results": process.env.JNEXT_PUBLIC_SONBIN_BIGGEST_RESULTS,
  elo: process.env.NEXT_PUBLIC_JSONBIN_ELO,
  box: process.env.NEXT_PUBLIC_JSONBIN_BOX,
  rank: process.env.NEXT_PUBLIC_JSONBIN_RANK,
  "days-at-rank-1": process.env.NEXT_PUBLIC_JSONBIN_RANK,
  "season-end-rank": process.env.NEXT_PUBLIC_JSONBIN_RANK,
  "head-to-head": process.env.NEXT_PUBLIC_JSONBIN_HEAD_TO_HEAD,
};

export const JSON_PATHS = {
  "days-at-rank-1": "$..daysAtRank1",
  "season-end-rank": "$..seasonEndRank",
};

export const fetchData = async (type) => {
  const url = `https://api.jsonbin.io/v3/b/${typeURL[type]}`;
  return fetch(url, {
    headers: {
      "X-Master-Key": process.env.NEXT_PUBLIC_JSONBIN_X_MASTER_KEY,
      "X-Access-Key": process.env.NEXT_PUBLIC_JSONBIN_X_ACCESS_KEY,
      // if type in JSON_PATHS: then add X-JSON-Path header
      ...(JSON_PATHS[type] && { "X-JSON-Path": JSON_PATHS[type] }),
    },
  });
};

export const jsonBinIoFetcher = async (type) => {
  try {
    const r = await fetch(`https://api.jsonbin.io/v3/b/${typeURL[type]}`, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "X-Master-Key": process.env.NEXT_PUBLIC_JSONBIN_X_MASTER_KEY,
        "X-Access-Key": process.env.NEXT_PUBLIC_JSONBIN_X_ACCESS_KEY,
        // if type in JSON_PATHS: then add X-JSON-Path header
        ...(JSON_PATHS[type] && { "X-JSON-Path": JSON_PATHS[type] }),
      },
    });
    return await r.json();
  } catch (e) {
    return console.error(e);
  }
};
