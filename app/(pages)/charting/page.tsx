"use client";
import LowerTeethCharting from "@/app/components/LowerTeethCharting";
import UpperTeethCharting from "@/app/components/UpperTeethCharting";
import React, { useEffect, useState } from "react";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PictureAsPdfOutlinedIcon from "@mui/icons-material/PictureAsPdfOutlined";
import FolderCopyOutlinedIcon from "@mui/icons-material/FolderCopyOutlined";
import HeaderComponent from "@/app/sharedcomponents/HeaderComponent";
import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "react-toastify";

export default function page() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [upperTeethsData, setUpperTeethsData] = useState(null);
  const [lowerTeethsData, setLowerTeethsData] = useState(null);
  const [isUserExist, setIsUserExist] = useState<any>(null);

  const onSaveData = async () => {
    if (isUserExist) {
      updateData();
      return;
    }
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
      let id = response.data?.id || "";
      router.push("/charting?id=" + id);
      toast.success("Data Saved Successfully");
      console.log("🚀 ~ onSaveData ~ response:", response.data);
    } catch (error) {
      console.log("🚀 ~ onSaveData ~ error:", error);
    }
  };

  const updateData = async () => {
    let payload = {
      upperTeethsData,
      lowerTeethsData,
    };
    try {
      const response = await axios.put(
        "https://daniyal.emresaracoglu.com/update.php?id=" +
          searchParams.get("id"),
        payload,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      toast.success("Data Updated Successfully");
      console.log("🚀 ~ onSaveData ~ response:", response.data);
    } catch (error) {
      console.log("🚀 ~ onSaveData ~ error:", error);
    }
  };
  useEffect(() => {
    if (searchParams.get("id")) {
      getData();
    } else {
      setIsUserExist(false);
    }
  }, []);
  const getData = async () => {
    try {
      const response = await axios.get(
        "https://daniyal.emresaracoglu.com/get.php?id=" + searchParams.get("id")
      );
      setUpperTeethsData(response.data.upperTeethsData);
      setLowerTeethsData(response.data.lowerTeethsData);
      setIsUserExist(true);
    } catch (error) {
      console.log("🚀 ~ getData ~ error:", error);
    }
  };
  if (isUserExist === null) {
    return <div>Loading...</div>;
  }
  return (
    <div className="max-w-[1400px]">
      <HeaderComponent />
      <div className="w-full flex justify-between items-center p-5">
        <input type="date" />
        <div className=" text-black flex gap-3 items-center text-[14px]">
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
            <p>{isUserExist ? "Update" : "Save"}</p>
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
        <LowerTeethCharting
          setLowerTeethsData={setLowerTeethsData}
          isUserExist={isUserExist}
          lowerTeethsData={lowerTeethsData}
        />
      </div>
    </div>
  );
}
