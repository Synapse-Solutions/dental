import React, { useEffect, useRef } from "react";

interface Props {
  pocketDepthData: any;
}

const CharLine = (props: Props) => {
  const chartRef = useRef<HTMLDivElement>(null);

  const addExtraPoints = () => {
    let data = props.pocketDepthData.flatMap((item: any) => item.value);
    // Add one null value after third index

    return data;
  };

  useEffect(() => {
    const drawChart = () => {
      const data = addExtraPoints();

      const svgElement = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "svg"
      );
      const width = chartRef.current?.clientWidth || window.innerWidth;
      const height = 60; // Adjust height as needed

      svgElement.setAttribute("width", `${width}`);
      svgElement.setAttribute("height", `${height}`);

      const maxDataValue = Math.max(...data);
      const xScale = width / (data.length - 1);
      const yScale = height / maxDataValue;

      // Draw X and Y axes
      const xAxis = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "line"
      );
      xAxis.setAttribute("x1", "0");
      xAxis.setAttribute("y1", `${height}`);
      xAxis.setAttribute("x2", `${width}`);
      xAxis.setAttribute("y2", `${height}`);
      xAxis.setAttribute("stroke", "black");
      svgElement.appendChild(xAxis);

      const yAxis = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "line"
      );
      yAxis.setAttribute("x1", "0");
      yAxis.setAttribute("y1", "0");
      yAxis.setAttribute("x2", "0");
      yAxis.setAttribute("y2", `${height}`);
      yAxis.setAttribute("stroke", "black");
      svgElement.appendChild(yAxis);

      // Draw data points and lines
      for (let i = 0; i < data.length; i++) {
        const circle = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "circle"
        );
        let xPosition = i * xScale;
        if (i < 3) {
          xPosition += 10 * i; // Increase x position by 10px for the first three points
          circle.setAttribute("r", "3"); // Set radius for the first three points
        } else {
          xPosition += 20 * (i - 2); // Increase x position by 15px after the first three points
          circle.setAttribute("r", "3"); // Set radius for the rest of the points
        }

        circle.setAttribute("cx", `${xPosition}`);
        circle.setAttribute("cy", `${height - data[i] * yScale}`);
        circle.setAttribute("fill", "blue");
        svgElement.appendChild(circle);

        if (i > 0) {
          const line = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "line"
          );
          line.setAttribute("x1", `${(i - 1) * xScale}`);
          line.setAttribute("y1", `${height - data[i - 1] * yScale}`);
          line.setAttribute("x2", `${i * xScale}`);
          line.setAttribute("y2", `${height - data[i] * yScale}`);
          line.setAttribute("stroke", "red");
          line.setAttribute("stroke-width", "2");
          svgElement.appendChild(line);
        }
      }

      // Append SVG element to chart container
      if (chartRef.current) {
        chartRef.current.innerHTML = "";
        chartRef.current.appendChild(svgElement);
      }
    };

    drawChart();

    // Resize chart on window resize
    const handleResize = () => {
      drawChart();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [props.pocketDepthData]);

  return (
    <div
      ref={chartRef}
      style={{
        width: "95%",
        height: "60px",
        marginLeft: "100px",
        zIndex: 30,
        marginTop: 10,
      }}
    />
  );
};

export default CharLine;
