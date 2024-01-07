import React from "react";
import { BasePage } from "../base-page";
import { Container } from "@mui/material";
import { DisabledByDefault } from "@mui/icons-material";

const ExprienceSection = () => {
  return (
    <div className="bg-teal-100 w-full">
      <Container fixed className={" mt-5 py-2 "}>
        <div className="flex flex-row flex-wrap border-4s border-teal-400s">
          <div className="text-center w-full py-3">
            <h2 className="text-2xl md:text-4xl font-bold">تجربیات حضوری</h2>
          </div>
          <div className="lg:w-4/12 py-5 lg:px-3">
            <h3 className="font-extrabold py-2">پشت صحنه را ببینید</h3>
            <p>
              به دنبال راه هایی برای اختراع مجدد خود یا آزمایش رشته ای هستید که
              قصد دارید دنبالش کنید؟ به هر حال، تجربیات به شما این امکان را می
              دهد که عملکرد درونی یک شغل را ببینید و به شما کمک می کند تا
              تصمیمات آگاهانه تری بگیرید!
            </p>
          </div>
          <div className="lg:w-4/12 py-5 lg:px-3">
            <h3 className="font-extrabold py-2">از لجن خارج شو</h3>
            <p>
              کنجکاوی و نیاز همیشگی به گسترش افق هایمان - ما دقیقاً می دانیم که
              آنها چیستند! شما می توانید راه های جدیدی از بودن و درگیر شدن با
              دنیا را تجربه کنید.
            </p>
          </div>
          <div className="lg:w-4/12 py-5 lg:px-3">
            <h3 className="font-extrabold py-2">همدلی را رشد دهید</h3>
            <p>
              برای یک روز، شما می توانید جهان را مانند یک شخص دیگر تجربه کنید!
              یا اگر یک راهنما شوید، می‌توانید روال حرفه‌ای خود را با دنیا به
              اشتراک بگذارید و به کسی الهام بگیرید.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ExprienceSection;
