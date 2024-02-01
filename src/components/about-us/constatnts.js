import iman from "@/public/images/mechanic.jpeg";
import sadra from "@/public/images/Vet.jpg";
import daniel from "@/public/images/teacher.jpg";
import iman1 from "@/public/images/photographer.jpeg";
import mmdrza from "@/public/images/developer.jpeg";

export const cards = [
  {
    id: 1,
    name: "ایمان حاجی‌علی",
    field: "مدیر عامل و بنیانگذار",
    photo: iman,
    fullWidth: false,
    multiImage: false,
    info: "این یک متن آزمایشی است و جنبه محتوایی ندارد، برای دیدن نتیجه کار شم باید متن آزمایشی داشته باشید، اگر متن آزمایشی نداشته باشد، متن آزمایشی داشته باشد",
  },
  {
    id: 12,
    name: "دانیال محمدی",
    field: "مدیر برنامه نویسان",
    photo: daniel,
    fullWidth: false,
    multiImage: false,
    info: "این یک متن آزمایشی است و جنبه محتوایی ندارد، اگر متن آزمایشی نداشته باشد، متن آزمایشی داشته باشد",
  },
  {
    id: 13,
    name: "محمدرضا",
    field: "مدیر انجمن",
    photo: mmdrza,
    fullWidth: false,
    multiImage: false,
    info: " اگر متن آزمایشی نداشته باشد، متن آزمایشی داشته باشد",
  },
  {
    id: 14,
    name: ["صدرا", "ایمان", "دانیال", "محمدرضا"],
    field: "برندینگ",
    photo: [sadra, iman1, daniel, mmdrza],
    fullWidth: false,
    multiImage: true,
    info: "ا برای دیدن نتیجه کار شم باید متن آزمایشی داشته باشید، اگر متن آزمایشی نداشته باشد، متن آزمایشی داشته باشد",
  },
  {
    id: 15,
    name: "پارسا بیکی",
    field: "مدیر ارشد",
    photo: iman1,
    fullWidth: true,
    multiImage: false,
    info: "این یک متن آزمایشی است و جنبه محتوایی ندارد، برای دیدن نتیجه کار شم باید متن آزمایشی داشته باشید، اگر متن آزمایشی نداشته باشد، متن آزمایشی داشته باشد",
  },
];
