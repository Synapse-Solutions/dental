"use client";
import React, { useEffect, useState } from "react";
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
} from "@/app/lower_teethImagesArrays/upperTeethArray";
import {
  lowerTeethArray,
  lowerTeethArray1,
} from "@/app/lower_teethImagesArrays/lowerTeethArray";
import {
  occImagesArray,
  occImagesArray1,
} from "@/app/lower_teethImagesArrays/occImages";
import FurcationInput from "../sharedcomponents/lower_teeths_chart_components/Vestibular/FurcationInput";
import PocketDepthInput from "../sharedcomponents/lower_teeths_chart_components/Vestibular/PocketDepthInput";
import RecessionInput from "../sharedcomponents/lower_teeths_chart_components/Vestibular/RecessionInput";
import BleedingInput from "../sharedcomponents/lower_teeths_chart_components/Vestibular/BleedingInput";
import PlaqueInput from "../sharedcomponents/lower_teeths_chart_components/Vestibular/PlaqueInput";
import P_FurcationInput from "../sharedcomponents/lower_teeths_chart_components/Palatino/P_FurcationInput";
import P_BleedingInput from "../sharedcomponents/lower_teeths_chart_components/Palatino/P_BleedingInput";
import P_PlaqueInput from "../sharedcomponents/lower_teeths_chart_components/Palatino/P_PlaqueInput";
import HeaderComponent from "../sharedcomponents/HeaderComponent";
import { ImplantArray } from "@/app/lowerTeethJsonArrays/ImplantArray";
import { FurcationArray } from "@/app/lowerTeethJsonArrays/FurcationArray";
import { BleedingArray } from "@/app/lowerTeethJsonArrays/BleedingArray";
import { PlaqueArray } from "@/app/lowerTeethJsonArrays/PlaqueArray";
import { P_FurcationArray } from "@/app/lowerTeethJsonArrays/P_FurcationArray";
import { P_BleedingArray } from "@/app/lowerTeethJsonArrays/P_BleedingArray";
import { P_PlaqueArray } from "@/app/lowerTeethJsonArrays/P_PlaqueArray";
import { PocketDepthArray } from "@/app/lowerTeethJsonArrays/PocketDepthArray";
import { P_PocketDepthArray } from "@/app/lowerTeethJsonArrays/P_PocketDepthArray";
import { RecessionArray } from "@/app/lowerTeethJsonArrays/RecessionArray";
import { P_RecessionArray } from "@/app/lowerTeethJsonArrays/P_RecessionArray";
import { MobilityArray } from "@/app/lowerTeethJsonArrays/MobilityArray";
import CharLine from "../sharedcomponents/lower_teeths_chart_components/ChartLine";
import ChartLineBlue from "../sharedcomponents/lower_teeths_chart_components/ChartLineBlue";
import DotsLowerTeeth from "@/app/sharedcomponents/lower_teeths_chart_components/DotsLowerTeeth";
import CavityModa from "../sharedcomponents/CavityModa";
import { clicksArray } from "@/app/lowerTeethJsonArrays/upperTeethClicksArray";
import MobilityInput from "../sharedcomponents/lower_teeths_chart_components/Vestibular/MobilityInput";
import {
  heightMiddlePortion,
  heightWidthUpperPortion,
} from "@/app/sharedcomponents/lower_teeths_chart_components/HeightWidthUpperTeeths";
import { upperCavityPosition } from "@/app/sharedcomponents/lower_teeths_chart_components/CavityPositions";
import P_PocketDepthInput from "../sharedcomponents/lower_teeths_chart_components/Palatino/P_PocketDepthInput";
import P_RecessionInput from "../sharedcomponents/lower_teeths_chart_components/Palatino/P_RecessionInput";

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
interface Props {
  setLowerTeethsData: any;
  lowerTeethsData: any;
  isUserExist: any;
}
export default function LowerTeethCharting(props: Props) {
  const [upperTeeths, setUpperTeeths] = useState(
    props.isUserExist ? props.lowerTeethsData.upperTeeths : upperTeethArray
  );
  const [arr, setarr] = useState(
    props.isUserExist ? props.lowerTeethsData.arr : array
  );
  const [lowerTeeths, setLowerTeeths] = useState(
    props.isUserExist ? props.lowerTeethsData.lowerTeeths : lowerTeethArray
  );
  const [occTeeths, setOccTeeths] = useState(
    props.isUserExist ? props.lowerTeethsData.occTeeths : occImagesArray
  );
  const [implantData, setImplantData] = useState(
    props.isUserExist ? props.lowerTeethsData.implantData : ImplantArray
  );
  const [furcationData, setFurcationData] = useState(
    props.isUserExist ? props.lowerTeethsData.furcationData : FurcationArray
  );
  const [P_furcationData, setP_FurcationData] = useState(
    props.isUserExist ? props.lowerTeethsData.P_furcationData : P_FurcationArray
  );
  const [bleedingData, setBleedingData] = useState(
    props.isUserExist ? props.lowerTeethsData.bleedingData : BleedingArray
  );
  const [plaqueData, setPlaqueData] = useState(
    props.isUserExist ? props.lowerTeethsData.plaqueData : PlaqueArray
  );
  const [P_BleedingData, setP_BleedingData] = useState(
    props.isUserExist ? props.lowerTeethsData.P_BleedingData : P_BleedingArray
  );
  const [P_PlaqueData, setP_PlaqueData] = useState(
    props.isUserExist ? props.lowerTeethsData.P_PlaqueData : P_PlaqueArray
  );
  const [pocketDepthData, setPocketDepthData] = useState(
    props.isUserExist ? props.lowerTeethsData.pocketDepthData : PocketDepthArray
  );
  const [P_PocketDepthData, setP_PocketDepthData] = useState(
    props.isUserExist
      ? props.lowerTeethsData.P_PocketDepthData
      : P_PocketDepthArray
  );

  const [recessionData, setRecessionData] = useState(
    props.isUserExist ? props.lowerTeethsData.recessionData : RecessionArray
  );
  const [P_recessionData, setP_RecessionData] = useState(
    props.isUserExist ? props.lowerTeethsData.P_recessionData : P_RecessionArray
  );
  const [selectedTooth, setSelectedTooth] = useState<any>(null);
  const [clicks, setClicks] = useState<any>(
    props.isUserExist ? props.lowerTeethsData.clicks : clicksArray
  );
  const [cavityModal, setCavityModal] = useState<any>(null);
  const [mobilityData, setMobilityData] = useState(
    props.isUserExist ? props.lowerTeethsData.mobilityData : MobilityArray
  );

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
      updatedOccTeethArray[index].image =
        "/lower_teeth_images/occImages/row_4/2.webp";
      updatedUpperTeethArray[index].cavity = 1;
      updatedLowerTeethArray[index].cavity = 1;
    } else if (value === 2) {
      updatedOccTeethArray[index].image =
        "/lower_teeth_images/occImages/row_6/2.webp";
      updatedUpperTeethArray[index].cavity = 2;
      updatedLowerTeethArray[index].cavity = 2;
    } else if (value === 3) {
      updatedOccTeethArray[index].image =
        "/lower_teeth_images/occImages/row_7/2.webp";
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

  const onClickImplement = (index: number) => {
    let copyArray = [...arr];
    copyArray[index].isSelected = !copyArray[index].isSelected;
    setarr(copyArray);
  };

  useEffect(() => {
    props.setLowerTeethsData({
      arr,
      mobilityData,
      implantData,
      furcationData,
      pocketDepthData,
      recessionData,
      bleedingData,
      plaqueData,
      upperTeeths,
      occTeeths,
      lowerTeeths,
      P_furcationData,
      P_PocketDepthData,
      P_recessionData,
      P_BleedingData,
      P_PlaqueData,
      clicks,
    });
  }, [
    arr,
    mobilityData,
    implantData,
    furcationData,
    pocketDepthData,
    recessionData,
    bleedingData,
    plaqueData,
    upperTeeths,
    occTeeths,
    lowerTeeths,
    P_furcationData,
    P_PocketDepthData,
    P_recessionData,
    P_BleedingData,
    P_PlaqueData,
    clicks,
  ]);

  return (
    <div className="px-[1%] text-black">
      <div className="flex gap-10 mt-5">
        {/* ***************************Left Side********************* */}
        <div className="max-w-[1355px] min-w-[1355px]">
          <div className="w-full bg-white rounded-md py-3">
            <div className="w-full p-5">
              <div className="flex justify-between w-full gap-3 mt-5 text-[12px]">
                <button className="w-[100px]"></button>
                {arr.map((item: any, index: number) => (
                  <button
                    onClick={() => onClickImplement(index)}
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
                {mobilityData.map((item: any, index: number) => (
                  <div
                    key={index}
                    style={{ flex: 1 }}
                    className={`flex justify-center ${
                      arr[index].isSelected === false
                        ? "opacity-0 pointer-events-none"
                        : ""
                    }`}
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
                {implantData.map((item: any, index: number) => (
                  <div
                    key={index}
                    className={`flex justify-center ${
                      arr[index].isSelected === false
                        ? "opacity-0 pointer-events-none"
                        : ""
                    }`}
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
                {furcationData.map((item: any, index: number) => (
                  <div
                    key={index}
                    className={`flex justify-center ${
                      implantData[index].isSelected
                        ? "opacity-0 pointer-events-none"
                        : ""
                    } ${
                      arr[index].isSelected === false
                        ? "opacity-0 pointer-events-none"
                        : ""
                    }`}
                    style={{ flex: 1 }}
                  >
                    {[0, 1, 2, 13, 14, 15].includes(index) ? (
                      <FurcationInput
                        value={item.value}
                        furcationData={furcationData}
                        setFurcationData={setFurcationData}
                        index={index}
                      />
                    ) : null}
                  </div>
                ))}
              </div>
              {/* Pocket Depth */}
              <div className="flex justify-between w-full gap-3 mt-5 text-[12px] overflow-hidden">
                <p className="w-[100px]">Pocket Depth</p>
                {pocketDepthData.map((item: any, index: number) => (
                  <div
                    key={index}
                    className={`flex justify-center ${
                      arr[index].isSelected === false
                        ? "opacity-0 pointer-events-none"
                        : ""
                    }`}
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
                {recessionData.map((item: any, index: number) => (
                  <div
                    key={index}
                    className={`flex justify-center ${
                      arr[index].isSelected === false
                        ? "opacity-0 pointer-events-none"
                        : ""
                    }`}
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
                {bleedingData.map((item: any, index: number) => (
                  <div
                    key={index}
                    className={`flex justify-center ${
                      arr[index].isSelected === false
                        ? "opacity-0 pointer-events-none"
                        : ""
                    }`}
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
                {plaqueData.map((item: any, index: number) => (
                  <div
                    key={index}
                    className={`flex justify-center ${
                      arr[index].isSelected === false
                        ? "opacity-0 pointer-events-none"
                        : ""
                    }`}
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
                <div
                  className={`absolute bottom-0 left-0 w-full bg-[#f7dee1] h-[84px] z-0`}
                ></div>
                {/* <div className="absolute bottom-[84px] left-0 w-full z-20 bg-red-500 h-[2px]"></div> */}
                <div className="absolute top-0 h-[70px] w-full left-0 flex items-end ">
                  <CharLine pocketDepthData={pocketDepthData} />
                </div>
                <div className="absolute top-0 h-[70px] w-full left-0 flex items-end ">
                  <ChartLineBlue recessionData={recessionData} />
                </div>
                {upperTeeths.map((item: any, index: number) => (
                  <div
                    key={index}
                    className={`flex justify-center h-[150px] relative ${
                      arr[index].isSelected === false
                        ? "opacity-0 pointer-events-none"
                        : ""
                    }`}
                    style={{ flex: 1 }}
                  >
                    <div
                      className={`absolute bottom-0 left-0 h-[84px] w-full ${
                        bleedingData[index].value.every(
                          (item: any) => item !== "grey"
                        )
                          ? "bg-[#f75555]"
                          : bleedingData[index]?.value.some(
                              (item: any) =>
                                item === "red" || item === "#dbc027"
                            )
                          ? `bg-[#ffc1c1]`
                          : ""
                      }`}
                    ></div>
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
                          src={`/lower_teeth_images/upperTeeth/bottompart/white/${
                            index + 1
                          }.webp`}
                          width={200}
                          height={200}
                          className={`object-contain z-20 cursor-pointer absolute left-0 ${upperCavityPosition(
                            index
                          )}`}
                          alt={"tachados"}
                        />
                      )}
                      {item.cavity === 2 && (
                        <Image
                          src={`/lower_teeth_images/upperTeeth/bottompart/golden/${
                            index + 1
                          }.webp`}
                          width={100}
                          height={100}
                          className={`object-contain z-20 cursor-pointer absolute left-0 ${upperCavityPosition(
                            index
                          )}`}
                          alt={"tachados"}
                        />
                      )}
                      {item.cavity === 3 && (
                        <Image
                          src={`/lower_teeth_images/upperTeeth/bottompart/blue/${
                            index + 1
                          }.webp`}
                          width={100}
                          height={100}
                          className={`object-contain z-20 cursor-pointer absolute left-0 ${upperCavityPosition(
                            index
                          )}`}
                          alt={"tachados"}
                        />
                      )}

                      <div className="absolute top-[60px] left-[40%] z-50">
                        {furcationData[index]?.value}
                      </div>

                      {/* if at top someone clicked draw yelow point  */}
                      <DotsLowerTeeth
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
                {occTeeths.map((item: any, index: number) => (
                  <div
                    key={index}
                    className={`flex justify-center h-[70px] z-10 relative ${
                      arr[index].isSelected === false
                        ? "opacity-0 pointer-events-none"
                        : ""
                    } ${
                      bleedingData[index].value.every(
                        (item: any) => item !== "grey"
                      )
                        ? "bg-[#f75555]"
                        : bleedingData[index]?.value.some(
                            (item: any) => item === "red" || item === "#dbc027"
                          )
                        ? `bg-[#ffc1c1]`
                        : ""
                    }`}
                    style={{
                      flex: 1,
                    }}
                  >
                    <div className="h-full w-full flex items-center justify-center ">
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
                    <DotsLowerTeeth
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
                            src={"/lower_teeth_images/occImages/row_4/1.webp"}
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
                            src={"/lower_teeth_images/occImages/row_6/1.webp"}
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
                            src={"/lower_teeth_images/occImages/row_7/1.webp"}
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
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-b from-[#fdf6f7] to-[#f7dee1] h-[84px] z-0"></div>
                <div className="absolute bottom-[84px] left-0 w-full z-20 bg-red-500 h-[2px]"></div>
                <div className="absolute top-0 h-[65px] w-full left-0 flex items-end ">
                  <CharLine pocketDepthData={P_PocketDepthData} />
                </div>
                <div className="absolute top-0 h-[65px] w-full left-0 flex items-end ">
                  <ChartLineBlue recessionData={P_recessionData} />
                </div>

                {lowerTeeths.map((item: any, index: number) => (
                  <div
                    key={index}
                    className={`flex justify-center h-[150px] relative ${
                      arr[index].isSelected === false
                        ? "opacity-0 pointer-events-none"
                        : ""
                    }`}
                    style={{ flex: 1 }}
                  >
                    <div
                      className={`absolute bottom-0 left-0 h-[84px] w-full ${
                        P_BleedingData[index].value.every(
                          (item: any) => item !== "grey"
                        )
                          ? "bg-[#f75555]"
                          : P_BleedingData[index]?.value.some(
                              (item: any) =>
                                item === "red" || item === "#dbc027"
                            )
                          ? `bg-[#ffc1c1]`
                          : ""
                      }`}
                    ></div>
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
                      <div className="absolute top-[50px] left-[20%] flex gap-2 z-[999]">
                        <p>{P_furcationData[index]?.value_one}</p>
                        <p>{P_furcationData[index]?.value_two}</p>
                      </div>
                      {item.cavity === 1 && (
                        <Image
                          src={`/lower_teeth_images/lowerTeeth/bottompart/white/${
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
                      {item.cavity === 2 && (
                        <Image
                          src={`/lower_teeth_images/lowerTeeth/bottompart/golden/${
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
                          src={`/lower_teeth_images/lowerTeeth/bottompart/blue/${
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

                      {/* if at top someone clicked draw yelow point  */}
                      <DotsLowerTeeth
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
                {P_furcationData.map((item: any, index: number) => (
                  <div
                    key={index}
                    className={`flex justify-center gap-1 ${
                      implantData[index].isSelected
                        ? "opacity-0 pointer-events-none"
                        : ""
                    } ${
                      arr[index].isSelected === false
                        ? "opacity-0 pointer-events-none"
                        : ""
                    }`}
                    style={{ flex: 1 }}
                  >
                    {[0, 1, 2, 4, 11, 13, 14, 15].includes(index) ? (
                      <>
                        {[0, 1, 2, 13, 14, 15].includes(index) && (
                          <P_FurcationInput
                            value={item.value_one}
                            P_furcationData={P_furcationData}
                            first={true}
                            setP_FurcationData={setP_FurcationData}
                            index={index}
                          />
                        )}
                        <P_FurcationInput
                          value={item.value_two}
                          P_furcationData={P_furcationData}
                          first={false}
                          setP_FurcationData={setP_FurcationData}
                          index={index}
                        />
                      </>
                    ) : null}
                  </div>
                ))}
              </div>
              {/* Pocket Depth */}
              <div className="flex justify-between w-full gap-3 mt-5 text-[12px] overflow-hidden">
                <p className="w-[100px]">Pocket Depth</p>
                {P_PocketDepthData.map((item: any, index: number) => (
                  <div
                    key={index}
                    className={`flex justify-center ${
                      arr[index].isSelected === false
                        ? "opacity-0 pointer-events-none"
                        : ""
                    }`}
                    style={{ flex: 1 }}
                  >
                    <P_PocketDepthInput
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
                {P_recessionData.map((item: any, index: number) => (
                  <div
                    key={index}
                    className={`flex justify-center ${
                      arr[index].isSelected === false
                        ? "opacity-0 pointer-events-none"
                        : ""
                    }`}
                    style={{
                      flex: 1,
                    }}
                  >
                    <P_RecessionInput
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
                {P_BleedingData.map((item: any, index: number) => (
                  <div
                    key={index}
                    className={`flex justify-center ${
                      arr[index].isSelected === false
                        ? "opacity-0 pointer-events-none"
                        : ""
                    }`}
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
                {P_PlaqueData.map((item: any, index: number) => (
                  <div
                    key={index}
                    className={`flex justify-center ${
                      arr[index].isSelected === false
                        ? "opacity-0 pointer-events-none"
                        : ""
                    }`}
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
