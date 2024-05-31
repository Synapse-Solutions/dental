import React, { useState } from "react";

interface Props {
  value: string;
  furcationData: any;
  setFurcationData: any;
  index: number;
}
const FurcationInput = (props: Props) => {
  const [clickCount, setClickCount] = useState(0);

  const handleButtonClick = () => {
    if (clickCount === 3) {
      setClickCount(0);
      props.setFurcationData((prev: any) => {
        const newFurcationData = [...prev];
        newFurcationData[props.index].value = "";
        return newFurcationData;
      });
    } else {
      // Increment the click count
      setClickCount(clickCount + 1);

      // Set input value based on the click count
      switch (clickCount) {
        case 0:
          props.setFurcationData((prev: any) => {
            const newFurcationData = [...prev];
            newFurcationData[props.index].value = "I";
            return newFurcationData;
          });
          break;
        case 1:
          props.setFurcationData((prev: any) => {
            const newFurcationData = [...prev];
            newFurcationData[props.index].value = "II";
            return newFurcationData;
          });
          break;
        case 2:
          props.setFurcationData((prev: any) => {
            const newFurcationData = [...prev];
            newFurcationData[props.index].value = "III";
            return newFurcationData;
          });
          break;
        default:
          props.setFurcationData((prev: any) => {
            const newFurcationData = [...prev];
            newFurcationData[props.index].value = "";
            return newFurcationData;
          });
          break;
      }
    }
  };

  return (
    <input
      type="text"
      onClick={handleButtonClick}
      value={props.value}
      readOnly
      className="w-[30px] bg-gray-400 rounded-lg text-center"
    />
  );
};

export default FurcationInput;
