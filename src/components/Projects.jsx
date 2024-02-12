import { Box, Grid, Typography } from "@mui/material";
import React from "react";

export default function Projects() {
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
        <Box>
          <Typography variant="h4" fontWeight={"bold"} mt={"1.5rem"}>
            PROJECTS
          </Typography>
        </Box>
        <Box>
          <Typography>
            Thank you for your visit! I'am eagerly working on exciting projects.
            Be sure to check back soon for the latest updates and developments.
          </Typography>
        </Box>
      </Grid>
    </Box>
  );
}
