const typeURL = {
  "biggest-results": process.env.JSONBIN_BIGGEST_RESULTS,
  elo: process.env.JSONBIN_ELO,
  box: process.env.JSONBIN_BOX,
  rank: process.env.JSONBIN_RANK,
  "days-at-rank-1": process.env.JSONBIN_RANK,
  "season-end-rank": process.env.JSONBIN_RANK,
  "head-to-head": process.env.JSONBIN_HEAD_TO_HEAD,
};

const JSON_PATHS = {
  "days-at-rank-1": "$..daysAtRank1",
  "season-end-rank": "$..seasonEndRank",
};

export const fetchData = async (type) => {
  const url = `https://api.jsonbin.io/v3/b/${typeURL[type]}`;
  return fetch(url, {
    headers: {
      "X-Master-Key": process.env.JSONBIN_X_MASTER_KEY,
      "X-Access-Key": process.env.JSONBIN_X_ACCESS_KEY,
      // if type in JSON_PATHS: then add X-JSON-Path header
      ...(JSON_PATHS[type] && { "X-JSON-Path": JSON_PATHS[type] }),
    },
  });
};
