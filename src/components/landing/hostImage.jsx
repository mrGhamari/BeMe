import React from "react";
import Image from "next/image";
const Host = ({ hostinformation }) => {
  return (
    <div
      className={`relative col-span-12 ${
        hostinformation.fullWidth ? "sm:col-span-12" : "sm:col-span-3"
      } border-4s`}
    >
      <div className="absolute size-full opacity-0 cursor-pointer hover:opacity-100 hover:bg-rgba transition-all duration-300 flex flex-col justify-center items-center text-white">
        <h3 className="text-3xl text-white">{hostinformation.name}</h3>
        <h3 className="text-xl">{hostinformation.field}</h3>
      </div>
      <Image
        src={hostinformation.photo}
        alt="photo"
        className="rounded-3xl size-full border-teal-700"
        quality={70}
      />
    </div>
  );
};

export default Host;
