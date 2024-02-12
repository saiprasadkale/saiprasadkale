import { Grid, Typography } from "@mui/material";
import React from "react";

export default function Contact() {
  return (
    <Grid
      justifyContent={"center"}
      container
      alignItems={"center"}
      sx={{
        backgroundColor: "#F0F0F0",
        opacity: "1",
        backgroundImage:
          "linear-gradient(30deg, #E9E9E9 12%, transparent 12.5%, transparent 87%, #E9E9E9 87.5%, #E9E9E9), linear-gradient(150deg, #E9E9E9 12%, transparent 12.5%, transparent 87%, #E9E9E9 87.5%, #E9E9E9), linear-gradient(30deg, #E9E9E9 12%, transparent 12.5%, transparent 87%, #E9E9E9 87.5%, #E9E9E9), linear-gradient(150deg, #E9E9E9 12%, transparent 12.5%, transparent 87%, #E9E9E9 87.5%, #E9E9E9), linear-gradient(60deg, #E9E9E977 25%, transparent 25.5%, transparent 75%, #E9E9E977 75%, #E9E9E977), linear-gradient(60deg, #E9E9E977 25%, transparent 25.5%, transparent 75%, #E9E9E977 75%, #E9E9E977)",
        backgroundSize: "80px 140px",
        backgroundPosition: "0 0, 0 0, 40px 70px, 40px 70px, 0 0, 40px 70px",
        height: "100vh",
      }}
    >
      <Typography>
        Feel free to Contact me by submitting the form below and I will get back
        to you as soon as possible
      </Typography>
    </Grid>
  );
}
