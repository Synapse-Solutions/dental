import React, { useState } from "react";

interface Props {
  value: any;
  pocketDepthData: any;
  setPocketDepthData: any;
  index: number;
}
const PocketDepthInput = (props: Props) => {
  const [inputValues, setInputValues] = useState(
    Array(props.value.length).fill("0")
  );

  const handleInputChange = (value: string, index: number) => {
    const sanitizedValue = Math.min(Number(value), 19);

    const newInputValues = [...inputValues];
    newInputValues[index] = String(sanitizedValue);
    setInputValues(newInputValues);

    props.setPocketDepthData((prevState: any) => {
      const newState = [...prevState];
      newState[props.index].value[index] = sanitizedValue;
      return newState;
    });
  };

  return (
    <div className="flex items-center">
      {inputValues.map((item: string, index: number) => (
        <input
          key={index}
          type="number"
          value={item}
          max={19}
          onChange={(e) => handleInputChange(e.target.value, index)}
          className="w-[17px] bg-gray-400 rounded text-center mr-[1px]"
        />
      ))}
    </div>
  );
};

export default PocketDepthInput;
