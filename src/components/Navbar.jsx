import { Box, Grid, Link, Typography } from "@mui/material";
import React from "react";
import { primary } from "../colors/primary";

export default function Navbar() {
  return (
    <Grid container sx={{height: '4rem',background:'#ffffff'}}>
      <Grid item xs={6} container alignItems={"center"}>
        <Box  pl={'10rem'}>
        <Typography variant="subtitle1" color={primary.secondary} fontWeight={'bold'} >SAIPRASAD KALE</Typography>

        </Box>
      </Grid>
      <Grid item xs={6} container alignItems={"center"} spacing={5}>
        <Grid item >
        <Link href="#" underline="none" >
          <Typography variant="subtitle2" color={primary.secondary} fontWeight={'bold'}>HOME</Typography>
        </Link>
        </Grid>
        <Grid item  >
        <Link href="#" underline="none" >
          <Typography variant="subtitle2" color={primary.secondary} fontWeight={'bold'}>ABOUT</Typography>
        </Link>
        </Grid>
        <Grid item  >
        <Link href="#" underline="none" >
          <Typography variant="subtitle2" color={primary.secondary} fontWeight={'bold'}>PROJECT</Typography>
        </Link>
        </Grid>
        <Grid item  >
        <Link href="#" underline="none" >
          <Typography variant="subtitle2" color={primary.secondary} fontWeight={'bold'}>CONTACT</Typography>
        </Link>
        </Grid>
      </Grid>
    </Grid>
  );
}
