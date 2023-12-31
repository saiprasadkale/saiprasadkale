import { Box, Grid, Typography } from "@mui/material";
import React from "react";

export default function Home() {
  return (
    <Grid
      justifyContent={"center"}
      container
      alignItems={"center"}
      sx={{
        backgroundColor: '#F0F0F0',
        opacity: '1',
        backgroundImage:  'linear-gradient(30deg, #E9E9E9 12%, transparent 12.5%, transparent 87%, #E9E9E9 87.5%, #E9E9E9), linear-gradient(150deg, #E9E9E9 12%, transparent 12.5%, transparent 87%, #E9E9E9 87.5%, #E9E9E9), linear-gradient(30deg, #E9E9E9 12%, transparent 12.5%, transparent 87%, #E9E9E9 87.5%, #E9E9E9), linear-gradient(150deg, #E9E9E9 12%, transparent 12.5%, transparent 87%, #E9E9E9 87.5%, #E9E9E9), linear-gradient(60deg, #E9E9E977 25%, transparent 25.5%, transparent 75%, #E9E9E977 75%, #E9E9E977), linear-gradient(60deg, #E9E9E977 25%, transparent 25.5%, transparent 75%, #E9E9E977 75%, #E9E9E977)',
        backgroundSize: '80px 140px',
        backgroundPosition: '0 0, 0 0, 40px 70px, 40px 70px, 0 0, 40px 70px',
        height: "100vh",
        // background: "rgb(240, 240, 240)",
        // background:
        //   "linear-gradient(90deg, rgba(240, 240, 240, 1) 0%, rgba(240, 240, 240, 1) 35%, rgba(240, 240, 240, 1) 100%)",
      }}
    >
      <Box sx={{textAlign:'center'}}>
        <Box mb={5}>
          <Typography variant="h2" fontWeight={"bold"} color={'#111'}>
            {" "}
            HEY, I'M SAIPRASAD KALE
          </Typography>
        </Box>
        <Box>
          <Typography variant="h6" fontWeight={"medium"} color={'#333'}>
            A Frontend focused Web Developer building the Frontend of Websites
            and Web
          </Typography>
          <Typography variant="h6" fontWeight={"medium"} color={'#333'}>
            Applications that leads to the success of the overall product
          </Typography>
        </Box>
      </Box>
    </Grid>
  );
}
