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
    const newInputValues = [...inputValues];

    // Check if the input value is "-" or empty
    if (value === "-" || value === "") {
      newInputValues[index] = value;
    } else {
      // Parse the input value, default to 0 if NaN
      let sanitizedValue = parseInt(value, 10);

      // Remove leading zeroes unless the value is exactly "0"
      if (inputValues[index] === "0") {
        sanitizedValue = parseInt(value.replace(/^0+/, ""), 10);
      }

      // Constrain the value between -15 and 15
      sanitizedValue = Math.min(Math.max(sanitizedValue, -15), 15);

      newInputValues[index] = String(sanitizedValue);
    }

    setInputValues(newInputValues);

    props.setRecessionData((prevState: any) => {
      const newState = [...prevState];
      newState[props.index].value[index] = newInputValues[index];
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
