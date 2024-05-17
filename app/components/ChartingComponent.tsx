"use client";
import React, { useState } from "react";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PictureAsPdfOutlinedIcon from "@mui/icons-material/PictureAsPdfOutlined";
import FolderCopyOutlinedIcon from "@mui/icons-material/FolderCopyOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import Image from "next/image";
import BloodtypeIcon from "@mui/icons-material/Bloodtype";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import RightSideCharting from "../sharedcomponents/RightSideCharting";
import {
  upperTeethArray,
  upperTeethArray2,
} from "@/app/imagesarrays/upperTeethArray";
import {
  lowerTeethArray,
  lowerTeethArray1,
} from "@/app/imagesarrays/lowerTeethArray";
import { occImagesArray, occImagesArray1 } from "@/app/imagesarrays/occImages";
import FurcationInput from "../sharedcomponents/chartingcomponents/Vestibular/FurcationInput";
import PocketDepthInput from "../sharedcomponents/chartingcomponents/Vestibular/PocketDepthInput";
import RecessionInput from "../sharedcomponents/chartingcomponents/Vestibular/RecessionInput";
import BleedingInput from "../sharedcomponents/chartingcomponents/Vestibular/BleedingInput";
import PlaqueInput from "../sharedcomponents/chartingcomponents/Vestibular/PlaqueInput";
import P_FurcationInput from "../sharedcomponents/chartingcomponents/Palatino/P_FurcationInput";
import P_PocketDepthInput from "../sharedcomponents/chartingcomponents/Palatino/P_PocketDepthInput";
import P_RecessionInput from "../sharedcomponents/chartingcomponents/Palatino/P_RecessionInput";
import P_BleedingInput from "../sharedcomponents/chartingcomponents/Palatino/P_BleedingInput";
import P_PlaqueInput from "../sharedcomponents/chartingcomponents/Palatino/P_PlaqueInput";
import HeaderComponent from "../sharedcomponents/HeaderComponent";
import { ImplantArray } from "@/app/jsonarrays/ImplantArray";
import { FurcationArray } from "@/app/jsonarrays/FurcationArray";
import { BleedingArray } from "@/app/jsonarrays/BleedingArray";
import { PlaqueArray } from "@/app/jsonarrays/PlaqueArray";
import { P_FurcationArray } from "@/app/jsonarrays/P_FurcationArray";

