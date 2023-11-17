import { teamColors } from "@/content/IPLElo/constants";
import { theme } from "@/content/IPLElo/nivoTheme";
import { ResponsiveChord } from "@nivo/chord";
import useSWR from "swr";
import fetcher from "@/lib/fetcher";

const HeadToHead = () => {
  const { data } = useSWR("/api/ipl-elo/head-to-head", fetcher);
  return (
    <div className="h-[520px]">
      {data && (
        <ResponsiveChord
          data={data.data}
          keys={data.index}
          margin={{ top: 60, right: 60, bottom: 90, left: 60 }}
          valueFormat=".2f"
          padAngle={0.02}
          innerRadiusRatio={0.96}
          innerRadiusOffset={0.02}
          inactiveArcOpacity={0.25}
          arcBorderColor={{
            from: "color",
            modifiers: [["darker", 0.6]],
          }}
          activeRibbonOpacity={0.75}
          inactiveRibbonOpacity={0.25}
          ribbonBorderColor={{
            from: "color",
            modifiers: [["darker", 0.6]],
          }}
          labelRotation={-90}
          labelTextColor={{
            from: "color",
            modifiers: [["darker", 1]],
          }}
          colors={({ id }) => {
            return teamColors[id];
          }}
          motionConfig="stiff"
          theme={theme}
        />
      )}
    </div>
  );
};

export default HeadToHead;
