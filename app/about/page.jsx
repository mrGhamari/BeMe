"use client";
import {
  FirstTextContent,
  PageContainer,
  SecondTextContent,
  WarningBox,
} from "@/components/about-us";
import Link from "next/link";

export default function About() {
  return (
    <>
      <PageContainer>
        <FirstTextContent />
        <WarningBox />
        <SecondTextContent />
        <div className="text-center my-10 ">
          <p>
            <Link
              href="/register"
              className=" text-base font-bold md:text-2xl p-4 md:py-3 md:px-8 borders border-solid border-teal-250 rounded-full bg-teal-250 transition duration-200 ease-out hover:ease-in hover:bg-[#52e8be]"
            >
              حالا وارد شوید
            </Link>
          </p>
        </div>
        <div>our team box</div>
      </PageContainer>
    </>
  );
}
