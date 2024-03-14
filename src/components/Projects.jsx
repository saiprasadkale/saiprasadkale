import { Box, Grid, Typography } from "@mui/material";
import React from "react";

import "../style/Project.css";

export default function Projects() {
  return (
    <Box
      sx={{
        height: "100vh",
        background: "rgb(240, 240, 240)",
        background:
          "linear-gradient(90deg, rgba(240, 240, 240, 1) 0%, rgba(240, 240, 240, 1) 35%, rgba(240, 240, 240, 1) 100%)",
      }}
      id="project"
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
        <Box sx={{ textAlign: "center", padding: "15px" }}>
          <Typography
            width={{ sx: "100%", sm: "50%" }}
            margin={{ sm: "auto" }}
            variant="h6"
            className="easter-egg"
          >
            Thank you for your visit!
          </Typography>
          <Box>
            <Typography>
              I am currently developing a MERN-based chat application with
              real-time chat capabilities using Socket.IO. This project
              encompasses both group chat and one-on-one chat functionalities,
              providing users with a dynamic and interactive communication
              experience. Stay tuned for updates on my profile website!
            </Typography>
          </Box>
        </Box>
      </Grid>
    </Box>
  );
}
