"use client";
import "ag-charts-enterprise";
import { AgCharts } from "ag-charts-react";
import { useState } from "react";
import { data } from "./data"; // Import your data
import "./style.scss"; // Your styles
import { useRouter } from "next/navigation";

export const ChartExample = () => {
  const router = useRouter(); // Initialize the Next.js router
  const [options, setOptions] = useState({
    data,
    series: [
      {
        type: "treemap",
        labelKey: "title",
        tooltip: {
          enabled: true
        }
        // Optional: Customize colors, labels, etc.
      }
    ]
  });

  // Handle the node click event
  const onNodeClick = (event) => {
    console.log(event.datum.title, "event");
    const queryParam = event.datum.title; // URL-encode the title

    // Navigate to the desired page with a query string
    router.push(`/details?title=${queryParam}`);
  };

  return (
    <AgCharts
      options={{
        series: [
          {
            type: "treemap",
            labelKey: "title",
            tooltip: {
              enabled: true
            },
            listeners: {
              nodeClick: onNodeClick
            }
          }
        ]
        // Add the event listener for node clicks
        // onNodeClick: onNodeClick
      }}
    />
  );
};
