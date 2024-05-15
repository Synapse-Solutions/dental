// RadarChart.js
"use client";
import React, { useEffect } from "react";
import ApexCharts from "apexcharts";

const RadarChart = () => {
  useEffect(() => {
    const options = {
      series: [
        {
          name: "Series 1",
          data: [80, 50, 30, 40, 100, 20],
        },
      ],
      chart: {
        height: 250,
        type: "radar",
      },

      yaxis: {
        stepSize: 20,
      },
      xaxis: {
        categories: [
          "Bleeding",
          "Smoking environment",
          "Systemic genetic disorders",
          "Age-related bone loss",
          "Loss of teeth",
          "probing depth >= 5 mm",
        ],
      },
    };

    const chart = new ApexCharts(document.querySelector("#chart"), options);
    chart.render();

    // Clean up on component unmount
    return () => {
      chart.destroy();
    };
  }, []); // Empty dependency array to run effect only once

  return <div id="chart">{/* Chart will be rendered inside this div */}</div>;
};

export default RadarChart;
