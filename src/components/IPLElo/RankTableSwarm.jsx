"use client";

import { ResponsiveSwarmPlot } from "@nivo/swarmplot";
import Tooltip from "./Rank/SwarmTooltip";
import { teamColors } from "@/content/IPLElo/constants";
import useSWR from "swr";
import { jsonBinIoFetcher } from "@/lib/jsonbinio";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const RankTableSwarm = () => {
  const { data, isLoading, error } = useSWR(
    "season-end-rank",
    jsonBinIoFetcher
  );

  if (isLoading) return <Skeleton className="h-[520px] " />;
  if (error) return <div className="h-[520px]">{JSON.stringify(error)}</div>;
  if (!data) return <div className="h-[520px]">No data found!</div>;

  const data_ = [].concat
    .apply(
      [],
      data.record[0].map((datum) => [
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
  const groups = [...new Set(data_.map((d) => d.eloRank))].sort(
    (a, b) => a - b
  );

  return (
    <div className="h-[520px]">
      {data && (
        <ResponsiveSwarmPlot
          data={data_}
          groups={groups}
          groupBy="eloRank"
          identity="id"
          value="tableRank"
          valueFormat="$.0f"
          valueScale={{ type: "linear", min: 1, max: 10, reverse: true }}
          size={{
            key: "elo",
            values: [1440, 1530],
            sizes: [5, 10],
          }}
          forceStrength={4}
          simulationIterations={200}
          colorBy="group"
          colors={({ id }) => {
            return teamColors[id.split(".")[0]];
          }}
          borderColor={{
            from: "color",
            modifiers: [
              ["darker", 0.6],
              ["opacity", 0.5],
            ],
          }}
          margin={{ top: 80, right: 100, bottom: 80, left: 100 }}
          axisBottom={{
            orient: "bottom",
            tickSize: 10,
            tickPadding: 5,
            tickRotation: 0,
            legend: "Elo Rank",
            legendPosition: "middle",
            legendOffset: 46,
          }}
          axisLeft={{
            orient: "left",
            tickSize: 10,
            tickPadding: 5,
            tickRotation: 0,
            legend: "League Rank",
            legendPosition: "middle",
            legendOffset: -76,
          }}
          tooltip={Tooltip}
        />
      )}
    </div>
  );
};

export default RankTableSwarm;
