"use client";
import { useState } from "react";
import { LandingLayout } from "@/layout/landing-layout/index.js";
import { FirstTextContent, PageContainer } from "@/components/about-us";
export default function About() {
  const [color, setColor] = useState("bg-teal-300");
  return (
    <>
      <PageContainer>
        <FirstTextContent />
        <section>warning box</section>
        <div>second text</div>
        <div>our team box</div>
        {/* </BasePage> */}
      </PageContainer>
    </>
  );
}
