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
import useSWR from "swr";
import { jsonBinIoFetcher } from "@/lib/jsonbinio";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

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
  const { data, isLoading, error } = useSWR("elo", jsonBinIoFetcher);

  if (isLoading)
    return (
      <Skeleton className="h-[520px] items-center justify-center m-auto" />
    );
  if (error) return <div className="h-[520px]">{JSON.stringify(error)}</div>;
  if (!data) return <div className="h-[520px]">No data found!</div>;

  return data ? (
    <Line
      datasetIdKey="elo"
      data={data.record}
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
  ) : (
    <> </>
  );
};

export default EloLine;
