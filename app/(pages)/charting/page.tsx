"use client";
import LowerTeethCharting from "@/app/components/LowerTeethCharting";
import UpperTeethCharting from "@/app/components/UpperTeethCharting";
import React, { useEffect, useState } from "react";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PictureAsPdfOutlinedIcon from "@mui/icons-material/PictureAsPdfOutlined";
import FolderCopyOutlinedIcon from "@mui/icons-material/FolderCopyOutlined";
import HeaderComponent from "@/app/sharedcomponents/HeaderComponent";
import axios from "axios";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/router";

export default function page() {
  const pathname = usePathname();
  const router = useSearchParams();
  console.log("🚀 ~ page ~ pathname:", router.get("id"));

  const [upperTeethsData, setUpperTeethsData] = useState(null);
  const [lowerTeethsData, setLowerTeethsData] = useState(null);
  const [isUserExist, setIsUserExist] = useState(false);

  const onSaveData = async () => {
    let payload = {
      upperTeethsData,
      lowerTeethsData,
    };
    try {
      const response = await axios.post(
        "https://daniyal.emresaracoglu.com/post.php",
        payload,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("🚀 ~ onSaveData ~ response:", response.data);
    } catch (error) {
      console.log("🚀 ~ onSaveData ~ error:", error);
    }
  };
  useEffect(() => {
    if (router.get("id")) {
      setIsUserExist(true);
      getData();
    }
  }, []);
  const getData = async () => {
    try {
      const response = await axios.get(
        "https://daniyal.emresaracoglu.com/get.php?id=" + router.get("id")
      );
      setUpperTeethsData(response.data.upperTeethsData);
      setLowerTeethsData(response.data.lowerTeethsData);
    } catch (error) {
      console.log("🚀 ~ getData ~ error:", error);
    }
  };
  return (
    <div className="max-w-[1400px]">
      <HeaderComponent />
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
          <div
            onClick={onSaveData}
            className="flex gap-2 items-center cursor-pointer"
          >
            <p>Save</p>
            <FolderCopyOutlinedIcon fontSize="small" />
          </div>
        </div>
      </div>
      {/* Teeths components */}
      <UpperTeethCharting
        setUpperTeethsData={setUpperTeethsData}
        upperTeethsData={upperTeethsData}
        isUserExist={isUserExist}
      />
      ;
      <div className="mt-[50px]">
        <LowerTeethCharting setLowerTeethsData={setLowerTeethsData} />
      </div>
    </div>
  );
}
