import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import React from "react";

const LandingLayout = ({ children }) => {
  return (
    <>
      <Header></Header>
      <main className="mt-5 h-full">{children}</main>
      <Footer></Footer>
    </>
  );
};

export default LandingLayout;
