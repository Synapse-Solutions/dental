import LowerTeethCharting from "@/app/components/LowerTeethCharting";
import UpperTeethCharting from "@/app/components/UpperTeethCharting";
import React from "react";

export default function page() {
  return (
    <div>
      <UpperTeethCharting />;
      <div className="mt-[100px]">
        <LowerTeethCharting />
      </div>
    </div>
  );
}
