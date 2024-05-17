import React, { useState } from "react";

interface Props {
  value: any;
  plaqueData: any;
  setPlaqueData: any;
  index: number;
}
const PlaqueInput = (props: Props) => {
  const handleClick = (item: boolean, _index: number) => {
    props.setPlaqueData((prev: any) => {
      const newPlaqueData = [...prev];
      newPlaqueData[props.index].value[_index] = !item;
      return newPlaqueData;
    });
  };
  return (
    <div className="flex items-center gap-1">
      {props.value.map((_item: boolean, index: number) => (
        <div
          key={index}
          onClick={() => {
            handleClick(_item, index);
          }}
          className={`h-[15px] w-[15px] ${
            _item === true ? "bg-[#4d40fc]" : "bg-[grey]"
          }`}
        ></div>
      ))}
    </div>
  );
};

export default PlaqueInput;
