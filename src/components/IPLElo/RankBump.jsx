"use client";

import { ResponsiveBump } from "@nivo/bump";
import { theme } from "@/content/IPLElo/nivoTheme";
import Point from "./Rank/Point";
import useSWR from "swr";
import fetcher from "@/lib/fetcher";
import { teamColors } from "@/content/IPLElo/constants";

const RankBump = () => {
  const { data, isLoading, error } = useSWR(
    "/api/ipl-elo?type=season-end-rank",
    fetcher
  );

  if (isLoading) return "Loading...";
  if (error) return <div>{JSON.stringify(error)}</div>;
  if (!data) return "No data found";

  return (
    <div className="h-[520px]">
      {data && (
        <ResponsiveBump
          data={data}
          colors={({ id }) => teamColors[id]}
          lineWidth={3}
          activeLineWidth={6}
          inactiveLineWidth={3}
          inactiveOpacity={0.15}
          pointSize={8}
          activePointSize={16}
          inactivePointSize={0}
          pointColor={({ serie: { id } }) => teamColors[id]}
          pointComponent={Point}
          axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "Season",
            legendPosition: "middle",
            legendOffset: 32,
          }}
          axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "ELO Ranking",
            legendPosition: "middle",
            legendOffset: -40,
          }}
          margin={{ top: 40, right: 130, bottom: 40, left: 60 }}
          axisRight={null}
          theme={theme}
        />
      )}
    </div>
  );
};

export default RankBump;
