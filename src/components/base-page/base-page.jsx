import { Container } from "@mui/material";
import React from "react";

const BasePage = ({ children, title, fluid, fixed,className}) => {
  return (
    <Container maxWidth={fluid} fixed={fixed} className={className}>
      {/* <Helmet>
        <title>{title}</title>
      </Helmet> */}
      {children}
    </Container>
  );
};

export default BasePage;
