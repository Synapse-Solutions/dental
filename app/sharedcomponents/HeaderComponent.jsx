import React from "react";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";

export default function HeaderComponent() {
  return (
    <div className="flex justify-between items-center bg-white w-full rounded-md mt-10 px-10 py-5">
      <div className="flex items-center gap-4 ">
        <div className="w-[50px] h-[50px] rounded-full flex items-center justify-center bg-black">
          <p className="text-black">P</p>
        </div>
        <div>
          <p className="text-black">Patient example P.</p>
          <p className="font-light">Male</p>
        </div>
      </div>
      <div>
        <BorderColorOutlinedIcon fontSize="large" />
      </div>
    </div>
  );
}
