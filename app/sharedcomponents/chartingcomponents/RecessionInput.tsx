import React, { useState } from "react";

const RecessionInput = () => {
  // State to manage input values for each tooth (teeth 1-3)
  const [toothDepths, setToothDepths] = useState<any>({
    1: "",
    2: "",
    3: "",
  });

  const handleInputChange = (toothNumber: number, value: any) => {
    // const sanitizedValue = Math.min(Number(value), 19);
    //value should be in between -15 and 15
    const sanitizedValue = Math.min(Math.max(Number(value), -15), 15);

    setToothDepths((prevDepths: any) => ({
      ...prevDepths,
      [toothNumber]: sanitizedValue.toString(),
    }));
  };

  return (
    <div className="flex items-center">
      {[1, 2, 3].map((toothNumber) => (
        <input
          key={toothNumber}
          type="number"
          value={toothDepths[toothNumber]}
          max={19}
          onChange={(e) => handleInputChange(toothNumber, e.target.value)}
          className="w-[17px] bg-gray-400 rounded text-center mr-[1px]"
        />
      ))}
    </div>
  );
};

export default RecessionInput;
