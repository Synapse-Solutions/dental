import React, { useState } from "react";

interface Props {
  value: string;
  P_furcationData: any;
  setP_FurcationData: any;
  index: number;
  first: boolean;
}
const P_FurcationInput = (props: Props) => {
  const [clickCount, setClickCount] = useState(0);

  const handleButtonClick = () => {
    if (clickCount === 3) {
      setClickCount(0);
      props.setP_FurcationData((prev: any) => {
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
          props.setP_FurcationData((prev: any) => {
            const newFurcationData = [...prev];
            newFurcationData[props.index][
              props.first ? "value_one" : "value_two"
            ] = "I";
            return newFurcationData;
          });
          break;
        case 1:
          props.setP_FurcationData((prev: any) => {
            const newFurcationData = [...prev];
            newFurcationData[props.index][
              props.first ? "value_one" : "value_two"
            ] = "II";
            return newFurcationData;
          });
          break;
        case 2:
          props.setP_FurcationData((prev: any) => {
            const newFurcationData = [...prev];
            newFurcationData[props.index][
              props.first ? "value_one" : "value_two"
            ] = "III";
            return newFurcationData;
          });
          break;
        default:
          props.setP_FurcationData((prev: any) => {
            const newFurcationData = [...prev];
            newFurcationData[props.index][
              props.first ? "value_one" : "value_two"
            ] = "";
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

export default P_FurcationInput;
