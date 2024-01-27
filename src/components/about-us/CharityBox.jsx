import Link from "next/link";
import React from "react";

function CharityBox() {
  return (
    <div className="flex flex-col items-center text-justify py-4 my-4">
      <div className="flex justify-center w-11/12 sm:w-full rounded-[25px]  bg-[#defff2] shadow">
        <h3 className="text-[1.3rem] leading-[2em] p-9 text-center">
          <span>BeMe از خیریه حمایت می کند. ما</span>
          <span className="text-teal-250 underline">
            {" "}
            <Link href="#">برای آموزش فعال باهم متحد شدیم.</Link>
          </span>
          <span>
            اگر می خواهید بخشی یا تمام سود BeMe خود را به یک هدف خیر اهدا کنید،
          </span>
          <span className="text-teal-250 underline">
            <Link href="">به ما اطلاع دهید</Link>
          </span>
          <span>.</span>
        </h3>
      </div>
    </div>
  );
}

export default CharityBox;
