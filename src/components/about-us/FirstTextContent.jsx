import { Box, Typography } from "@mui/material";
import React from "react";

function FirstTextContent() {
  return (
    <>
      <Typography variant="h2">درباره ما</Typography>
      <Typography pb={2} variant="h6">
        همیشه دوست داشتی چی باشی؟
      </Typography>
      <Typography pb={2} variant="h6">
        اگر راهی برای امتحان کردن یک شغل و تجربه فرصت های تجاری قبل از تعهد به
        آنها وجود داشت، چی؟
      </Typography>
      <Typography pb={2} variant="h6">
        با BeMe بالاخره شانس انجام آن را دارید.
      </Typography>
      <Typography pb={2} variant="h6">
        ما بازاری برای تجربه حرفه های جدید و آزمایش رویای شما هستیم.
      </Typography>
      <Typography pb={2} variant="h6">
        BeMe یک پلتفرم جهانی است که با ارائه تجربیات هدایت‌شده در دنیای واقعی که
        به شما امکان می‌دهد واقعاً «یک مایل در کفش دیگران راه بروید» اختصاص داده
        شده است تا با افراد عادی ارتباط برقرار کند
      </Typography>
      <Typography pb={2} variant="h6">
        راهنماهای ما که با دقت انتخاب شده اند، کسب و کار و سبک زندگی خود را برای
        یک روز به روی شما باز می کنند. اگر به دنبال اختراع مجدد خود در یک بخش
        جدید هستید، اتصال به آنها در زمان و هزینه شما صرفه جویی می کند.
      </Typography>
      <Typography pb={2} variant="h6">
        این کارآموزی نیست. این یک دسترسی بدون دردسر به یک استخر استعدادهای متنوع
        است که یک مسیر جایگزین را به شما نشان می دهد.
      </Typography>

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

      <Typography variant="h5">وارد حوزه انتخابی خود شوید</Typography>
      <Typography variant="h6" pb={2}>
        بسیاری از مردم تجربه های تغییر دهنده زندگی را از دست می دهند، زیرا
        بسیاری از مشاغل به سال ها تجربه شبکه ای و یادگیری نیاز دارند.
      </Typography>
      <Typography variant="h6" pb={2}>
        در Anybe، مهمان‌ها هزینه می‌کنند تا «از خط بگذرند» و به معنای واقعی کلمه
        به هر زمینه‌ای که می‌خواهند برای یک روز کامل نفوذ کنند و امیدواریم شبکه
        جدید خود را در آن زمینه شروع کنند. این همان دنیایی است که همیشه دوست
        داشتید آن را تجربه کنید.
      </Typography>
      <Typography variant="h6" pb={2}>
        وقت خود را هدر ندهید، کار زندگی و رضایت بخش ترین زندگی ممکن را پیدا
        کنید.
      </Typography>
    </>
  );
}

export default FirstTextContent;
