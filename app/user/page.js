"use client";
import { useState } from "react";
import Landing from "@/components/landing/landing.jsx";
 const Home =  ( ) => {
  const [color, setColor] = useState("bg-teal-300");

  return (
    <>
      {/* <LandingLayout>    */}
        {/* <BasePage fixed={true}> */}
            <Landing/> 
        {/* </BasePage> */}
      {/* </LandingLayout> */}
    </>
  );
}
export default Home 