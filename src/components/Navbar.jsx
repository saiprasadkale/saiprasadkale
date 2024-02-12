import { Avatar, Box, Grid, Link, Typography } from "@mui/material";
import React from "react";
import { primary } from "../colors/primary";
import Pic from "../assets/logo.png";

export default function Navbar() {
  return (
    <Grid
      container
      p={"1rem 5rem"}
      sx={{ height: "5rem", background: "#ffffff" }}
    >
      <Grid
        item
        xs={6}
        container
        alignItems={"center"}
        sx={{
          transitionDuration: ".5s",
        }}
      >
        <Avatar
          sx={{ width: "3rem", height: "3rem" }}
          alt="Remy Sharp"
          src={Pic}
        />
        <Box>
          <Link href="#" underline="none">
            <Typography
              variant="subtitle1"
              color={primary.secondary}
              fontWeight={"bold"}
              pl={"1rem"}
            >
              SAIPRASAD KALE
            </Typography>
          </Link>
        </Box>
      </Grid>
      <Grid item xs={6} container alignItems={"center"} spacing={5}>
        <Grid item sx={{ justifyContent: "right" }}>
          <Link href="#" underline="none">
            <Typography
              variant="subtitle2"
              color={primary.secondary}
              fontWeight={"bold"}
            >
              HOME
            </Typography>
          </Link>
        </Grid>
        <Grid item>
          <Link href="#" underline="none">
            <Typography
              variant="subtitle2"
              color={primary.secondary}
              fontWeight={"bold"}
            >
              ABOUT
            </Typography>
          </Link>
        </Grid>
        <Grid item>
          <Link href="#" underline="none">
            <Typography
              variant="subtitle2"
              color={primary.secondary}
              fontWeight={"bold"}
            >
              PROJECT
            </Typography>
          </Link>
        </Grid>
        <Grid item>
          <Link href="#" underline="none">
            <Typography
              variant="subtitle2"
              color={primary.secondary}
              fontWeight={"bold"}
            >
              CONTACT
            </Typography>
          </Link>
        </Grid>
      </Grid>
    </Grid>
  );
}
