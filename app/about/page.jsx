"use client";
import { useState } from "react";
import { LandingLayout } from "@/layout/landing-layout/index.js";
import PageContainer from "@/components/about-us/PageContainer";
export default function About() {
  const [color, setColor] = useState("bg-teal-300");
  return (
    <>
      <LandingLayout>
        {/* <BasePage fixed={true}> */}
        <PageContainer>
          <div>first text</div>
          <section>warning box</section>
          <div>second text</div>
          <div>our team box</div>
          {/* </BasePage> */}
        </PageContainer>
      </LandingLayout>
    </>
  );
}
