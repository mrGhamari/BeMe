import React from "react";
import { Typography } from "@mui/material";

function BecomeGuideText() {
  return (
    <>
      <Typography variant="h3">میزبان شوید</Typography>

      <Typography pb={1} variant="h6">
        آیا کاری رو که انجام میدی، دوست داری؟ آیا علاقه داری افراد بیشتری
        بتوانند شادی و زیبایی های شغل و سبک زندگی شما را تجربه کند؟
      </Typography>
      <Typography pb={2} variant="h6">
        اگر علاقه داری، چرا تجربه خودت با بقیه رو به اشتراک نمیزاری و بابتش پول دریافت نمیکنی؟
      </Typography>
      <Typography pb={2} variant="h6">
        همیشه در BeMe میزبان‌هایی هستند که تجربه‌های متفاوتی را به میهمان‌ها میدهند. به میزبان‌ها پول پرداخت میشود و آن‌ها میتوانند قیمت مدنظر خود را برای یک روز تجربه تعیین کنند
      </Typography>
    </>
  );
}
export default BecomeGuideText;
