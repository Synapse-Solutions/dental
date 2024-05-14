import React from "react";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PictureAsPdfOutlinedIcon from "@mui/icons-material/PictureAsPdfOutlined";
import FolderCopyOutlinedIcon from "@mui/icons-material/FolderCopyOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";

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
    <div className="px-[10%]">
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
        <div className="w-[80%] bg-white rounded-md p-5">
          <div className="w-full flex justify-between items-center">
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
          <div className="w-full">
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
          </div>
        </div>
      </div>
    </div>
  );
}
