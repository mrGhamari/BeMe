import React from "react";
import Image from "next/image";
const imageStyle = {
  width: "fit-content",
  height: "fit-content",
};
const hostImage = ({ hostinformation }) => {
  return (
    <div
      className={`relative  ${hostinformation.fullWidth ? "col-span-4" : ""}`}
    >
      <div className="absolute size-full opacity-0 cursor-pointer hover:opacity-100 hover:bg-rgba flex flex-col justify-center items-center text-white text-3xl">
        <h3>{hostinformation.name}</h3>
        <p>{hostinformation.field}</p>
      </div>
      <Image
        src={hostinformation.photo}
        alt="photo"
        className="rounded-3xl size-full"
        quality={80}
        style={imageStyle}
      />
    </div>
  );
};

export default hostImage;
