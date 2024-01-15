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
import Link from "next/link";
const GuidAccordion = () => {
  return (
    <div className="my-14 ">
      <h2 className="text-2xl pb-6">راهنمای سوالات متداول</h2>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreSharp className="text-teal-400" />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          من یک روز کار را با میزبانی از یک مهمان از دست خواهم داد. چگونه می
          توانم برای زمان خود به عنوان یک راهنما غرامت دریافت کنم؟{" "}
        </AccordionSummary>
        <AccordionDetails>
          <p className={"text-gray"}>
            راهنماها آزادند که قیمت تجربیات خود را مطابق با نیازهایشان تعیین
            کنند، و از راهنماها خواسته می شود که هنگام ایجاد تجربه خود برای سایت
            ما، تمام هزینه ها و ارزش زمان را در نظر بگیرند.
            <br />
            <br />
            BeMe یک کارمزد 30 درصدی اضافه می‌کند که به صورت‌حساب نهایی مهمان
            اضافه می‌شود، بنابراین 100 درصد قیمتی که به راهنماها برای تجربه
            دریافت می‌کنند پرداخت می‌شود.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreSharp className="text-teal-400" />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          آیا می‌توانم مهمان‌هایی را که وارد کسب‌وکارم می‌کنم انتخاب کنم؟{" "}
        </AccordionSummary>
        <AccordionDetails>
          <p className={"text-gray"}>
            {" "}
            کاملا! تجربیات ما با درخواست مهمانان شروع می شود. BeMe Guides همه
            درخواست‌ها را دریافت و بررسی می‌کند و این به راهنماها بستگی دارد که
            کدام مهمان‌ها را بپذیرند و کدام را رد کنند.
            <br />
            <br />
            راهنماها آزادند که این تصمیمات را بر اساس خودشان بگیرند استدلال، اما
            لطفاً به خاطر داشته باشید که تمام تجربیات ما چنین است در نظر گرفته
            شده است که به طور طبیعی تنوع، برابری و شمول را در ما گسترش دهد جوامع
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreSharp className="text-teal-400" />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          من دوست دارم یک راهنما باشم، اما من یک کارمند هستم. آیا به من کمک می
          کنید تا با رئیسم هماهنگی کنم یا از قبل باید رئیس خودم باشم؟{" "}
        </AccordionSummary>
        <AccordionDetails>
          <p className="text-gray">
            همه کارمندانی که مایل به راهنما شدن هستند باید از کارفرمایان خود
            تأییدیه بگیرند و BeMe آماده است تا در این گفتگوها کمک کند. لطفاً
            برای اطلاعات بیشتر مستقیماً با ما تماس بگیرید.
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
          یک مهمان به کسب و کار من خسارت وارد کرد/دزدید. چه کسی از نظر مالی
          مسئول خواهد بود: مهمان من یا من؟
        </AccordionSummary>
        <AccordionDetails>
          <p className={"text-gray"}>
            راهنماها در قبال تمام صدمات مهمان که در نتیجه هر گونه خطرات ناشناخته
            مرتبط با تجربه رخ می دهد، مسئول خواهند بود. <br />
            <br />
            مهمان‌ها از نظر قانونی مسئول بازپرداخت تمام خسارات وارده به راهنماها
            در طول تجربه خود هستند و در صورت امتناع مهمانان از ارائه بازپرداخت،
            راهنماها ممکن است زمینه‌ای برای اقدام قانونی داشته باشند.
            <br />
            <br />
            اگر بیمه چتر را در نظر دارید، لطفاً با تیم خدمات مشتریان ما تماس
            بگیرید.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreSharp className="text-teal-400" />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          آیا کسی می تواند یک راهنما باشد؟ صلاحیت ها چیست؟
        </AccordionSummary>
        <AccordionDetails>
          <p className={"text-gray"}>
            هر کسی تا زمانی که تجارت حرفه ای، مهارت، سرگرمی یا سبک زندگی خاصی
            داشته باشد، به آن علاقه داشته باشد، و تمایلی آزاد برای به اشتراک
            گذاشتن یک روز در آن زندگی با شخص دیگری داشته باشد، این شانس را دارد
            که یک راهنما باشد.
            <br />
            <br />
            راهنماهای بالقوه باید به خاطر داشته باشند که ممکن است به اسناد رسمی
            مانند مجوزها و گواهینامه ها نیاز باشد تا از نظر قانونی به عنوان یک
            راهنمای پولی برای مشاغل و تجربیات خاص عمل کنند و مهمانان بالقوه با
            دید مطلوب تری به آنها نگاه کنند.
            <br />
            <br />
            BeMe همچنین مستلزم آن است که همه راهنماها در بررسی پیشینه و فرآیند
            مصاحبه شرکت کنند تا انتخاب و تایید شوند.
            <br />
            <br />
            برای جزئیات بیشتر و سایر سوالات، لطفاً با تیم خدمات مشتریان ما تماس
            بگیرید یا یک ایمیل به آن ارسال کنید
            <Link href={'/'} className="text-teal-500">BeMe@gmai.com</Link>
          </p>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default GuidAccordion;
