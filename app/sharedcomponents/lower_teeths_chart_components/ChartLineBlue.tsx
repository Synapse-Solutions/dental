import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

interface Props {
  recessionData: any;
}

const ChartLineBlue = (props: Props) => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<any>(null);

  const invertedData = props.recessionData.flatMap((item: any) =>
    item.value.map((val: number) => -val)
  );
  const data = {
    labels: props.recessionData.flatMap((item: any) => item.value),
    datasets: [
      {
        label: "Dataset 1",
        data: invertedData,
        borderColor: "green",
        borderWidth: 2,
        pointRadius: 0,
        tension: 0.4,
        // fill: origin,
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
            fill: origin,
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
              suggestedMax: 30,
              suggestedMin: -30,
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
        height: "180px",
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

export default ChartLineBlue;
