"use client";
import { useState } from "react";
import BasePage from "../src/components/base-page/base-page.jsx";
import Image from "next/image";
import { LandingLayout } from "@/layout/landing-layout/index.js";
import Landing from "@/components/landing/landing.jsx";
export default function Home() {
  const [color, setColor] = useState("bg-teal-300");
  return (
    <>
      <LandingLayout>   
        {/* <BasePage fixed={true}> */}
            <Landing/> 
        {/* </BasePage> */}
      </LandingLayout>
    </>
  );
}
