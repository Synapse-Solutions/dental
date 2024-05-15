"use client";
import React, { useEffect } from "react";
import ApexCharts from "apexcharts";

const ProbingChart = () => {
  const options = {
    chart: {
      height: 250,
      type: "line",
    },
    series: [
      {
        name: "Sales",
        data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
      },
    ],
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
      ],
    },
  };
  useEffect(() => {
    const chart = new ApexCharts(
      document.querySelector("#probing_chart"),
      options
    );
    chart.render();

    return () => {
      chart.destroy();
    };
  }, []);

  return (
    <div>
      <div id="probing_chart"></div>
    </div>
  );
};

export default ProbingChart;
