"use client";
import React, { useEffect } from "react";
import ApexCharts from "apexcharts";

const RoundCharti = () => {
  const options = {
    chart: {
      height: 150,
      type: "radialBar",
    },
    series: [70],
    labels: ["Progress"],
    plotOptions: {
      radialBar: {
        hollow: {
          margin: 15,
          size: "70%",
        },

        dataLabels: {
          name: {
            show: false,
            color: "#888",
            fontSize: "13px",
          },
          value: {
            color: "#111",
            fontSize: "15px",
            show: true,
          },
        },
      },
    },
  };
  useEffect(() => {
    const chart = new ApexCharts(
      document.querySelector("#chart_round_i"),
      options
    );
    chart.render();

    // Clean up on component unmount
    return () => {
      chart.destroy();
    };
  }, []); // Empty dependency array to run effect only once
  return <div id="chart_round_i" className=""></div>;
};

export default RoundCharti;
