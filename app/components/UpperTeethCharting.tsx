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
import {
  upperTeethArray,
  upperTeethArray2,
  upperTeethArray3,
  upperTeethArray4,
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
import { P_BleedingArray } from "@/app/jsonarrays/P_BleedingArray";
import { P_PlaqueArray } from "@/app/jsonarrays/P_PlaqueArray";
import { PocketDepthArray } from "@/app/jsonarrays/PocketDepthArray";
import { P_PocketDepthArray } from "@/app/jsonarrays/P_PocketDepthArray";
import { RecessionArray } from "@/app/jsonarrays/RecessionArray";
import { P_RecessionArray } from "@/app/jsonarrays/P_RecessionArray";
import { MobilityArray } from "@/app/jsonarrays/MobilityArray";
import CharLine from "../sharedcomponents/chartingcomponents/ChartLine";
import ChartLineBlue from "../sharedcomponents/chartingcomponents/ChartLineBlue";
import DotsupperTeeth from "../sharedcomponents/DotsupperTeeth";
import DotsMiddleTeeth from "../sharedcomponents/DotsMiddleTeeth";
import CavityModa from "../sharedcomponents/CavityModa";
import { clicksArray } from "@/app/jsonarrays/upperTeethClicksArray";
import MobilityInput from "../sharedcomponents/chartingcomponents/Vestibular/MobilityInput";
import {
  heightMiddlePortion,
  heightWidthUpperPortion,
} from "@/app/sharedcomponents/chartingcomponents/HeightWidthUpperTeeths";
import { upperCavityPosition } from "@/app/sharedcomponents/chartingcomponents/CavityPositions";

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
export default function UpperTeethCharting() {
  const [upperTeeths, setUpperTeeths] = useState(upperTeethArray);
  const [lowerTeeths, setLowerTeeths] = useState(lowerTeethArray);
  const [occTeeths, setOccTeeths] = useState(occImagesArray);
  const [implantData, setImplantData] = useState(ImplantArray);
  const [furcationData, setFurcationData] = useState(FurcationArray);
  const [P_furcationData, setP_FurcationData] = useState(P_FurcationArray);
  const [bleedingData, setBleedingData] = useState(BleedingArray);
  const [plaqueData, setPlaqueData] = useState(PlaqueArray);
  const [P_BleedingData, setP_BleedingData] = useState(P_BleedingArray);
  const [P_PlaqueData, setP_PlaqueData] = useState(P_PlaqueArray);
  const [pocketDepthData, setPocketDepthData] = useState(PocketDepthArray);
  const [P_PocketDepthData, setP_PocketDepthData] =
    useState(P_PocketDepthArray);

  const [recessionData, setRecessionData] = useState(RecessionArray);
  const [P_recessionData, setP_RecessionData] = useState(P_RecessionArray);
  const [selectedTooth, setSelectedTooth] = useState<any>(null);
  const [clicks, setClicks] = useState<any>(clicksArray);
  const [cavityModal, setCavityModal] = useState<any>(null);
  const [mobilityData, setMobilityData] = useState(MobilityArray);

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

  // **** HANDLE CHANGE CAVITY **** ############################
  const handleChangeCavity = (value: number, index: number) => {
    setSelectedTooth(null);
    const updatedUpperTeethArray = JSON.parse(JSON.stringify(upperTeeths));
    const updatedOccTeethArray = JSON.parse(JSON.stringify(occTeeths));
    const updatedLowerTeethArray = JSON.parse(JSON.stringify(lowerTeeths));
    if (value === 1) {
      updatedOccTeethArray[index].image = "/occImages/row_4/2.webp";
      updatedUpperTeethArray[index].cavity = 1;
      updatedLowerTeethArray[index].cavity = 1;
    } else if (value === 2) {
      updatedOccTeethArray[index].image = "/occImages/row_6/2.webp";
      updatedUpperTeethArray[index].cavity = 2;
      updatedLowerTeethArray[index].cavity = 2;
    } else if (value === 3) {
      updatedOccTeethArray[index].image = "/occImages/row_7/2.webp";
      updatedUpperTeethArray[index].cavity = 3;
      updatedLowerTeethArray[index].cavity = 3;
    }
    setOccTeeths(updatedOccTeethArray);
    setUpperTeeths(updatedUpperTeethArray);
    setLowerTeeths(updatedLowerTeethArray);
  };

  // ****** UPDATE IMAGES in lower and upper teeth  ********
  const updateImages = (index: number) => {
    const updatedupperTeethArray = JSON.parse(JSON.stringify(upperTeeths));
    const updatedLowerTeethArray = JSON.parse(JSON.stringify(lowerTeeths));

    // **** CHECK IF IMAGE IS ROW 1 ****
    if (updatedupperTeethArray[index].image.includes("/upperTeeth/1st_row/")) {
      updatedupperTeethArray[index].image = upperTeethArray3[index].image;
      setUpperTeeths(updatedupperTeethArray);
      updatedLowerTeethArray[index].image = updatedLowerTeethArray[
        index
      ].image.replace("row_1", "row_3");
      setLowerTeeths(updatedLowerTeethArray);
    }
    // **** CHECK IF IMAGE IS ROW 3 ****
    else if (
      updatedupperTeethArray[index].image.includes("/upperTeeth/3rd_row/")
    ) {
      updatedupperTeethArray[index].image = upperTeethArray4[index].image;
      setUpperTeeths(updatedupperTeethArray);
      updatedLowerTeethArray[index].image = updatedLowerTeethArray[
        index
      ].image.replace("row_3", "row_4");
      setLowerTeeths(updatedLowerTeethArray);
    } else if (
      updatedupperTeethArray[index].image.includes("/upperTeeth/4th_row/")
    ) {
      updatedupperTeethArray[index].image = upperTeethArray[index].image;
      setUpperTeeths(updatedupperTeethArray);
      updatedLowerTeethArray[index].image = updatedLowerTeethArray[
        index
      ].image.replace("row_4", "row_1");
      setLowerTeeths(updatedLowerTeethArray);
    }
  };
  const handleCavity = (value: number, index: number) => {
    let clicksCopy = JSON.parse(JSON.stringify(clicks));
    if (cavityModal.value === 2) {
      clicksCopy[cavityModal.index].value2 = value;
    }
    if (cavityModal.value === 3) {
      clicksCopy[cavityModal.index].value3 = value;
    }
    if (cavityModal.value === 4) {
      clicksCopy[cavityModal.index].value4 = value;
    }
    if (cavityModal.value === 5) {
      clicksCopy[cavityModal.index].value5 = value;
    }
    if (cavityModal.value === 6) {
      clicksCopy[cavityModal.index].value6 = value;
    }
    if (cavityModal.value === 7) {
      clicksCopy[cavityModal.index].value7 = value;
    }
    setClicks(clicksCopy);
    setCavityModal(null);
  };

  return (
    <div className="px-[1%] text-black">
      <HeaderComponent />
      <div className="flex gap-10 mt-5">
        {/* ***************************Left Side********************* */}
        <div className="w-[1400px]">
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
                <button className="w-[100px]"></button>
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
                <p className="w-[100px]">Mobility</p>
                {mobilityData.map((item, index) => (
                  <div
                    key={index}
                    style={{ flex: 1 }}
                    className="flex justify-center"
                  >
                    <MobilityInput
                      value={item.value}
                      index={index}
                      setMobilityData={setMobilityData}
                    />
                  </div>
                ))}
              </div>
              {/* Implant */}
              <div className="flex justify-between w-full gap-3 mt-5 text-[12px] overflow-hidden">
                <p className="w-[100px]">Implant</p>
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
                <p className="w-[100px]">Furcation</p>
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
              {/* Pocket Depth */}
              <div className="flex justify-between w-full gap-3 mt-5 text-[12px] overflow-hidden">
                <p className="w-[100px]">Pocket Depth</p>
                {pocketDepthData.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-center "
                    style={{ flex: 1 }}
                  >
                    <PocketDepthInput
                      value={item.value}
                      pocketDepthData={pocketDepthData}
                      setPocketDepthData={setPocketDepthData}
                      index={index}
                    />
                  </div>
                ))}
              </div>
              {/* Recession */}
              <div className="flex justify-between w-full gap-3 mt-5 text-[12px] overflow-hidden">
                <p className="w-[100px]">Recession</p>
                {recessionData.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-center"
                    style={{
                      flex: 1,
                    }}
                  >
                    <RecessionInput
                      value={item.value}
                      recessionData={recessionData}
                      setRecessionData={setRecessionData}
                      index={index}
                    />
                  </div>
                ))}
              </div>
              {/* Bleeding */}
              <div className="flex justify-between w-full gap-3 mt-5 text-[12px] overflow-hidden">
                <p className="w-[100px]">Bleeding</p>
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
                <p className="w-[100px]">Plaque</p>
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
              {/* ********
                 teeths portion #######################
                     *********  */}
              {/* UPPERTEEETH ************ */}
              <div
                style={{
                  overflow: !cavityModal ? "hidden" : "visible",
                }}
                className="flex justify-between relative w-full gap-3 mt-5 text-[14px] "
              >
                <div style={{ width: "100px" }}></div>
                <div className="absolute top-0 left-0 w-full bg-gradient-to-b from-[#fdf6f7] to-[#f7dee1] h-[84px] z-0"></div>
                <div className="absolute top-[84px] left-0 w-full z-20 bg-red-500 h-[2px]"></div>
                <div className="absolute top-0 h-[84px] w-full left-0 flex items-end ">
                  <CharLine pocketDepthData={pocketDepthData} />
                </div>
                <div className="absolute top-0 h-[175px] w-full left-0 flex items-end ">
                  <ChartLineBlue recessionData={recessionData} />
                </div>
                {upperTeeths.map((item, index) => (
                  <div
                    key={index}
                    className={`flex justify-center h-[150px] relative ${
                      bleedingData[index]?.value.some(
                        (item) => item === "red" || item === "#dbc027"
                      )
                        ? `bg-[#ffc1c1]`
                        : ""
                    }`}
                    style={{ flex: 1 }}
                  >
                    <div className="relative ">
                      <div className="h-full flex items-center justify-center">
                        <Image
                          src={item.image}
                          width={200}
                          height={200}
                          className={`${heightWidthUpperPortion(
                            index
                          )} w-full object-contain z-20 cursor-pointer ${
                            index > 7 && "img_flip"
                          } `}
                          alt={"tachados"}
                        />
                      </div>
                      {item.cavity === 1 && (
                        <Image
                          src={`/upperTeeth/bottompart/white/${index + 1}.webp`}
                          width={200}
                          height={200}
                          className={`object-contain z-20 cursor-pointer absolute bottom-0 left-0 ${upperCavityPosition(
                            index
                          )}`}
                          alt={"tachados"}
                        />
                      )}
                      {item.cavity === 2 && (
                        <Image
                          src={`/upperTeeth/bottompart/golden/${
                            index + 1
                          }.webp`}
                          width={100}
                          height={100}
                          className={`object-contain z-20 cursor-pointer absolute bottom-0 left-0 ${upperCavityPosition(
                            index
                          )}`}
                          alt={"tachados"}
                        />
                      )}
                      {item.cavity === 3 && (
                        <Image
                          src={`/upperTeeth/bottompart/blue/${index + 1}.webp`}
                          width={100}
                          height={100}
                          className={`object-contain z-20 cursor-pointer absolute bottom-0 left-0 ${upperCavityPosition(
                            index
                          )}`}
                          alt={"tachados"}
                        />
                      )}

                      <div className="absolute top-[60px] left-[40%]">
                        {furcationData[index]?.value}
                      </div>

                      {/* if at top someone clicked draw yelow point  */}
                      <DotsupperTeeth
                        setClicks={setClicks}
                        clicks={clicks}
                        setCavityModal={setCavityModal}
                        updateImages={() => updateImages(index)}
                        index={index}
                      />
                    </div>
                    <div className="h-[150px] w-full object-cover z-[999] bg-transparent absolute top-0 left-0 "></div>
                    {cavityModal?.index === index && (
                      <>
                        <CavityModa
                          handleChangeCavity={handleCavity}
                          index={index}
                          setSelectedTooth={setCavityModal}
                        />
                      </>
                    )}
                  </div>
                ))}
              </div>
              {/* OCC ************ */}
              <div className="flex justify-between relative w-full gap-3 mt-5 text-[14px]overflow-hidde bg-gradient-to-b from-[#fdf6f7] to-[#f7dee1] z-30">
                <div style={{ width: "100px" }}></div>
                {occTeeths.map((item, index) => (
                  <div
                    key={index}
                    className={`flex justify-center h-[70px] z-10 relative ${
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
                    <div className="h-full w-full flex items-center">
                      <Image
                        src={item.image}
                        width={200}
                        height={200}
                        onClick={() => setSelectedTooth(index)}
                        className={`${heightMiddlePortion(
                          index
                        )} w-auto object-contain cursor-pointer`}
                        alt={"tachados"}
                      />
                    </div>
                    <DotsupperTeeth
                      setClicks={setClicks}
                      isOCCTeeths={true}
                      clicks={clicks}
                      setCavityModal={setCavityModal}
                      updateImages={() => setSelectedTooth(index)}
                      index={index}
                    />
                    {/* if at top someone clicked draw yelow point  */}
                    {/* <DotsMiddleTeeth clicks={clicks} index={index} /> */}
                    {selectedTooth === index && (
                      <div className="bg-white shadow-md absolute top-full right-[-170px] w-[400px] text-[13px] p-3 z-[999999]">
                        <div
                          onClick={() => handleChangeCavity(1, index)}
                          className="flex border-b border-gray-400 pb-1 items-center gap-2 cursor-pointer"
                        >
                          <Image
                            src={"/occImages/row_4/1.webp"}
                            width={50}
                            height={50}
                            className="h-[30px] w-auto object-contain "
                            alt={"tachados"}
                          />
                          <p>Ceramic/ Combined metal and ceramic prosthesis</p>
                        </div>
                        <div
                          onClick={() => handleChangeCavity(2, index)}
                          className="flex mt-2 border-b border-gray-400 pb-1 items-center gap-2 cursor-pointer"
                        >
                          <Image
                            src={"/occImages/row_6/1.webp"}
                            width={50}
                            height={50}
                            className="h-[30px] w-auto object-contain "
                            alt={"tachados"}
                          />
                          <p>Metal prosthesis</p>
                        </div>
                        <div
                          onClick={() => handleChangeCavity(3, index)}
                          className="flex border-b border-gray-400 pb-1 mt-2 items-center gap-2 cursor-pointer"
                        >
                          <Image
                            src={"/occImages/row_7/1.webp"}
                            width={50}
                            height={50}
                            className="h-[30px] w-auto object-contain "
                            alt={"tachados"}
                          />
                          <p>Faulty prosthesis</p>
                        </div>
                        <div
                          onClick={() => setSelectedTooth(null)}
                          className="border border-[#46befc] hover:bg-[#46befc] rounded-md mt-2 flex justify-center py-2 cursor-pointer"
                        >
                          Cancel
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              {/* LOWERTEETH ************ */}
              <div
                style={{
                  overflow: !cavityModal ? "hidden" : "visible",
                  zIndex: selectedTooth !== null ? 2 : 9999,
                }}
                className="flex justify-between relative w-full gap-3 mt-5 text-[14px] "
              >
                <div style={{ width: "100px" }}></div>
                <div className="absolute top-0 left-0 w-full bg-gradient-to-b from-[#fdf6f7] to-[#f7dee1] h-[84px] z-0"></div>
                <div className="absolute top-[84px] left-0 w-full z-20 bg-red-500 h-[2px]"></div>
                <div className="absolute top-0 h-[84px] w-full left-0 flex items-end ">
                  <CharLine pocketDepthData={P_PocketDepthData} />
                </div>
                <div className="absolute top-0 h-[175px] w-full left-0 flex items-end ">
                  <ChartLineBlue recessionData={P_recessionData} />
                </div>
                {lowerTeeths.map((item, index) => (
                  <div
                    key={index}
                    className={`flex justify-center h-[150px] relative ${
                      P_BleedingData[index]?.value.some(
                        (item) => item === "red" || item === "#dbc027"
                      )
                        ? `bg-[#ffc1c1]`
                        : ""
                    }`}
                    style={{ flex: 1 }}
                  >
                    <div className="relative ">
                      <div className="h-full flex items-center justify-center">
                        <Image
                          src={item.image}
                          width={200}
                          height={200}
                          className={`${heightWidthUpperPortion(
                            index
                          )} w-full object-contain z-20 cursor-pointer ${
                            index > 7 && "img_flip"
                          }`}
                          alt={"tachados"}
                        />
                      </div>
                      <div className="absolute top-[50px] left-[20%] flex gap-2">
                        <p>{P_furcationData[index]?.value_one}</p>
                        <p>{P_furcationData[index]?.value_two}</p>
                      </div>
                      {item.cavity === 1 && (
                        <Image
                          src={`/lowerTeeth/bottompart/white/${index + 1}.webp`}
                          width={100}
                          height={100}
                          className={`object-contain z-20 cursor-pointer absolute bottom-0 left-0 ${upperCavityPosition(
                            index
                          )}`}
                          alt={"tachados"}
                        />
                      )}
                      {item.cavity === 2 && (
                        <Image
                          src={`/lowerTeeth/bottompart/golden/${
                            index + 1
                          }.webp`}
                          width={100}
                          height={100}
                          className={`object-contain z-20 cursor-pointer absolute bottom-0 left-0 ${upperCavityPosition(
                            index
                          )}`}
                          alt={"tachados"}
                        />
                      )}
                      {item.cavity === 3 && (
                        <Image
                          src={`/lowerTeeth/bottompart/blue/${index + 1}.webp`}
                          width={100}
                          height={100}
                          className={`object-contain z-20 cursor-pointer absolute bottom-0 left-0 ${upperCavityPosition(
                            index
                          )}`}
                          alt={"tachados"}
                        />
                      )}

                      {/* if at top someone clicked draw yelow point  */}
                      <DotsupperTeeth
                        setClicks={setClicks}
                        clicks={clicks}
                        setCavityModal={setCavityModal}
                        updateImages={() => updateImages(index)}
                        index={index}
                      />
                    </div>
                    {/* <div className="h-[150px] w-full object-cover z-[999] bg-transparent absolute top-0 left-0 "></div> */}
                  </div>
                ))}
              </div>

              {/* ######################## PALATINO  */}
              <div className="flex justify-between w-full gap-3 mt-5 text-[12px] overflow-hidden">
                <p className="w-[100px]">Furcation</p>
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
              {/* Pocket Depth */}
              <div className="flex justify-between w-full gap-3 mt-5 text-[12px] overflow-hidden">
                <p className="w-[100px]">Pocket Depth</p>
                {P_PocketDepthData.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-center "
                    style={{ flex: 1 }}
                  >
                    <PocketDepthInput
                      value={item.value}
                      pocketDepthData={P_PocketDepthData}
                      setPocketDepthData={setP_PocketDepthData}
                      index={index}
                    />
                  </div>
                ))}
              </div>
              {/* Recession */}
              <div className="flex justify-between w-full gap-3 mt-5 text-[12px] overflow-hidden">
                <p className="w-[100px]">Recession</p>
                {P_recessionData.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-center"
                    style={{
                      flex: 1,
                    }}
                  >
                    <RecessionInput
                      value={item.value}
                      recessionData={P_recessionData}
                      setRecessionData={setP_RecessionData}
                      index={index}
                    />
                  </div>
                ))}
              </div>
              {/* Bleeding */}
              <div className="flex justify-between w-full gap-3 mt-5 text-[12px] overflow-hidden">
                <p className="w-[100px]">Bleeding</p>
                {P_BleedingData.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-center"
                    style={{ flex: 1 }}
                  >
                    <P_BleedingInput
                      value={item.value}
                      bleedingData={P_BleedingData}
                      setBleedingData={setP_BleedingData}
                      index={index}
                    />
                  </div>
                ))}
              </div>
              {/* Plaque */}
              <div className="flex justify-between w-full gap-3 mt-5 text-[12px] overflow-hidden">
                <p className="w-[100px]">Plaque</p>
                {P_PlaqueData.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-center"
                    style={{
                      flex: 1,
                    }}
                  >
                    <P_PlaqueInput
                      value={item.value}
                      plaqueData={P_PlaqueData}
                      setPlaqueData={setP_PlaqueData}
                      index={index}
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
        {/* <RightSideCharting /> */}
      </div>
    </div>
  );
}
