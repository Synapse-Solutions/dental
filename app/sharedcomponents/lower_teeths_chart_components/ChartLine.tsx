import React from "react";

const ChartLine = ({ pocketDepthData }: { pocketDepthData: any }) => {
  let array = pocketDepthData.flatMap((item: any) => item.value);
  array = array.map((value: number) => value * -1);
  // array for gaps between points
  const gaps = [
    13, 13, 40, 13, 13, 35, 13, 13, 45, 2, 2, 52, 5, 5, 48, 8, 8, 48, 5, 5, 45,
    8, 8, 50, 8, 8, 45, 5, 5, 50, 8, 8, 45, 6, 6, 50, 5, 5, 40, 15, 15, 35, 13,
    13, 35, 13, 13,
  ];
  const points = array.map((height: any, index: number) => ({
    width: 5,
    height: parseInt(height, 10) * 3,
    gap: gaps[index],
  }));

  // Calculate positions for the points
  const positions: any = [];
  let currentX = 0;
  points.forEach((point: any) => {
    positions.push({ x: currentX, y: point.height });
    currentX += point.width + point.gap;
  });

  // Calculate the total height needed for positioning
  const totalHeight = 120; // Height of the container

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: `${60}px`,
        marginLeft: "120px",
        zIndex: 99,
      }}
    >
      <svg
        width="100%"
        height={`${totalHeight}px`}
        style={{
          position: "absolute",
          bottom: -60,
          left: 0,
          zIndex: 99,
          // backgroundColor: "rgb(0,0,0,0.5)",
        }}
      >
        {positions.map((pos: any, index: number) => {
          if (index === 0) return null;
          const prevPos = positions[index - 1];
          let y1 = prevPos.y + 60;
          let y2 = pos.y + 60;

          return (
            <line
              key={index}
              x1={prevPos.x + points[index - 1].width / 2}
              x2={pos.x + points[index].width / 2}
              y1={prevPos.y > 0 ? totalHeight - y1 : totalHeight - y1}
              y2={pos.y > 0 ? totalHeight - y2 : totalHeight - y2}
              stroke="blue"
              strokeWidth={pos.y ? "1" : "1"}
            />
          );
        })}
      </svg>
      {points.map((point: any, index: number) => {
        return (
          <div
            key={index}
            style={{
              position: "absolute",
              left: `${positions[index].x}px`,
              bottom: point.height > 0 ? 0 : point.height,
              width: `${point.width}px`,
              height: `${Math.abs(point.height)}px`,
              backgroundColor: "red",
            }}
          ></div>
        );
      })}
    </div>
  );
};

export default ChartLine;
