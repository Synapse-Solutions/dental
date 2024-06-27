import React, { useState, useRef, useEffect } from "react";

interface Props {
  value: any;
  pocketDepthData: any;
  setPocketDepthData: any;
  index: number;
}

const PocketDepthInput = (props: Props) => {
  const [inputValues, setInputValues] = useState(props.value);
  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);

  useEffect(() => {
    inputRefs.current = inputRefs.current.slice(0, inputValues.length);
  }, [inputValues.length]);

  const handleInputChange = (value: string, inputIndex: number) => {
    const newInputValues = [...inputValues];

    // Check if the input value is "-" or empty
    if (value === "-" || value === "") {
      newInputValues[inputIndex] = value;
    } else {
      // Parse the input value, default to 0 if NaN
      let sanitizedValue = parseInt(value, 10);

      // Remove leading zeroes unless the value is exactly "0"
      if (inputValues[inputIndex] === "0") {
        sanitizedValue = parseInt(value.replace(/^0+/, ""), 10);
      }

      // Constrain the value between -15 and 15
      sanitizedValue = Math.min(Number(value), 19);

      newInputValues[inputIndex] = String(sanitizedValue);

      // Move to the next input if certain conditions are met
      if (
        (inputIndex === 0 && sanitizedValue > 1) ||
        (inputIndex > 0 && sanitizedValue >= 2)
      ) {
        if (inputIndex < inputRefs.current.length - 1) {
          inputRefs.current[inputIndex + 1]?.focus();
        } else if (props.index < props.pocketDepthData.length - 1) {
          // Move to the first input of the next object if this is the last input of the current object
          const nextObjectFirstInput = document.getElementById(
            `inputLower-${props.index + 1}-0`
          );
          nextObjectFirstInput?.focus();
        }
      }
    }

    setInputValues(newInputValues);

    props.setPocketDepthData((prevState: any) => {
      const newState = [...prevState];
      newState[props.index].value[inputIndex] = newInputValues[inputIndex];
      return newState;
    });
  };

  const handleFocus = (inputIndex: number) => {
    if (inputRefs.current[inputIndex]) {
      inputRefs.current[inputIndex]!.select();
    }
  };

  return (
    <div className="flex items-center">
      {inputValues.map((item: string, index: number) => (
        <input
          key={index}
          id={`inputLower-${props.index}-${index}`}
          type="number"
          value={item}
          ref={(el) => {
            inputRefs.current[index] = el;
          }}
          max={19}
          onFocus={() => handleFocus(index)}
          onChange={(e) => handleInputChange(e.target.value, index)}
          className="w-[17px] bg-gray-400 rounded text-center mr-[1px]"
        />
      ))}
    </div>
  );
};

export default PocketDepthInput;
