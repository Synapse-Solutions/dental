"use client";
import React, { useEffect } from "react";
import ApexCharts from "apexcharts";

const LOAChart = () => {
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
    const chart = new ApexCharts(document.querySelector("#LOAChart"), options);
    chart.render();

    return () => {
      chart.destroy();
    };
  }, []);

  return (
    <div>
      <div id="LOAChart"></div>
    </div>
  );
};

export default LOAChart;
