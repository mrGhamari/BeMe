import React from "react";
import { Box, ImageList, ImageListItem, Paper } from "@mui/material";

import cover from "@/public/images/cover.jfif";

function Banner() {
  return (
    <ImageList sx={{ width: 500, height: 450 }} cols={1} rowHeight={164}>
      <ImageListItem>
        <img
          src={`${cover.src}?w=164&h=164&fit=crop&auto=format`}
          loading="lazy"
        />
      </ImageListItem>
    </ImageList>
  );
}

export default Banner;
