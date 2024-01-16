"use client";
import React from "react";
import {
  Accordion,
  AccordionActions,
  AccordionDetails,
  AccordionSummary,
  Button,
} from "@mui/material";
import { ExpandMoreSharp } from "@mui/icons-material";

const GuestAccordion = () => {
  return (
    <div>
      <h2 className="text-2xl pb-6">سوالات متداول مهمان</h2>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreSharp className="text-teal-400" />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          هزینه مهمان شدن چقدر است؟
        </AccordionSummary>
        <AccordionDetails>
          <p className={"text-gray"}>
            هزینه به کاری که می خواهید انجام دهید بستگی دارد. هر راهنما تجربه
            متفاوتی را در سبک زندگی متفاوت ارائه می دهد و قیمت خود را بر اساس
            هزینه زمان، مواد و تجهیزات اختصاص داده شده به تجربه شما و سایر هزینه
            های ضروری تعیین می کند.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreSharp className="text-teal-400" />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          چقدر کار در حین کار باید انجام دهم؟ آیا باید با مشتریان معامله کنم،
          معاملات ویژه ای انجام دهم و غیره؟
        </AccordionSummary>
        <AccordionDetails>
          <p className={"text-gray"}>
            {" "}
            همه مهمانان احتمالی باید بدانند که شما یک ناظر صرف نخواهید بود.
            فلسفه ما این است که مهمانان مسافران سبک زندگی دیگری هستند، نه یک
            توریست. شما دست های خود را کثیف خواهید کرد. با این حال، سطح غوطه
            وری به تجربه ای بستگی دارد که راهنمای شما برای شما در نظر گرفته است،
            بنابراین حتماً توضیحات تجربه آنها را به دقت بخوانید.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreSharp className="text-teal-400" />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          آیا ایمن است؟ چگونه راهنمای خود را انتخاب می کنید؟
        </AccordionSummary>
        <AccordionDetails>
          <p className="text-gray">
            تجربه شما تا حد امکان امن است. امنیت مهمان اولویت اصلی ماست. ما روی
            مشاغل افراطی یا خطرناک تمرکز نمی کنیم و همه راهنماها از طریق یک
            فرآیند غربالگری که شامل تأیید هویت و مصاحبه است، می گذرانند.
          </p>
        </AccordionDetails>
        <AccordionActions>
          <Button>Cancel</Button>
          <Button>Agree</Button>
        </AccordionActions>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreSharp className="text-teal-400" />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          آیا قبل از اینکه در دنیای او مهمان باشم با راهنمای خود آشنا خواهم شد؟
        </AccordionSummary>
        <AccordionDetails>
          <p className={"text-gray"}>
            آره. هنگامی که تجربه ای را رزرو کردید، می توانید در مورد هر چیزی با
            راهنمای خود چت کنید. ما می‌خواهیم مهمانان ما با راهنمای ما ارتباط
            برقرار کنند، بنابراین اگر در این مرحله نظر خود را تغییر دادید،
            بتوانید لغو کنید و بازپرداخت کامل دریافت کنید.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreSharp className="text-teal-400" />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          اگر بخواهم لحظه آخری لغو کنم چه می شود؟
        </AccordionSummary>
        <AccordionDetails>
          <p className={"text-gray"}>
            هدر صورت لغو 24 ساعت قبل از تجربه، بازپرداخت کامل ارائه می شود.
            همچنین می توانید تجربه خود را برای تاریخ دیگری موکول کنید. ما می
            فهمیم که زندگی اتفاق می افتد!
          </p>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default GuestAccordion;
