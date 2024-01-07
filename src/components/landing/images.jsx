import React from "react";
import Image from "next/image";
import mahdi from "@/public/images/mahdi.jpg";
import iman from "@/public/images/iman.jpg";
import sadra from "@/public/images/sadra.jpg";
import daniel from "@/public/images/daniel.jpg";
import iman1 from "@/public/images/iman-w-full.jpg";
import mmdrza from "@/public/images/mmreza.jpg"
const Images = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="relative">
        <div className="absolute size-full opacity-0 cursor-pointer hover:opacity-100 hover:bg-rgba flex flex-col justify-center items-center text-white text-3xl">
          <h3> مهدی صادقی</h3>
          <p>موزیسین</p>
        </div>

        <Image
          src={mahdi}
          quality={70}
          className="rounded-3xl size-full"
          alt="photo"
        />
      </div>

      <div className="relative">
        <div className="absolute size-full opacity-0 cursor-pointer hover:opacity-100 hover:bg-rgba flex flex-col justify-center items-center text-white text-3xl">
          <h3> ایمان حاجی‌علی</h3>
          <p>مکانیک ماشین</p>
        </div>
        <Image
          src={iman}
          alt="photo"
          className="rounded-3xl size-full"
          quality={70}
        />
      </div>

      <div className="relative">
        <div className="absolute size-full opacity-0 cursor-pointer hover:opacity-100 hover:bg-rgba flex flex-col justify-center items-center text-white text-3xl">
          <h3>دکتر صدرا صفوی</h3>
          <p>دام‌پزشک</p>
        </div>
        <Image
          src={sadra}
          alt="photo"
          className="rounded-3xl size-full"
          quality={70}
        />
      </div>

      <div className="relative col-span-3">
        <div className="absolute size-full opacity-0 cursor-pointer hover:opacity-100 hover:bg-rgba flex flex-col justify-center items-center text-white text-3xl">
          <h3>ایمان حاجی‌علی</h3>
          <p>مهندس کامپیوتر</p>
        </div>
        <Image
          src={iman1}
          alt="photo"
          className="rounded-3xl size-full"
          quality={100}
        />
      </div>

      <div className="relative">
        <div className="absolute size-full opacity-0 cursor-pointer hover:opacity-100 hover:bg-rgba flex flex-col justify-center items-center text-white text-3xl">
          <h3>دانیال محمدی</h3>
          <p>معلم</p>
        </div>
        <Image
          src={daniel}
          alt="photo"
          className="rounded-3xl size-full"
          quality={80}
        />
      </div>
      
      <div className="relative">
        <div className="absolute size-full opacity-0 cursor-pointer hover:opacity-100 hover:bg-rgba flex flex-col justify-center items-center text-white text-3xl">
          <h3>محمدرضا قمری</h3>
          <p>برنامه‌نویس</p>
        </div>
        <Image
          src={mmdrza}
          alt="photo"
          className="rounded-3xl size-full"
          quality={80}
        />
      </div>
    </div>
  );
};

export default Images;
