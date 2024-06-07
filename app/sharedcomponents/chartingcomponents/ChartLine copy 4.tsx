import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

interface Props {
  pocketDepthData: any;
}

const CharLine = (props: Props) => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<any>(null);

  const processData = () => {
    return props.pocketDepthData.flatMap((item: any) => item.value);
  };

  const processedData = processData();

  const data = {
    labels: processedData.map((_, index) => index),
    datasets: [
      {
        label: "Dataset 1",
        data: processedData,
        borderColor: "rgba(255, 99, 132, 1)", // Color for the lines
        backgroundColor: "rgba(255, 99, 132, 0.5)", // Color for the bars
        borderWidth: 1,
        type: "line", // Use 'line' type for this dataset
        tension: 0.4, // Increase tension for smoother lines
        spanGaps: true, // Connect the line across NaN values
        showLine: true,
      },
      {
        label: "Dataset 2",
        data: processedData,
        borderColor: "rgba(54, 162, 235, 1)", // Color for the lines
        backgroundColor: "rgba(54, 162, 235, 0.5)", // Color for the bars
        borderWidth: 2,
        type: "bar", // Use 'bar' type for this dataset
      },
    ],
  };

  useEffect(() => {
    const resizeChart = () => {
      if (chartRef.current) {
        chartRef.current.width =
          chartRef.current.parentElement?.offsetWidth || window.innerWidth;
        chartRef.current.height =
          chartRef.current.parentElement?.offsetHeight || 400;
      }
    };

    resizeChart();

    if (chartRef.current) {
      const ctx: any = chartRef.current.getContext("2d");

      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      chartInstance.current = new Chart(ctx, {
        type: "bar",
        data: data,
        options: {
          plugins: {
            legend: {
              display: false,
            },
            tooltip: {
              enabled: false,
            },
          },
          scales: {
            x: {
              display: false,
              grid: {
                display: false,
              },
            },
            y: {
              display: false,
              grid: {
                display: false,
              },
              beginAtZero: true,
              suggestedMax: 100,
            },
          },
          responsive: true,
          maintainAspectRatio: false,
        },
      });
    }

    window.addEventListener("resize", resizeChart);

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
      window.removeEventListener("resize", resizeChart);
    };
  }, [data]);

  return (
    <div
      style={{
        width: "95%",
        height: "200px",
        marginLeft: "120px",
        zIndex: 30,
      }}
    >
      <canvas
        ref={chartRef}
        style={{
          display: "block",
          width: "90%",
          height: "100%",
        }}
      />
    </div>
  );
};

export default CharLine;
