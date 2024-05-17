import Image from "next/image";
import React, { useState } from "react";

const P_BleedingInput = () => {
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
      {[1, 2, 3].map((toothNumber, index) => (
        <Image
          key={index}
          onClick={() => handleInputChange(toothNumber, 1)}
          src={"/blood-drop.png"}
          width={17}
          height={17}
          alt="bolld"
        />
      ))}
    </div>
  );
};

export default P_BleedingInput;
