"use client";
import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { AgCharts } from "ag-charts-react";
import "ag-charts-enterprise";
import "./style.scss";
import { data } from "./data";
export const ChartExample = () => {
  const [options, setOptions] = useState({
    data,
    series: [
      {
        type: "treemap",
        labelKey: "title"
      }
    ],
    title: {
      text: "UK Government Budget"
    },
    subtitle: {
      text: "2024"
    }
  });

  return <AgCharts options={options} />;
};
