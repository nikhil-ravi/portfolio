import { theme } from "@/content/IPLElo/nivoTheme";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { data } from "@/content/ASOIAF/data/circle-packing";
import { ResponsiveCirclePacking } from "@nivo/circle-packing";

const CirclePacking = () => {
  let pos = {};
  if (!data)
    return (
      <Skeleton className="h-[520px] items-center justify-center m-auto" />
    );
  console.log(pos);
  return (
    <div className="h-[1080px] w-full">
      <ResponsiveCirclePacking
        data={data}
        leavesOnly
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        id="name"
        value="pagerank"
        colors={(node) => {
          pos[node.data.name] = node;
          return node.data.color;
        }}
        padding={4}
        enableLabels={true}
        labelsFilter={(n) => 2 === n.node.depth}
        labelsSkipRadius={10}
        labelTextColor={{
          from: "color",
          modifiers: [["darker", 20]],
        }}
        borderWidth={1}
        borderColor={{
          from: "color",
          modifiers: [["darker", 0.5]],
        }}
        theme={theme}
      />
    </div>
  );
};

export default CirclePacking;
