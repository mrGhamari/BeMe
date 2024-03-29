import { LandingLayout } from "@/layout/landing-layout";
import "./globals.css";
import localFont from "next/font/local";

export const metadata = {
  title: "BeMe",
  description: "BeMe",
};

const vazirFont = localFont({
  src: "../public/font/Vazirmatn-Regular.woff2",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="rtl">
      <body
        className={`${vazirFont.className}`}
        style={{ backgroundColor: "#EFEFEF" }}
      >
        <LandingLayout>{children}</LandingLayout>
      </body>
    </html>
  );
}
