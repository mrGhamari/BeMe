import React from "react";
import iman from "@/public/images/mechanic.jpeg";
import sadra from "@/public/images/Vet.jpg";
import daniel from "@/public/images/teacher.jpg";
import iman1 from "@/public/images/photographer.jpeg";
import mmdrza from "@/public/images/developer.jpeg";
import Host from "src/components/landing/hostImage";
const imageStyle = {
  width: "fit-content",
  height: "fit-content",
};

const Images = () => {
  const hostList = [
    {
      name: "ایمان حاجی‌علی",
      field: "مکانیک",
      photo: iman,
      fullWidth: false,
    },
    {
      name: "دانیال محمدی",
      field: "معلم",
      photo: daniel,
      fullWidth: false,
    },
    {
      name: "محمدرضا",
      field: "برنامه‌نویس",
      photo: mmdrza,
      fullWidth: false,
    },
    {
      name: "صدرا صفوی",
      field: "دام‌پزشک",
      photo: sadra,
      fullWidth: false,
    },
    {
      name: "پارسا بیکی",
      field: "عکاس",
      photo: iman1,
      fullWidth: true,
    },
  ];
  return (
    <div className="grid grid-cols-4 gap-4">
      {hostList.map((item, index) => (
        <Host key={index} hostinformation={item} />
      ))}

      {/* <div className="relative">
        <div className="absolute size-full opacity-0 cursor-pointer hover:opacity-100 hover:bg-rgba flex flex-col justify-center items-center text-white text-3xl">
          <h3>محمدرضا قمری</h3>
          <p>برنامه‌نویس</p>
        </div>
        <Image
          src={mmdrza}
          alt="photo"
          className="rounded-3xl size-full"
          quality={80}
          style={imageStyle}
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
          style={imageStyle}
        />
      </div>

      <div className="relative col-span-3">
        <div className="absolute size-full opacity-0 cursor-pointer hover:opacity-100 hover:bg-rgba flex flex-col justify-center items-center text-white text-3xl">
          <h3>ایمان حاجی‌علی</h3>
          <p>عکاس</p>
        </div>
        <Image
          src={iman1}
          alt="photo"
          className="rounded-3xl size-full"
          quality={100}
          style={imageStyle}
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
          style={imageStyle}
        />
      </div> */}
    </div>
  );
};

export default Images;
