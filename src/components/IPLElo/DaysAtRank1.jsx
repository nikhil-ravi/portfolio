"use client";

import { theme } from "@/content/IPLElo/nivoTheme";
import { ResponsivePie } from "@nivo/pie";
import useSWR from "swr";
import fetcher from "@/lib/fetcher";

const DaysAtRank1 = () => {
  const { data } = useSWR("/api/ipl-elo?type=days-at-rank-1", fetcher);
  return (
    <div className="h-[520px]">
      {data && (
        <ResponsivePie
          data={data[0]}
          value={"days"}
          colors={{ datum: "data.color" }}
          margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
          innerRadius={0.5}
          padAngle={0.7}
          cornerRadius={3}
          activeOuterRadiusOffset={8}
          borderWidth={1}
          borderColor={{
            from: "color",
            modifiers: [["darker", 0.2]],
          }}
          // arcLinkLabelsDiagonalLength={100}
          // arcLinkLabelsStraightLength={100}
          arcLinkLabelsSkipAngle={10}
          arcLinkLabelsTextColor="#333333"
          arcLinkLabelsThickness={2}
          arcLinkLabelsColor={{ from: "color" }}
          arcLabelsSkipAngle={10}
          arcLabelsTextColor={{
            from: "color",
            modifiers: [["darker", 2]],
          }}
          theme={theme}
        />
      )}
    </div>
  );
};

export default DaysAtRank1;
