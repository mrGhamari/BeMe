import { Box, Typography } from "@mui/material";
import React from "react";

function FirstTextContent() {
  return (
    <div className="flex flex-col items-center text-justify">
      <div className="  md:w-full w-11/12 py-4 mb-4">
        <h1 className="text-4xl">داستان ما</h1>
      </div>
      <div className=" md:w-full w-11/12 ">
        <p className="">همیشه دوست داشتی چی باشی؟</p>
        <p className="pt-4">
          اگر راهی برای امتحان کردن یک شغل و تجربه فرصت های تجاری قبل از تعهد به
          آنها وجود داشت، چی؟
        </p>
        <p className="pt-4">با BeMe بالاخره شانس انجام آن را دارید.</p>
        <p className="pt-4">
          ما بازاری برای تجربه حرفه های جدید و آزمایش رویای شما هستیم.
        </p>
        <p className="pt-4">
          BeMe یک پلتفرم جهانی است که با ارائه تجربیات هدایت‌شده در دنیای واقعی
          که به شما امکان می‌دهد واقعاً «یک مایل در کفش دیگران راه بروید» اختصاص
          داده شده است تا با افراد عادی ارتباط برقرار کند
        </p>
        <p className="pt-4">
          راهنماهای ما که با دقت انتخاب شده اند، کسب و کار و سبک زندگی خود را
          برای یک روز به روی شما باز می کنند. اگر به دنبال اختراع مجدد خود در یک
          بخش جدید هستید، اتصال به آنها در زمان و هزینه شما صرفه جویی می کند.
        </p>
        <p className="pt-4">
          این کارآموزی نیست. این یک دسترسی بدون دردسر به یک استخر استعدادهای
          متنوع است که یک مسیر جایگزین را به شما نشان می دهد.
        </p>
      </div>

      <Box
        height={20}
        width="auto"
        my={4}
        textAlign="center"
        display="flex"
        className="bg-teal-200"
        justifyContent="center"
      >
        Gif image shoud be here
      </Box>

      <h2 className="text-2xl  md:w-full w-11/12">
        وارد حوزه انتخابی خود شوید
      </h2>
      <div className="md:w-full w-11/12">
        <p className="pt-4">
          بسیاری از مردم تجربه های تغییر دهنده زندگی را از دست می دهند، زیرا
          بسیاری از مشاغل به سال ها تجربه شبکه ای و یادگیری نیاز دارند.
        </p>
        <p className="pt-4">
          در BeMe، مهمان‌ها هزینه می‌کنند تا «از خط بگذرند» و به معنای واقعی
          کلمه به هر زمینه‌ای که می‌خواهند برای یک روز کامل نفوذ کنند و
          امیدواریم شبکه جدید خود را در آن زمینه شروع کنند. این همان دنیایی است
          که همیشه دوست داشتید آن را تجربه کنید.
        </p>
        <p className="pt-4">
          وقت خود را هدر ندهید، کار زندگی و رضایت بخش ترین زندگی ممکن را پیدا
          کنید.
        </p>
      </div>
    </div>
  );
}

export default FirstTextContent;
