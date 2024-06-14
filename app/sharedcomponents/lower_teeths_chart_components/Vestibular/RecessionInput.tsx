import React, { useState } from "react";

interface Props {
  value: any;
  recessionData: any;
  setRecessionData: any;
  index: number;
}
const RecessionInput = (props: Props) => {
  const handleInputChange = (value: any, index: number) => {
    const sanitizedValue = Math.min(Math.max(parseInt(value, 10), -15), 15);

    props.setRecessionData((prevState: any) => {
      const newState = [...prevState];
      newState[props.index].value[index] = sanitizedValue;
      return newState;
    });
  };

  return (
    <div className="flex items-center">
      {props.value.map((_item: string, index: number) => (
        <input
          key={index}
          type="number"
          value={_item}
          max={19}
          onChange={(e) => handleInputChange(e.target.value, index)}
          className="w-[17px] bg-gray-400 rounded text-center mr-[1px]"
        />
      ))}
    </div>
  );
};

export default RecessionInput;
