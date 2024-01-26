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
    name: "ایمان حاجی علی",
    field: "عکاس",
    photo: iman1,
    fullWidth: true,
  },
];
const Images = () => {
  return (
    <>
      <div className="grid grid-cols-12 gap-4 border-4s">
        {hostList.map((item, index) => (
          <Host key={index} hostinformation={item} />
        ))}
      </div>
    </>
  );
};
export default Images;
