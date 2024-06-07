import React from "react";

interface Props {
  pocketDepthData: { value: string[] }[];
}

const CharLine = (props: Props) => {
  return (
    <div className="w-full ml-[120px] h-[80px] flex items-end bg-yellow-300">
      {props.pocketDepthData.map((item, index) => (
        <div
          style={{
            marginRight: marginRight(index),
          }}
          key={index}
          className="flex mx-1 items-end"
        >
          {item.value.map((heightValue, subIndex) => {
            const height = Number(heightValue) * 2.5;
            console.log(
              `Item ${index}, SubItem ${subIndex}, Height: ${height}px`
            );
            return (
              <div
                key={subIndex}
                style={{
                  width: "15px",
                  height: `${height}px`,
                  backgroundColor: "green",
                  borderTop: "2px solid red",
                  zIndex: 999,
                  marginRight: "0px",
                }}
              ></div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default CharLine;

const marginRight = (index: number) => {
  if (index === 0) {
    return "40px";
  }

  return "20px";
};
