import React from "react";

const ChartLine = ({ pocketDepthData }: { pocketDepthData: any }) => {
  const totalWidth = 400; // total space in pixels
  const points = [
    { width: 10, height: 30, gap: 0 },
    { width: 10, height: 40, gap: 0 },
    { width: 10, height: 50, gap: 20 },
    { width: 10, height: 30, gap: 10 },
    { width: 10, height: 20, gap: 10 },
    { width: 10, height: 40, gap: 10 },
    { width: 10, height: 20, gap: 10 },
    // Add more points with their respective widths, heights, and gaps
  ];

  // Calculate the total occupied space by points and gaps
  const occupiedWidth = points.reduce(
    (acc, point) => acc + point.width + point.gap,
    0
  );

  // Validate if the occupiedWidth does not exceed totalWidth
  if (occupiedWidth > totalWidth) {
    console.error("The total occupied width exceeds the available width.");
    return null;
  }

  // Calculate positions for the points
  const positions: any = [];
  let currentX = 0;
  points.forEach((point) => {
    positions.push({ x: currentX, y: point.height });
    currentX += point.width + point.gap;
  });

  return (
    <div
      style={{
        position: "relative",
        width: `${totalWidth}px`,
        height: "60px",
        border: "1px solid black",
      }}
    >
      <svg
        width="100%"
        height="100%"
        style={{ position: "absolute", top: 0, left: 0 }}
      >
        {positions.map((pos: any, index: number) => {
          if (index === 0) return null;
          const prevPos = positions[index - 1];
          return (
            <line
              key={index}
              x1={prevPos.x + points[index - 1].width / 2}
              y1={60 - prevPos.y}
              x2={pos.x + points[index].width / 2}
              y2={60 - pos.y}
              stroke="black"
              strokeWidth="2"
            />
          );
        })}
      </svg>
      {points.map((point, index) => (
        <div
          key={index}
          style={{
            position: "absolute",
            left: `${positions[index].x}px`,
            bottom: "0",
            width: `${point.width}px`,
            height: `${point.height}px`,
            backgroundColor: "black",
          }}
        ></div>
      ))}
    </div>
  );
};

export default ChartLine;
