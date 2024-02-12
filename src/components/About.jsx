import { Box, Grid, Link, Typography } from "@mui/material";
import React from "react";
import { primary } from "../colors/primary";

function About() {
  const boxRender = (text) => {
    return (
      <Grid
        item
        m={".35rem .7rem"}
        sx={{
          height: "3rem",
          borderRadius: ".5rem",
          padding: "1rem",
          background: primary.grey,
          display: "flex",
          alignItems: "center",
        }}
      >
        {text}
      </Grid>
    );
  };
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
            ABOUT ME
          </Typography>
        </Box>
        <Box
          width={"5rem"}
          sx={{ borderBottom: "5px solid #ebb928", borderRadius: "2.5px" }}
        ></Box>
        <Box width={"45%"}>
          <Box textAlign={"center"}>
            <Typography variant="subtitle1" pt={"2rem"}>
              Here you will find more information about me, what I do, and my
              current skills mostly in terms of programming and technology
            </Typography>
          </Box>
        </Box>
      </Grid>
      <Grid container xs={12}>
        <Grid item xs={6} p={"3rem 7rem"}>
          <Box>
            <Typography variant="h5" fontWeight={"bold"} my={"1rem"}>
              Get to know me!
            </Typography>
            <Typography my={"1rem"} lineHeight={"1.5rem"}>
              I'm a{" "}
              <Box component="span" fontWeight="bold">
                Frontend Web Developer
              </Box>{" "}
              building the Front-end of Websites and Web Applications that leads
              to the success of the overall product. Check out some of my work
              in the{" "}
              <Box component="span" fontWeight="bold">
                Projects
              </Box>{" "}
              section.
            </Typography>
            <Typography my={"1rem"} lineHeight={"1.5rem"}>
              I also like sharing content related to the stuff that I have
              learned over the years in{" "}
              <Box component="span" fontWeight="bold">
                Web Development
              </Box>{" "}
              so it can help other people of the Dev Community. Feel free to
              Connect or Follow me on my{" "}
              <Link
                href="https://www.linkedin.com/in/saiprasadkale/"
                target="_blank"
              >
                Linkedin
              </Link>{" "}
              where I post useful content related to Web Development and
              Programming
            </Typography>
            <Typography my={"1rem"} lineHeight={"1.5rem"}>
              I'm open to{" "}
              <Box component="span" fontWeight="bold">
                Job{" "}
              </Box>
              opportunities where I can contribute, learn and grow. If you have
              a good opportunity that matches my skills and experience then
              don't hesitate to{" "}
              <Box component="span" fontWeight="bold">
                contact
              </Box>{" "}
              me.
            </Typography>
          </Box>
        </Grid>
        <Grid item container xs={6} p={"3rem 7rem"} rowSpacing={{ xs: 0 }}>
          {boxRender("HTML")}
          {boxRender("CSS")}
          {boxRender("JavaScript")}
          {boxRender("React")}
          {boxRender("SASS")}
          {boxRender("GIT")}
          {boxRender("Responsive Design")}
          {boxRender("SEO")}
          {boxRender("Terminal")}
          {boxRender("Express Basics")}
          {boxRender("SQL Basics")}
        </Grid>
      </Grid>
    </Box>
  );
}

export default About;
