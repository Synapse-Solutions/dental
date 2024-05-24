import React from "react";

interface Props {
  clicks: any;
  index: number;
}
export default function DotsupperTeeth(props: Props) {
  return (
    <div>
      {props.clicks.map((click: any, index: number) => {
        {
          if (click.index !== props.index) return null;
        }
        return (
          <GloblalDiv
            key={index}
            top={click.y}
            left={click.x}
            color={click.color}
          />
        );
      })}
    </div>
  );
}

// div for the dots

const GloblalDiv = ({ top, left, color }: any) => (
  <div
    style={{
      top: top,
      left: top < 6 ? left - 13 : left,
      position: "absolute",
      width: "10px",
      height: "10px",
      backgroundColor: color || "#cfb53b",
      borderRadius: "50%",
      transform: "translate(-50%, -50%)",
      pointerEvents: "none",
    }}
  />
);
