import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const RadarChart = () => {
  const chartRef = useRef(null);
  let chartInstance = useRef<any>(null);
  const data = {
    labels: ["Label 1", "Label 2", "Label 3", "Label 4", "Label 5"],
    datasets: [
      {
        data: [80, 60, 70, 85, 75], // Example data values
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
        type: "radar",
        data: {
          labels: data.labels,
          datasets: [
            {
              label: "Dataset 1",
              data: data.datasets[0].data,
              backgroundColor: "rgba(255, 99, 132, 0.2)",
              borderColor: "rgba(255, 99, 132, 1)",
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            r: {
              angleLines: {
                display: true,
              },
              suggestedMin: 0,
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

export default RadarChart;
