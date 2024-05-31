import React, { useState } from "react";

interface Props {
  value: any;
  setMobilityData: any;
  index: number;
}
const MobilityInput = (props: Props) => {
  const handleInputChange = (value: any) => {
    const sanitizedValue = Math.min(Number(value), 4);

    props.setMobilityData((prevState: any) => {
      const newState = [...prevState];
      newState[props.index].value = sanitizedValue;
      return newState;
    });
  };

  return (
    <div className="flex items-center justify-center">
      <input
        type="number"
        value={props.value}
        max={19}
        onChange={(e) => handleInputChange(e.target.value)}
        className="w-[20px] bg-gray-400 rounded text-center mr-[1px]"
      />
    </div>
  );
};

export default MobilityInput;
