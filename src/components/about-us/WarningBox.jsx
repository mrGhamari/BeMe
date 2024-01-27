import React from "react";
import logo from "@/public/images/logo.svg";
import Image from "next/image";

function WarningBox() {
  return (
    <div className="flex flex-col items-center text-justify py-4 my-4">
      <div className="flex justify-center w-11/12 sm:w-full py- bg-teal-50 shadow">
        <div className="px-2 py-3 md:gap-0 gap-6 text-wrap flex md:flex-row flex-col-reverse  justify-center content-center items-center">
          <div>
            <p className="sm:text-[1.9rem] text-wrap text-[1.3rem] font-extrabold	">
              <span className="text-teal-500">هشدار:</span>
              &nbsp;&nbsp;
              <span>این زندگی واقعی است</span>
            </p>
          </div>
          <div className="w-[8em] sm:pr-10 ">
            <Image className="w-full " src={logo} alt="logo" quality={100} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WarningBox;
