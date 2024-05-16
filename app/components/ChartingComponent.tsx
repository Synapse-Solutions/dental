"use client";
import React, { useState } from "react";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PictureAsPdfOutlinedIcon from "@mui/icons-material/PictureAsPdfOutlined";
import FolderCopyOutlinedIcon from "@mui/icons-material/FolderCopyOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import CheckBoxOutlineBlankOutlinedIcon from "@mui/icons-material/CheckBoxOutlineBlankOutlined";
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";
import Image from "next/image";
import BloodtypeIcon from "@mui/icons-material/Bloodtype";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import RightSideCharting from "../sharedcomponents/RightSideCharting";
import { upperToothArray } from "@/app/imagesarrays/UpperToothArray";
import FurcationInput from "../sharedcomponents/chartingcomponents/FurcationInput";
import PocketDepthInput from "../sharedcomponents/chartingcomponents/PocketDepthInput";
import RecessionInput from "../sharedcomponents/chartingcomponents/RecessionInput";

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
  return (
    <div className="px-[10%] text-black">
      <div className="flex justify-between items-center bg-white w-full rounded-md mt-10 px-10 py-5">
        <div className="flex items-center gap-4 ">
          <div className="w-[50px] h-[50px] rounded-full flex items-center justify-center bg-black">
            <p className="text-white">P</p>
          </div>
          <div>
            <p className="">Patient example P.</p>
            <p className="font-light">Male</p>
          </div>
        </div>
        <div>
          <BorderColorOutlinedIcon fontSize="large" />
        </div>
      </div>
      <div className="flex gap-10 mt-5">
        {/* ***************************Left Side********************* */}
        <div className="w-[80%]">
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
              <div className="flex justify-between w-full gap-3 mt-5 text-[12px] overflow-hidden">
                <p className="w-[80px]">Implant</p>
                {array.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-center"
                    style={{
                      flex: 1,
                    }}
                  >
                    <input type="checkbox" />
                  </div>
                ))}
              </div>
              <div className="flex justify-between w-full gap-3 mt-5 text-[12px] overflow-hidden">
                <p className="w-[80px]">Furcation</p>
                {array.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-center"
                    style={{
                      flex: 1,
                    }}
                  >
                    <FurcationInput />
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
              <div className="flex justify-between relative w-full gap-3 mt-5 text-[14px] overflow-hidden">
                <div
                  style={{
                    flex: 1,
                  }}
                ></div>
                <div className="absolute top-0 left-0 w-full bg-gradient-to-b from-[#fdf6f7] to-[#f7dee1] h-[70px] z-0"></div>
                <div className="absolute top-[70px] left-0 w-full z-20 bg-red-500 h-[2px]"></div>
                {upperToothArray.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-center h-[100px] z-10"
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
              <div className="flex justify-between relative w-full gap-3 mt-5 text-[14px]overflow-hidde bg-gradient-to-b from-[#fdf6f7] to-[#f7dee1]">
                <div
                  style={{
                    flex: 1,
                  }}
                ></div>

                {array.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-center h-[50px] z-10 "
                    style={{
                      flex: 1,
                    }}
                  >
                    <Image
                      src={"/blue.png"}
                      width={200}
                      height={200}
                      className="h-full w-auto object-contain"
                      alt={"tachados"}
                    />
                  </div>
                ))}
              </div>
              <div className="flex justify-between relative w-full gap-3 mt-5 text-[14px]overflow-hidden">
                <div
                  style={{
                    flex: 1,
                  }}
                ></div>
                <div className="absolute top-0 left-0 w-full bg-gradient-to-b from-[#fdf6f7] to-[#f7dee1] h-[70px] z-0"></div>
                <div className="absolute top-[70px] left-0 w-full z-20 bg-red-500 h-[2px]"></div>
                {array.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-center h-[100px] z-10"
                    style={{
                      flex: 1,
                    }}
                  >
                    <Image
                      src={"/img/tabla5/periodontograma-dientes-abajo-46.png"}
                      width={200}
                      height={200}
                      className="h-full w-auto object-contain"
                      alt={"tachados"}
                    />
                  </div>
                ))}
              </div>
              <div className="flex justify-between w-full gap-3 mt-5 text-[14px]overflow-hidden">
                <p
                  style={{
                    flex: 1,
                  }}
                >
                  Pocket Depth
                </p>
                {array.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-center  w-[50px] text-[10px]"
                    style={{
                      flex: 1,
                    }}
                  >
                    <input
                      key={index}
                      value={0}
                      style={{
                        flex: 1,
                      }}
                      type="text"
                      className="border-none outline-none bg-transparent w-[15px] text-center"
                    />
                    <input
                      key={index}
                      value={0}
                      style={{
                        flex: 1,
                      }}
                      type="text"
                      className="border-none outline-none bg-transparent w-[15px] text-center"
                    />
                    <input
                      key={index}
                      value={0}
                      style={{
                        flex: 1,
                      }}
                      type="text"
                      className="border-none outline-none bg-transparent w-[15px] text-center"
                    />
                  </div>
                ))}
              </div>
              <div className="flex justify-between w-full gap-3 mt-5 text-[14px]overflow-hidden">
                <p
                  style={{
                    flex: 1,
                  }}
                >
                  Recession
                </p>
                {array.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-center  w-[50px] text-[10px]"
                    style={{
                      flex: 1,
                    }}
                  >
                    <input
                      key={index}
                      value={0}
                      style={{
                        flex: 1,
                      }}
                      type="text"
                      className="border-none outline-none bg-transparent w-[15px] text-center"
                    />
                    <input
                      key={index}
                      value={0}
                      style={{
                        flex: 1,
                      }}
                      type="text"
                      className="border-none outline-none bg-transparent w-[15px] text-center"
                    />
                    <input
                      key={index}
                      value={0}
                      style={{
                        flex: 1,
                      }}
                      type="text"
                      className="border-none outline-none bg-transparent w-[15px] text-center"
                    />
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
          <div className="w-full bg-white rounded-md py-3 mt-20">
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
              <div className="flex justify-between w-full gap-3 mt-5 text-[14px]">
                <button
                  style={{
                    flex: 1,
                  }}
                ></button>
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
              <div className="flex justify-between w-full gap-3 mt-5 text-[14px]overflow-hidden">
                <p
                  style={{
                    flex: 1,
                  }}
                >
                  Mobility
                </p>
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
              <div className="flex justify-between w-full gap-3 mt-5 text-[14px]overflow-hidden">
                <p
                  style={{
                    flex: 1,
                  }}
                >
                  Implant
                </p>
                {array.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-center"
                    style={{
                      flex: 1,
                    }}
                  >
                    {item.isSelected ? (
                      <CheckBoxOutlinedIcon fontSize="small" />
                    ) : (
                      <CheckBoxOutlineBlankOutlinedIcon fontSize="small" />
                    )}
                  </div>
                ))}
              </div>
              <div className="flex justify-between relative w-full gap-3 mt-5 text-[14px]overflow-hidden">
                <div
                  style={{
                    flex: 1,
                  }}
                ></div>
                <div className="absolute top-0 left-0 w-full bg-gradient-to-b from-[#fdf6f7] to-[#f7dee1] h-[70px] z-0"></div>
                <div className="absolute top-[70px] left-0 w-full z-20 bg-red-500 h-[2px]"></div>
                {array.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-center h-[100px] z-10"
                    style={{
                      flex: 1,
                    }}
                  >
                    <Image
                      src={"/img/tabla5/periodontograma-dientes-abajo-46.png"}
                      width={200}
                      height={200}
                      className="h-full w-auto object-contain"
                      alt={"tachados"}
                    />
                  </div>
                ))}
              </div>
              <div className="flex justify-between relative w-full gap-3 mt-5 text-[14px]overflow-hidde bg-gradient-to-b from-[#fdf6f7] to-[#f7dee1]">
                <div
                  style={{
                    flex: 1,
                  }}
                ></div>

                {array.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-center h-[50px] z-10 "
                    style={{
                      flex: 1,
                    }}
                  >
                    <Image
                      src={"/blue.png"}
                      width={200}
                      height={200}
                      className="h-full w-auto object-contain"
                      alt={"tachados"}
                    />
                  </div>
                ))}
              </div>
              <div className="flex justify-between relative w-full gap-3 mt-5 text-[14px]overflow-hidden">
                <div
                  style={{
                    flex: 1,
                  }}
                ></div>
                <div className="absolute top-0 left-0 w-full bg-gradient-to-b from-[#fdf6f7] to-[#f7dee1] h-[70px] z-0"></div>
                <div className="absolute top-[70px] left-0 w-full z-20 bg-red-500 h-[2px]"></div>
                {array.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-center h-[100px] z-10"
                    style={{
                      flex: 1,
                    }}
                  >
                    <Image
                      src={"/img/tabla5/periodontograma-dientes-abajo-46.png"}
                      width={200}
                      height={200}
                      className="h-full w-auto object-contain"
                      alt={"tachados"}
                    />
                  </div>
                ))}
              </div>
              <div className="flex justify-between w-full gap-3 mt-5 text-[14px]overflow-hidden">
                <p
                  style={{
                    flex: 1,
                  }}
                >
                  Pocket Depth
                </p>
                {array.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-center  w-[50px] text-[10px]"
                    style={{
                      flex: 1,
                    }}
                  >
                    <input
                      key={index}
                      value={0}
                      style={{
                        flex: 1,
                      }}
                      type="text"
                      className="border-none outline-none bg-transparent w-[15px] text-center"
                    />
                    <input
                      key={index}
                      value={0}
                      style={{
                        flex: 1,
                      }}
                      type="text"
                      className="border-none outline-none bg-transparent w-[15px] text-center"
                    />
                    <input
                      key={index}
                      value={0}
                      style={{
                        flex: 1,
                      }}
                      type="text"
                      className="border-none outline-none bg-transparent w-[15px] text-center"
                    />
                  </div>
                ))}
              </div>
              <div className="flex justify-between w-full gap-3 mt-5 text-[14px]overflow-hidden">
                <p
                  style={{
                    flex: 1,
                  }}
                >
                  Recession
                </p>
                {array.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-center  w-[50px] text-[10px]"
                    style={{
                      flex: 1,
                    }}
                  >
                    <input
                      key={index}
                      value={0}
                      style={{
                        flex: 1,
                      }}
                      type="text"
                      className="border-none outline-none bg-transparent w-[15px] text-center"
                    />
                    <input
                      key={index}
                      value={0}
                      style={{
                        flex: 1,
                      }}
                      type="text"
                      className="border-none outline-none bg-transparent w-[15px] text-center"
                    />
                    <input
                      key={index}
                      value={0}
                      style={{
                        flex: 1,
                      }}
                      type="text"
                      className="border-none outline-none bg-transparent w-[15px] text-center"
                    />
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
        <RightSideCharting />
      </div>
    </div>
  );
}