const array = [
  {
    number: 18,
    isSelected: true,
  },
  {
    number: 17,
    isSelected: true,
  },
  {
    number: 16,
    isSelected: true,
  },
  {
    number: 15,
    isSelected: true,
  },
  {
    number: 14,
    isSelected: true,
  },
  {
    number: 13,
    isSelected: true,
  },
  {
    number: 12,
    isSelected: true,
  },
  {
    number: 11,
    isSelected: true,
  },
  {
    number: 21,
    isSelected: true,
  },
  {
    number: 22,
    isSelected: true,
  },
  {
    number: 23,
    isSelected: true,
  },
  {
    number: 24,
    isSelected: true,
  },
  {
    number: 25,
    isSelected: true,
  },
  {
    number: 26,
    isSelected: true,
  },
  {
    number: 27,
    isSelected: true,
  },
  {
    number: 28,
    isSelected: true,
  },
];
export default function ChartingComponent() {
  const [upperTeeths, setUpperTeeths] = useState(upperTeethArray);
  const [lowerTeeths, setLowerTeeths] = useState(lowerTeethArray);
  const [occTeeths, setOccTeeths] = useState(occImagesArray);
  const [implantData, setImplantData] = useState(ImplantArray);
  const [furcationData, setFurcationData] = useState(FurcationArray);
  const [P_furcationData, setP_FurcationData] = useState(P_FurcationArray);
  const [bleedingData, setBleedingData] = useState(BleedingArray);
  const [plaqueData, setPlaqueData] = useState(PlaqueArray);

  // **** HANDLE IMPLANT CHANGE **** ############################
  const handleImplantChange = (item: any, index: number, value: any) => {
    // **** UPDATE IMPLANT ARRAY ****
    const updatedImplantArray = JSON.parse(JSON.stringify(implantData));
    updatedImplantArray[index].isSelected =
      !updatedImplantArray[index].isSelected;
    setImplantData(updatedImplantArray);

    // **** UPDATE UPPER TEETHS ****
    const updatedUpperTeethArray = JSON.parse(JSON.stringify(upperTeeths));

    updatedUpperTeethArray[index].image = updatedImplantArray[index].isSelected
      ? upperTeethArray2[index].image
      : upperTeethArray[index].image;

    setUpperTeeths(updatedUpperTeethArray);

    // **** UPDATE OCC TEETHS ****
    const updatedOccTeethArray = JSON.parse(JSON.stringify(occTeeths));
    updatedOccTeethArray[index].image = updatedImplantArray[index].isSelected
      ? occImagesArray1[index].image
      : occImagesArray[index].image;
    setOccTeeths(updatedOccTeethArray);

    // **** UPDATE LOWER TEETHS ****
    const updatedLowerTeethArray = JSON.parse(JSON.stringify(lowerTeeths));
    updatedLowerTeethArray[index].image = updatedImplantArray[index].isSelected
      ? lowerTeethArray1[index].image
      : lowerTeethArray[index].image;
    setLowerTeeths(updatedLowerTeethArray);
  };
  return (
    <div className="px-[1%] text-black">
      <HeaderComponent />
      <div className="flex gap-10 mt-5">
        {/* ***************************Left Side********************* */}
        <div className="w-[85%]">
          <div className="w-full bg-white rounded-md py-3">
            <div className="w-full flex justify-between items-center p-5">
              <input type="date" />
              <div className="flex gap-3 items-center text-[14px]">
                <div className="flex gap-2 items-center">
                  <p>Chart Setting</p>
                  <SettingsOutlinedIcon fontSize="small" />
                </div>
                <div className="flex gap-2 items-center">
                  <p>Export</p>
                  <PictureAsPdfOutlinedIcon fontSize="small" />
                </div>
                <div className="flex gap-2 items-center">
                  <p>Save</p>
                  <FolderCopyOutlinedIcon fontSize="small" />
                </div>
              </div>
            </div>
            <div className="w-full p-5">
              <div className="flex justify-between w-full gap-3 mt-5 text-[12px]">
                <button className="w-[80px]"></button>
                {array.map((item, index) => (
                  <button
                    style={{
                      flex: 1,
                    }}
                    key={index}
                    className="bg-[#eeeeee] rounded flex justify-between items-center"
                  >
                    <div />
                    <p>{item.number}</p>
                    <>
                      {item.isSelected ? (
                        <CloseOutlinedIcon fontSize="small" />
                      ) : (
                        <AddOutlinedIcon fontSize="small" />
                      )}
                    </>
                  </button>
                ))}
              </div>
              {/* Mobility */}
              <div className="flex justify-between w-full gap-3 mt-5 text-[12px] overflow-hidden">
                <p className="w-[80px]">Mobility</p>
                {array.map((item, index) => (
                  <input
                    key={index}
                    value={0}
                    style={{
                      flex: 1,
                    }}
                    type="number"
                    className="border-none outline-none bg-transparent w-[50px] text-center"
                  />
                ))}
              </div>
              {/* Implant */}
              <div className="flex justify-between w-full gap-3 mt-5 text-[12px] overflow-hidden">
                <p className="w-[80px]">Implant</p>
                {implantData.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-center"
                    style={{
                      flex: 1,
                    }}
                  >
                    <input
                      checked={item.isSelected}
                      onChange={(value) =>
                        handleImplantChange(item, index, value.target.value)
                      }
                      type="checkbox"
                    />
                  </div>
                ))}
              </div>
              {/* Furcation */}
              <div className="flex justify-between w-full gap-3 mt-5 text-[12px] overflow-hidden">
                <p className="w-[80px]">Furcation</p>
                {furcationData.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-center"
                    style={{ flex: 1 }}
                  >
                    <FurcationInput
                      value={item.value}
                      furcationData={furcationData}
                      setFurcationData={setFurcationData}
                      index={index}
                    />
                  </div>
                ))}
              </div>
              <div className="flex justify-between w-full gap-3 mt-5 text-[12px] overflow-hidden">
                <p className="w-[80px]">Pocket Depth</p>
                {array.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-center "
                    style={{
                      flex: 1,
                    }}
                  >
                    <PocketDepthInput />
                  </div>
                ))}
              </div>
              <div className="flex justify-between w-full gap-3 mt-5 text-[12px] overflow-hidden">
                <p className="w-[80px]">Recession</p>
                {array.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-center"
                    style={{
                      flex: 1,
                    }}
                  >
                    <RecessionInput />
                  </div>
                ))}
              </div>
              {/* Bleeding */}
              <div className="flex justify-between w-full gap-3 mt-5 text-[12px] overflow-hidden">
                <p className="w-[80px]">Bleeding</p>
                {bleedingData.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-center"
                    style={{ flex: 1 }}
                  >
                    <BleedingInput
                      value={item.value}
                      bleedingData={bleedingData}
                      setBleedingData={setBleedingData}
                      index={index}
                    />
                  </div>
                ))}
              </div>
              {/* Plaque */}
              <div className="flex justify-between w-full gap-3 mt-5 text-[12px] overflow-hidden">
                <p className="w-[80px]">Plaque</p>
                {plaqueData.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-center"
                    style={{ flex: 1 }}
                  >
                    <PlaqueInput
                      value={item.value}
                      plaqueData={plaqueData}
                      setPlaqueData={setPlaqueData}
                      index={index}
                    />
                  </div>
                ))}
              </div>
              {/* UPPERTEEETH ************ */}
              <div className="flex justify-between relative w-full gap-3 mt-5 text-[14px] overflow-hidden">
                <div style={{ flex: 1 }}></div>
                <div className="absolute top-0 left-0 w-full bg-gradient-to-b from-[#fdf6f7] to-[#f7dee1] h-[80px] z-0"></div>
                <div className="absolute top-[80px] left-0 w-full z-20 bg-red-500 h-[2px]"></div>
                {upperTeeths.map((item, index) => (
                  <div
                    key={index}
                    className={`flex justify-center h-[150px] z-10 ${
                      bleedingData[index]?.value.some(
                        (item) => item === "red" || item === "#dbc027"
                      )
                        ? `bg-[#ffc1c1]`
                        : ""
                    }`}
                    style={{ flex: 1 }}
                  >
                    <div className="relative ">
                      <Image
                        src={item.image}
                        width={200}
                        height={200}
                        className="h-full w-full object-contain"
                        alt={"tachados"}
                      />
                      <div className="absolute top-[60px] left-[40%]">
                        {furcationData[index]?.value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {/* OCC ************ */}
              <div className="flex justify-between relative w-full gap-3 mt-5 text-[14px]overflow-hidde bg-gradient-to-b from-[#fdf6f7] to-[#f7dee1]">
                <div style={{ flex: 1 }}></div>
                {occTeeths.map((item, index) => (
                  <div
                    key={index}
                    className={`flex justify-center h-[50px] z-10 ${
                      bleedingData[index]?.value.some(
                        (item) => item === "red" || item === "#dbc027"
                      )
                        ? `bg-[#ffc1c1]`
                        : ""
                    }`}
                    style={{
                      flex: 1,
                    }}
                  >
                    <Image
                      src={item.image}
                      width={200}
                      height={200}
                      className="h-full w-auto object-contain"
                      alt={"tachados"}
                    />
                  </div>
                ))}
              </div>
              {/* LOWERTEETH ************ */}
              <div className="flex justify-between relative w-full gap-3 mt-5 text-[14px] overflow-hidden">
                <div style={{ flex: 1 }}></div>
                <div className="absolute top-0 left-0 w-full bg-gradient-to-b from-[#fdf6f7] to-[#f7dee1] h-[80px] z-0"></div>
                <div className="absolute top-[80px] left-0 w-full z-20 bg-red-500 h-[2px]"></div>
                {lowerTeeths.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-center h-[150px] w-[80px] z-10 relative"
                    style={{
                      flex: 1,
                    }}
                  >
                    <Image
                      src={item.image}
                      width={300}
                      height={300}
                      className="h-full w-auto object-contain"
                      alt={"tachados"}
                    />
                    <div className="absolute top-[50px] left-[20%] flex gap-2">
                      <p>{P_furcationData[index]?.value_one}</p>
                      <p>{P_furcationData[index]?.value_two}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-between w-full gap-3 mt-5 text-[12px] overflow-hidden">
                <p className="w-[80px]">Furcation</p>
                {P_furcationData.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-center gap-1"
                    style={{ flex: 1 }}
                  >
                    <P_FurcationInput
                      value={item.value_one}
                      P_furcationData={P_furcationData}
                      first={true}
                      setP_FurcationData={setP_FurcationData}
                      index={index}
                    />
                    <P_FurcationInput
                      value={item.value_two}
                      P_furcationData={P_furcationData}
                      first={false}
                      setP_FurcationData={setP_FurcationData}
                      index={index}
                    />
                  </div>
                ))}
              </div>
              <div className="flex justify-between w-full gap-3 mt-5 text-[12px] overflow-hidden">
                <p className="w-[80px]">Pocket Depth</p>
                {array.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-center"
                    style={{
                      flex: 1,
                    }}
                  >
                    <P_PocketDepthInput />
                  </div>
                ))}
              </div>
              <div className="flex justify-between w-full gap-3 mt-5 text-[12px] overflow-hidden">
                <p className="w-[80px]">Recession</p>
                {array.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-center"
                    style={{
                      flex: 1,
                    }}
                  >
                    <P_RecessionInput />
                  </div>
                ))}
              </div>
              <div className="flex justify-between w-full gap-3 mt-5 text-[12px] overflow-hidden">
                <p className="w-[80px]">Bleeding</p>
                {array.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-center"
                    style={{
                      flex: 1,
                    }}
                  >
                    <P_BleedingInput />
                  </div>
                ))}
              </div>
              <div className="flex justify-between w-full gap-3 mt-5 text-[12px] overflow-hidden">
                <p className="w-[80px]">Plaque</p>
                {array.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-center"
                    style={{
                      flex: 1,
                    }}
                  >
                    <P_PlaqueInput />
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-between w-full items-center bg-[#f6f6f6] p-5 text-[12px]">
              <div className="flex items-center gap-5">
                <div className="flex items-center gap-2">
                  <BloodtypeIcon fontSize="small" />
                  <p className="">Bleeding</p>
                </div>
                <div className="flex items-center gap-2">
                  <BloodtypeIcon fontSize="small" />
                  <p className="">Bleeding with pus</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="bg-[#f7dee1] h-[20px] w-[30px]"></div>
                  <p className="">Healthy gums</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="bg-[#f7dee1] h-[20px] w-[30px]"></div>
                  <p className="">Inflamed gums</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="bg-[#f7dee1] h-[20px] w-[30px]"></div>
                  <p className="">Highly inflamed gums</p>
                </div>
                <div className="flex items-center gap-2">
                  <MoreHorizIcon style={{ color: "#c4c4c4" }} />
                </div>
              </div>
              <p className="">
                Click on the root or the top of the tooth to add irregularities.
              </p>
            </div>
          </div>
        </div>

        {/* ***************************Right Side********************* */}
        {/* <RightSideCharting /> */}
      </div>
    </div>
  );
}
