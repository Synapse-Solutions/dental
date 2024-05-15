import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const RoundCharti = () => {
  const progress = 75; // Example progress value
  const chartRef = useRef(null);
  let chartInstance = useRef<any>(null);

  useEffect(() => {
    if (chartRef.current) {
      const ctx: any = (chartRef.current as HTMLCanvasElement).getContext("2d");

      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      chartInstance.current = new Chart(ctx, {
        type: "doughnut",
        data: {
          labels: ["Progress", "Remaining"],
          datasets: [
            {
              label: "Progress",
              data: [progress, 100 - progress],
              backgroundColor: [
                "rgba(54, 162, 235, 0.8)",
                "rgba(201, 203, 207, 0.8)",
              ],
            },
          ],
        },
        options: {
          responsive: true,
          cutout: "90%", // Adjust this value to control the thickness of the progress circle
          plugins: {
            legend: {
              display: false,
            },
          },
          elements: {
            arc: {
              borderWidth: 0,
            },
          },
        },
      });
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [progress]);

  return <canvas ref={chartRef} />;
};

export default RoundCharti;
