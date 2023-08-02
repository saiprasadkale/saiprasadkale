import { Box, Grid, Typography } from "@mui/material";
import React from "react";

function About() {
  return (
    <Box
      sx={{
        height: "100vh",
        background: "rgb(240, 240, 240)",
        background:
          "linear-gradient(90deg, rgba(240, 240, 240, 1) 0%, rgba(240, 240, 240, 1) 35%, rgba(240, 240, 240, 1) 100%)",
      }}
    >
      <Grid
        container
        justifyContent={"center"}
        flexDirection={"column"}
        alignItems={"center"}
      >
        <Box >
          <Typography variant="h4" fontWeight={"bold"}>
            ABOUT ME
          </Typography>
        </Box>
        <Box width={'5rem'} sx={{borderBottom: '5px solid #ebb928',borderRadius: '2.5px'}}></Box>
        <Box width={'45%'}>
          <Box textAlign={"center"}>
            <Typography variant="subtitle1">
              Here you will find more information about me, what I do, and my
              current skills mostly in terms of programming and technology
            </Typography>
          </Box>
        </Box>
      </Grid>
      {/* <Box sx={{display:'flex' ,justifyContent:'center',flexDirection:'column',alignItems:'center'}}>
        <Box sx={{background:'blue' ,width:'50%',textAlign:'center',marginTop:'2rem'}}>
        <Typography variant='subtitle1'>Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology</Typography>

        </Box>
        <Box sx={{background:'blue' ,width:'50px',height:'50px',marginTop:'2rem'}}>
        </Box>
        <Box sx={{background:'blue' ,width:'50px',height:'50px',marginTop:'2rem'}}>
        </Box>
        </Box> */}
    </Box>
  );
}

export default About;
