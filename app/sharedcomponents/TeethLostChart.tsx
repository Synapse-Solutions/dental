import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const TeethLostChart = () => {
  const chartRef = useRef(null);
  let chartInstance = useRef<any>(null);
  const data = {
    labels: ["Label 1", "Label 2", "Label 3", "Label 4", "Label 5"],
    datasets: [
      {
        label: "Dataset 1",
        data: [80, 60, 70, 85, 75], // Example data values
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  };

  useEffect(() => {
    if (chartRef.current) {
      const ctx: any = (chartRef.current as HTMLCanvasElement).getContext("2d");

      if (chartInstance.current) {
        // If a chart instance already exists, destroy it before rendering a new one
        chartInstance.current.destroy();
      }

      // Create a new chart instance
      chartInstance.current = new Chart(ctx, {
        type: "line", // Set chart type to 'line'
        data: {
          labels: data.labels,
          datasets: data.datasets.map((dataset) => ({
            ...dataset,
            fill: false, // Ensure line chart doesn't fill area below lines
          })),
        },
        options: {
          scales: {
            y: {
              beginAtZero: true, // Start y-axis at zero
              suggestedMax: 100,
            },
          },
        },
      });
    }

    // Clean up function to destroy the chart instance when component unmounts
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [data]);

  return <canvas ref={chartRef} />;
};

export default TeethLostChart;
