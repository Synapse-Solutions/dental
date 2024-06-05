import React, { useState } from "react";

interface Props {
  value: any;
  recessionData: any;
  setRecessionData: any;
  index: number;
}
const RecessionInput = (props: Props) => {
  const [inputValues, setInputValues] = useState(
    Array(props.value.length).fill("0")
  );

  const handleInputChange = (value: string, index: number) => {
    const sanitizedValue = Math.min(Math.max(parseInt(value, 10), -15), 15);

    const newInputValues = [...inputValues];
    newInputValues[index] = String(sanitizedValue);
    setInputValues(newInputValues);

    props.setRecessionData((prevState: any) => {
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

export default RecessionInput;
