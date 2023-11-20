"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  TimeSeriesScale,
  Colors,
} from "chart.js";
import "chartjs-adapter-date-fns";
import { Line } from "react-chartjs-2";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { elo as data } from "@/content/IPLElo/data/elo";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  TimeSeriesScale,
  Colors
);

const EloLine = () => {
  if (!data)
    return (
      <Skeleton className="h-[520px] items-center justify-center m-auto" />
    );
  return (
    <Line
      datasetIdKey="elo"
      data={data}
      options={{
        responsive: true,
        animation: false,
        plugins: {
          legend: {
            position: "right",
            align: "center",
            labels: {
              usePointStyle: true,
            },
          },
        },
        scales: {
          x: {
            title: { display: true, text: "Date" },
            type: "timeseries",
            time: {
              unit: "month",
              min: new Date("2008-01-01").valueOf(),
              max: new Date("2022-12-31").valueOf(),
            },
          },
          y: {
            title: { display: true, text: "Elo" },
          },
        },
        elements: {
          point: {
            radius: 0,
          },
          line: {
            pointRadius: 0,
          },
        },
      }}
    />
  );
};

export default EloLine;
