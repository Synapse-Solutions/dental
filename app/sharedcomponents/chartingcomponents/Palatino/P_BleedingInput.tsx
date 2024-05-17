import Image from "next/image";
import React, { useState } from "react";
import RoomIcon from "@mui/icons-material/Room";

interface Props {
  value: any;
  bleedingData: any;
  setBleedingData: any;
  index: number;
}
const P_BleedingInput = (props: Props) => {
  const handleChange = (item: string, _index: number) => {
    if (item === "grey") {
      props.setBleedingData((prev: any) => {
        const newBleedingData = [...prev];
        newBleedingData[props.index].value[_index] = "red";
        return newBleedingData;
      });
    } else if (item === "#dbc027") {
      props.setBleedingData((prev: any) => {
        const newBleedingData = [...prev];
        newBleedingData[props.index].value[_index] = "grey";
        return newBleedingData;
      });
    } else if (item === "red") {
      props.setBleedingData((prev: any) => {
        const newBleedingData = [...prev];
        newBleedingData[props.index].value[_index] = "#dbc027";
        return newBleedingData;
      });
    }
  };
  return (
    <div className="flex items-center justify-center">
      {props.value.map((item: string, _index: number) => (
        <RoomIcon
          key={_index}
          onClick={() => handleChange(item, _index)}
          fontSize="small"
          className={`rotate-180 w-[18px] text-[${item}]`}
        />
      ))}
    </div>
  );
};

export default P_BleedingInput;
