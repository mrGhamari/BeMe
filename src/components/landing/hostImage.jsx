import React from "react";
import Image from "next/image";
const hostImage = ({ hostinformation }) => {
  return (
    <div
      className={`relative  ${hostinformation.fullWidth ? "col-span-4" : ""}`}
    >
      <div className="absolute size-full opacity-0 cursor-pointer hover:opacity-100 hover:bg-rgba flex flex-col justify-center items-center text-white">
        <div className="text-3xl sm:text-sm">{hostinformation.name}</div>
        <div className="text-xl text-teal-200">{hostinformation.field}</div>
      </div>
      <Image
        src={hostinformation.photo}
        alt="photo"
        className="rounded-3xl size-full"
        quality={70}
      />
    </div>
  );
};

export default hostImage;
