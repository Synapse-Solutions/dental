import React, { useState } from "react";

interface Props {
  value: any;
  setMobilityData: any;
  index: number;
}
const MobilityInput = (props: Props) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    // Allow only digits and ensure value is between 1 and 4
    if (value === "" || /^[1-4]$/.test(value)) {
      props.setMobilityData((prevState: any) => {
        const newState = [...prevState];
        newState[props.index].value = value === "" ? "" : Number(value);
        return newState;
      });
    }
  };

  return (
    <div className="flex items-center justify-center">
      <input
        type="text"
        value={props.value}
        onChange={handleInputChange}
        className="w-[20px] bg-gray-400 rounded text-center mr-[1px]"
      />
    </div>
  );
};

export default MobilityInput;
