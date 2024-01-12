'use client'
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import Image from "next/image";
import logo from "@/public/images/logo.svg";
import Link from "next/link";

const pageChange= [
  {name:"ورود" , route:'login'},
  {name:"ثبت‌نام" , route:'register'},
  {name:"راهنما" , route:'guide'},
  {name:"ساز و کار" , route:'how-it-works'},
  {name:"درباره ما" , route:'about-us'},
  {name:"پشتیبانی" , route:'support'}
];

const pages = [
  "ورود",
  "ثبت‌نام",
  "راهنما",
  "ساز و کار",
  "درباره ما",
  "پشتیبانی",
];

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleCloseNavMenu = () => setAnchorElNav(null);
  const handleOpenNavMenu = (event) => setAnchorElNav(event.currentTarget);

  return (
    <AppBar position="static" className="bg-white shadow-none">
      <Toolbar>
        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: "block", md: "none" },
            }}
          >
            {pages.map((page, index) => {
              return (
                <MenuItem key={index} onClick={handleCloseNavMenu}>
                <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              );
            })}
          </Menu>
        </Box>

        <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
          {pageChange.map((page , index) => {
            return (
              // <Button
              //   key={page}
              //   onClick={handleCloseNavMenu}
              //   sx={{ my: 2, display: "block" }}
              //   className="text-dark text-lg"
              // >
              //   {page}
              // </Button>
              <Link key={index} href={`/${page.route}`} className="text-dark text-lg inline-block px-3 hover:text-teal-500 hover:border-b transition-all duration-200" onClick={handleCloseNavMenu}>{page.name}</Link>
            )
          } )}
        </Box>
        <Image
          src={logo}
          alt="logo"
          width={45}
          height={45}
          quality={100}
          onLoad={(e) => console.log("hi")}
        />
      </Toolbar>
    </AppBar>
  );
}
export default Header;
