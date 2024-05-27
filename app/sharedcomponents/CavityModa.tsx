import Image from "next/image";
import React from "react";

interface Props {
  handleChangeCavity: (cavity: number, index: number) => void;
  index: number;
  setSelectedTooth: (index: number | null) => void;
}
export default function CavityModa({
  handleChangeCavity,
  index,
  setSelectedTooth,
}: Props) {
  console.log("CavityModa");
  return (
    <div className="bg-white shadow-md absolute top-full right-[-100px] w-[250px] text-[13px] p-3 z-[9999999] ">
      <div
        onClick={() => handleChangeCavity(1, index)}
        className="flex border-b border-gray-400 pb-1 items-center gap-2 cursor-pointer"
      >
        <Image
          src={"/captions/cavity.png"}
          width={50}
          height={50}
          className="h-[30px] w-auto object-contain "
          alt={"tachados"}
        />
        <p>Cavity</p>
      </div>
      <div
        onClick={() => handleChangeCavity(2, index)}
        className="flex mt-2 border-b border-gray-400 pb-1 items-center gap-2 cursor-pointer"
      >
        <Image
          src={"/captions/amalgame.png"}
          width={50}
          height={50}
          className="h-[30px] w-auto object-contain "
          alt={"tachados"}
        />
        <p>Amalgam</p>
      </div>
      <div
        onClick={() => handleChangeCavity(3, index)}
        className="flex border-b border-gray-400 pb-1 mt-2 items-center gap-2 cursor-pointer"
      >
        <Image
          src={"/captions/composite.png"}
          width={50}
          height={50}
          className="h-[30px] w-auto object-contain "
          alt={"tachados"}
        />
        <p>Composite</p>
      </div>
      <div
        onClick={() => handleChangeCavity(4, index)}
        className="flex border-b border-gray-400 pb-1 mt-2 items-center gap-2 cursor-pointer"
      >
        <Image
          src={"/captions/composite_def.png"}
          width={50}
          height={50}
          className="h-[30px] w-auto object-contain "
          alt={"tachados"}
        />
        <p>Defective Composite</p>
      </div>
      <div
        onClick={() => handleChangeCavity(0, index)}
        className="border border-[#46befc] hover:bg-[#46befc] rounded-md mt-2 flex justify-center py-2 cursor-pointer"
      >
        Cancel
      </div>
    </div>
  );
}
