import "../globals.css";
import localFont from "next/font/local";
import { LoginLayout } from "@/layout/login-layout";

export const metadata = { title: "BeMe", description: "BeMe" };

const vazirFont = localFont({
  src: "../../public/font/Vazirmatn-Regular.woff2",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="rtl">
      <body
        className={`${vazirFont.className} grid place-content-center`}
        style={{ backgroundColor: "#a7f3d0", height: "100vh" }}
      >
        <LoginLayout>{children}</LoginLayout>
      </body>
    </html>
  );
}
