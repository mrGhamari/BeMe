import { Container } from "@mui/material";
import Link from "next/link";
import React from "react";




const DesktopFooter = () => {
  return (
    <footer>
      <Container>
        <div className="flex flex-wrap flex-row justify-center">
          <div className="px-2 w-3/12">
            <h2 className="text-lg font-bold p-1">شرکت</h2>
            <ul className="text-xs">
              <li className="text-footer-link p-1">
                <Link className="hover:text-teal-400" href={"#"}>
                  شرایط استفاده از خدمات
                </Link>
              </li>
              <li className="text-footer-link p-1">
                <Link className="hover:text-teal-400" href={"#"}>
                  حریم خصوصی
                </Link>
              </li>
              <li className="text-footer-link p-1">
                <Link className="hover:text-teal-400" href={"#"}>
                  بازپرداخت مهمان
                </Link>
              </li>
              <li className="text-footer-link p-1">
                <Link className="hover:text-teal-400" href={"#"}>
                  درباره ما
                </Link>
              </li>
              <li className="text-footer-link p-1">
                <Link className="hover:text-teal-400" href={"#"}>
                  شزایط لغو
                </Link>
              </li>
              <li className="text-footer-link p-1">
                <Link className="hover:text-teal-400" href={"#"}>
                  چگونه کار می کند
                </Link>
              </li>
              <li className="text-footer-link p-1">
                <Link className="hover:text-teal-400" href={"#"}>
                  تماس با ما
                </Link>
              </li>
            </ul>
          </div>

          <div className="px-2 w-3/12">
            <h2 className="text-lg font-bold p-1">كشف كردن</h2>
            <ul className="text-xs">
              <li className="text-footer-link p-1">
                <Link className="hover:text-teal-400" href={"#"}>
                  اعتماد و ایمنی{" "}
                </Link>
              </li>
            </ul>
          </div>

          <div className="px-2 w-3/12">
            <h2 className="text-lg font-bold p-1">راهنما بودن</h2>
            <ul className="text-xs">
              <li className="text-footer-link p-1">
                <Link className="hover:text-teal-400" href={"#"}>
                  چرا راهنما شوید{" "}
                </Link>
              </li>
              <li className="text-footer-link p-1">
              <Link className="hover:text-teal-400" href={"#"}>
                فلسفه ما
                </Link>
              </li>
              <li className="text-footer-link p-1">
              <Link className="hover:text-teal-400" href={"#"}>
                فعالیت های ممنوعه
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default DesktopFooter;
