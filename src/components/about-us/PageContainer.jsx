import { Container } from "@mui/material";
import React from "react";

const PageContainer = ({ children, fluid }) => {
  return <Container maxWidth={"lg"}>{children}</Container>;
};

export default PageContainer;
