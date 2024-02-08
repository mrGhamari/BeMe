"use client";

import React from "react";
import { CardMedia, Stack, InputBase, Box, Paper } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import cover from "@/public/images/helpHeaderBackground.png";

const Search = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  p: 4,
  width: "100%",
}));

function Banner() {
  console.log(cover);
  return (
    <Box>
      {/* <CardMedia
        component="img"
        sx={{  }}
        image={cover.src}
      /> */}
      <Paper
        sx={{
          display: "flex",
          background: `url(${cover.src})`,
          height: "400px",
          justifyContent: "center",
          alignItems: "center",
        }}
        width="100%"
      >
        <Stack
          width={{ md: "50%", xs: "90%" }}
          height="fit-content"
          className="bg-white opacity-85 p-4"
        >
          <h1 className="text-3xl">خوش آمدی! چطور میتوانیم کمک کنیم؟</h1>
          <Search>
            <SearchIcon color="white" />
            <InputBase
              // onChange={""}
              sx={{ fontFamily: "inherit" }}
              placeholder="جستجوی هرچی که میخوایی"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </Stack>
      </Paper>
    </Box>
  );
}

export default Banner;
