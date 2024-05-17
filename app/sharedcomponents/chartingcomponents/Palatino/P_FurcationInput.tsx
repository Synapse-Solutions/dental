import React, { useState } from "react";

const P_FurcationInput = () => {
  const [clickCount, setClickCount] = useState(0);
  const [inputValue, setInputValue] = useState("");

  const handleButtonClick = () => {
    if (clickCount === 3) {
      // Reset the click count and input value on the 4th click
      setClickCount(0);
      setInputValue("");
    } else {
      // Increment the click count
      setClickCount(clickCount + 1);

      // Set input value based on the click count
      switch (clickCount) {
        case 0:
          setInputValue("I");
          break;
        case 1:
          setInputValue("II");
          break;
        case 2:
          setInputValue("III");
          break;
        default:
          setInputValue("");
          break;
      }
    }
  };

  return (
    <input
      type="text"
      onClick={handleButtonClick}
      value={inputValue}
      readOnly
      className="w-[20px] bg-gray-400 rounded-lg text-center"
    />
  );
};

export default P_FurcationInput;
