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
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import RadarChart from "./RadarChart";
import RoundChart from "./RoundChart";
import RoundCharti from "./RoundCharti";
import LineChart from "./LineChart";
import ProbingChart from "./ProbingChart";
import TeethLostChart from "./TeethLostChart";

export default function RightSideCharting() {
  const [leftSideActiveTab, setLeftSideActiveTab] = useState(1);
  const [selectedSmoking, setSelectedSmoking] = useState<any>(2);
  const [generaticDisorders, setGeneraticDisorders] = useState(false);
  const [editorContent, setEditorContent] = useState("");

  const handleEditorChange = (content: any) => {
    setEditorContent(content);
  };
  return (
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

          <div className=" flex w-full my-4">
            <div className="flex items-center w-1/2 flex-col gap-2">
              <p>Plaque</p>
              <div className="w-[70%]">
                <RoundChart />
              </div>
            </div>
            <div className="flex items-center w-1/2 flex-col gap-2">
              <p>Bleeding</p>
              <div className="w-[70%]">
                <RoundCharti />
              </div>
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
  );
}
