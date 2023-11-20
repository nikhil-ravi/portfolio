"use client";

import { teamColors } from "@/content/IPLElo/constants";
import { theme } from "@/content/IPLElo/nivoTheme";
import { ResponsiveBoxPlot } from "@nivo/boxplot";
import useSWR from "swr";
import { jsonBinIoFetcher } from "@/lib/jsonbinio";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const EloBox = () => {
  const { data, isLoading, error } = useSWR("box", jsonBinIoFetcher);

  if (isLoading)
    return (
      <Skeleton className="h-[520px] items-center justify-center m-auto" />
    );
  if (error) return <div className="h-[520px]">{JSON.stringify(error)}</div>;
  if (!data) return <div className="h-[520px]">No data found!</div>;

  return (
    <div className="h-[520px]">
      <ResponsiveBoxPlot
        data={data.record}
        margin={{ top: 60, right: 140, bottom: 60, left: 60 }}
        colorBy="group"
        colors={({ group }) => teamColors[group]}
        padding={0.12}
        enableGridX={true}
        axisTop={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "",
          legendOffset: 36,
        }}
        axisRight={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "",
          legendOffset: 0,
        }}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Team",
          legendPosition: "middle",
          legendOffset: 32,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Elo",
          legendPosition: "middle",
          legendOffset: -40,
        }}
        borderRadius={2}
        borderWidth={2}
        borderColor={{
          from: "color",
          modifiers: [["darker", 0.3]],
        }}
        medianWidth={4}
        medianColor={{
          from: "color",
          modifiers: [["darker", 0.3]],
        }}
        whiskerWidth={4}
        whiskerEndSize={0.6}
        whiskerColor={{
          from: "color",
          modifiers: [["darker", 0.3]],
        }}
        motionConfig="stiff"
        legends={[
          {
            anchor: "right",
            direction: "column",
            justify: false,
            translateX: 100,
            translateY: 0,
            itemWidth: 60,
            itemHeight: 20,
            itemsSpacing: 3,
            itemTextColor: "#999",
            itemDirection: "left-to-right",
            symbolSize: 20,
            symbolShape: "square",
            effects: [
              {
                on: "hover",
                style: {
                  itemTextColor: "#000",
                },
              },
            ],
          },
        ]}
        theme={theme}
      />
    </div>
  );
};

export default EloBox;
