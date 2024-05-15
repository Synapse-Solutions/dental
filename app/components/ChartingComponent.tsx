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
import EqualizerIcon from "@mui/icons-material/Equalizer";
import InfoIcon from "@mui/icons-material/Info";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import RadarChart from "../sharedcomponents/RadarChart";
import RoundChart from "../sharedcomponents/RoundChart";
import RoundCharti from "../sharedcomponents/RoundCharti";
import LineChart from "../sharedcomponents/LineChart";
import ProbingChart from "../sharedcomponents/ProbingChart";
import TeethLostChart from "../sharedcomponents/TeethLostChart";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";

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
  const [leftSideActiveTab, setLeftSideActiveTab] = useState(1);
  const [selectedSmoking, setSelectedSmoking] = useState<any>(2);
  const [generaticDisorders, setGeneraticDisorders] = useState(false);
  const [editorContent, setEditorContent] = useState("");

  const handleEditorChange = (content: any) => {
    setEditorContent(content);
  };

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
        <div className="bg-white text-[12px] rounded-md overflow-y-scroll overflow-x-hidden h-[calc(90vh)]">
          <div className="bg-[#f6f6f6] flex">
            <div
              onClick={() => setLeftSideActiveTab(1)}
              className="flex gap-1 p-5 bg-white items-center"
            >
              <EqualizerIcon />
              <p>Statistic</p>
            </div>
            <div
              onClick={() => setLeftSideActiveTab(2)}
              className="flex gap-1 p-5 items-center"
            >
              <InfoIcon />
              <p>Medical</p>
            </div>
            <div
              onClick={() => setLeftSideActiveTab(0)}
              className="flex gap-1 p-5 items-center"
            >
              <ArrowCircleRightOutlinedIcon />
            </div>
          </div>
          {leftSideActiveTab === 1 && (
            <div className="w-full">
              <div>
                <RadarChart />
              </div>
              <div className="h-[1px] w-full bg-[#c4c4c4]" />
              <div className="p-3">
                <p className="text-[13px]">Periodontal risk assessment</p>
                <div className="w-full flex items-center justify-between">
                  <p>Area of hexagon with risk</p>
                  <p>23.38</p>
                </div>
                <div className="w-full flex items-center justify-between">
                  <p>Periodontal risk</p>
                  <p>Medium risk</p>
                </div>
                <div className="w-full flex items-center justify-between">
                  <p>Advised intervals for reassessment</p>
                  <p>6 months</p>
                </div>
              </div>
              <div className="h-[1px] w-full bg-[#c4c4c4]" />

              <div className=" flex w-full mt-4">
                <div className="flex items-center w-1/2 flex-col">
                  <p>Plaque</p>
                  <RoundChart />
                </div>
                <div className="flex items-center w-1/2 flex-col">
                  <p>Bleeding</p>
                  <RoundCharti />
                </div>
              </div>
              <div className="h-[1px] w-full bg-[#c4c4c4]" />
              <div className="mt-4 p-3">
                <p>Development of Bleeding and Plaque</p>
                <LineChart />
              </div>
              <div className="h-[1px] w-full bg-[#c4c4c4]" />
              <div className="mt-4 p-3">
                <p>Average Probing depth</p>
                <ProbingChart />
              </div>
              <div className="h-[1px] w-full bg-[#c4c4c4]" />
              <div className="mt-4 p-3">
                <p>Average LOA</p>
                <ProbingChart />
              </div>
              <div className="h-[1px] w-full bg-[#c4c4c4]" />
              <div className="mt-4 p-3">
                <p>Teeth Lost </p>
                <TeethLostChart />
              </div>
            </div>
          )}
          {leftSideActiveTab === 2 && (
            <div className="text-[12px] w-full p-3">
              <p className="text-[14px]">Smoking</p>
              <div className="mt-3 flex flex-col gap-3">
                <div
                  onClick={() => setSelectedSmoking(1)}
                  className="flex items-center gap-2"
                >
                  {selectedSmoking === 1 ? (
                    <RadioButtonCheckedIcon fontSize="small" />
                  ) : (
                    <RadioButtonUncheckedIcon fontSize="small" />
                  )}
                  <p>Non-smoker or former smoker (Stop for 5 years or more)</p>
                </div>
                <div
                  onClick={() => setSelectedSmoking(2)}
                  className="flex items-center gap-2"
                >
                  {selectedSmoking === 2 ? (
                    <RadioButtonCheckedIcon fontSize="small" />
                  ) : (
                    <RadioButtonUncheckedIcon fontSize="small" />
                  )}
                  <p>Less than 10 cigarettes a day</p>
                </div>
                <div
                  onClick={() => setSelectedSmoking(3)}
                  className="flex items-center gap-2"
                >
                  {selectedSmoking === 3 ? (
                    <RadioButtonCheckedIcon fontSize="small" />
                  ) : (
                    <RadioButtonUncheckedIcon fontSize="small" />
                  )}
                  <p>Between 10 and 20 cigarettes a day</p>
                </div>
                <div
                  onClick={() => setSelectedSmoking(4)}
                  className="flex items-center gap-2"
                >
                  {selectedSmoking === 4 ? (
                    <RadioButtonCheckedIcon fontSize="small" />
                  ) : (
                    <RadioButtonUncheckedIcon fontSize="small" />
                  )}
                  <p>More than 20 cigarettes a day</p>
                </div>
              </div>
              <p className="text-[14px] mt-5">Systemic or genetic disorders</p>
              <div className="mt-3 flex flex-col gap-3">
                <div
                  onClick={() => setGeneraticDisorders(true)}
                  className="flex items-center gap-2"
                >
                  {generaticDisorders ? (
                    <RadioButtonCheckedIcon fontSize="small" />
                  ) : (
                    <RadioButtonUncheckedIcon fontSize="small" />
                  )}
                  <p>Yes</p>
                </div>
                <div
                  onClick={() => setGeneraticDisorders(false)}
                  className="flex items-center gap-2"
                >
                  {!generaticDisorders ? (
                    <RadioButtonCheckedIcon fontSize="small" />
                  ) : (
                    <RadioButtonUncheckedIcon fontSize="small" />
                  )}
                  <p>No</p>
                </div>
              </div>
              <p className="text-[14px] mt-5">Alveolar bone loss</p>
              <div className="bg-[#f6f6f6] rounded flex justify-between w-[90%] px-3 py-2 mt-3">
                <input
                  type="text"
                  placeholder="0"
                  className="bg-transparent outline-none w-[90%]"
                />
                <p>%</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
