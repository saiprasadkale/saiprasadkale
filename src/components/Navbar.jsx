import {
  AppBar,
  Avatar,
  Box,
  Button,
  Grid,
  IconButton,
  Link,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState } from "react";

import { primary } from "../colors/primary";
import Pic from "../assets/logo.png";
import "../style/Navbar.css";

export default function Navbar() {
  const [anchorElNav, setAnchorElNav] = useState();
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const pages = ["Home", "About", "Projects"];
  return (
    <AppBar
      position="static"
      sx={{ background: "#ffffff", color: primary.secondary }}
    >
      <Toolbar
        sx={{
          justifyContent: "space-between",

          m: " 0 5rem",
        }}
      >
        <Box display={"flex"} alignItems={"center"} spacing={1}>
          <Avatar
            sx={{ width: "3rem", height: "3rem" }}
            alt="Remy Sharp"
            src={Pic}
          />
          <Typography
            variant="subtitle1"
            color={primary.secondary}
            fontWeight={"bold"}
            pl={"1rem"}
            component="a"
            href="#"
            sx={{
              ml: 2,
              textDecoration: "none !important",
            }}
          >
            SAIPRASAD KALE
          </Typography>
        </Box>

        <Stack
          className="normal"
          sx={{ display: { xs: "none", sm: "flex" } }}
          direction={"row"}
          spacing={2}
        >
          <Button sx={{ fontWeight: "bold" }} color="inherit">
            HOME
          </Button>
          <Button sx={{ fontWeight: "bold" }} color="inherit">
            ABOUT
          </Button>
          <Button sx={{ fontWeight: "bold" }} color="inherit">
            PROJECTS
          </Button>
        </Stack>
        <Box sx={{ flexGrow: "unset", display: { xs: "flex", sm: "none" } }}>
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
            {pages.map((page) => (
              <MenuItem key={page} onClick={handleCloseNavMenu}>
                <Typography
                  color={"inherit"}
                  textDecoration="none !important"
                  component="a"
                  href="#"
                  textAlign="center"
                >
                  {page}
                </Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
