"use client";
import { useState } from "react";
import {
  FirstTextContent,
  PageContainer,
  BecomeGuideText,
} from "@/components/about-us";

export default function About() {
  const [color, setColor] = useState("bg-teal-300");
  return (
    <>
      <PageContainer>
        <FirstTextContent />
        <section>warning box</section>
        <BecomeGuideText />
        <div>our team box</div>
      </PageContainer>
    </>
  );
}
