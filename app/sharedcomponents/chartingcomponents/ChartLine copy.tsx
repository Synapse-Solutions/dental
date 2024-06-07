import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

interface Props {
  pocketDepthData: any;
}

const CharLine = (props: Props) => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<any>(null);

  let addExtraPoints = () => {
    let data = props.pocketDepthData.flatMap((item: any) => item.value);
    // add one null value after third index
    data.splice(2, 5, NaN);

    return data;
  };

  const data = {
    labels: props.pocketDepthData.flatMap((item: any) => item.value),
    datasets: [
      {
        label: "Dataset 1",
        data: addExtraPoints(),
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 2,
        pointRadius: 0, // Hide points
        tension: 0,
        spanGaps: true,
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
        type: "line",
        data: {
          labels: data.labels,
          datasets: data.datasets.map((dataset) => ({
            ...dataset,
            fill: false,
          })),
        },
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
          elements: {
            line: {
              borderWidth: 2,
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
        marginLeft: "100px",
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
