// create a react functional component section
import React from "react";

import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";

// import Container from "../components/Container";
import Button from "../components/Button";
import List from "../components/List";
import Modal from "../components/Modal";

// assets
import man from "../assets/man.svg";
import icons from "../assets/icons.webp";
import maintenance from "../assets/maintenance.svg";
import test from "../assets/test.svg";
import customize from "../assets/customize.svg";
import consult from "../assets/consult.svg";

const listArray = [
  {
    title: "Testing",
    description:
      "Rigorous testing and quality assurance processes to ensure reliability and efficiency.",
    icon: test,
  },
  {
    title: "Customizability",
    description:
      "Custom software solutions tailored to meet the unique needs and goals of our clients.",
    icon: customize,
  },
  {
    title: "Maintenance",
    description:
      "Ongoing maintenance and support to ensure that our clients' software solutions continue to meet their needs over time.",
    icon: maintenance,
  },
  {
    title: "Consultation",
    description:
      "Technical consulting and guidance to help clients understand and evaluate their options.",
    icon: consult,
  },
];

// create an interface for the props
const gridStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: { xs: "center", md: "flex-start" },
  flexDirection: "column",
  p: { xs: 2, md: 0 },
};

const paperStyle = {
  backgroundColor: "transparent",
};

const typographyStyle = {
  textAlign: { xs: "flex-start", md: "left" },
  fontWeight: { xs: 600 },
};

const Landing = () => {
  return (
    <Container>
      <Grid container>
        <Grid sx={gridStyle} item xs={12} md={6}>
          <Paper sx={paperStyle} elevation={0}>
            <Typography
              sx={typographyStyle}
              gutterBottom
              align="left"
              variant="h1"
            >
              Elevate your business with expert software solutions
            </Typography>
          </Paper>
          <Paper sx={paperStyle} elevation={0}>
            <Typography
              sx={typographyStyle}
              gutterBottom
              align="left"
              variant="h6"
            >
              Revolutionize your business with BitLabs: expert custom software
              solutions that drive results
            </Typography>
          </Paper>
          <Box sx={{ mt: 2 }}>
            <Button variant="contained" text="Get Started" color="primary" />
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: { xs: "center", md: "flex-start" },
          }}
        >
          <Box
            sx={{
              p: 2,
              m: 2,
              height: { xs: "50%", sm: "80%", md: "100%" },
              width: { xs: "50%", sm: "80%", md: "100%" },
            }}
          >
            <img height="100%" width="100%" src={man} alt={"man"} />
          </Box>
        </Grid>

        {/* ******************************************************** */}
        <Grid sx={gridStyle} item xs={12} md={4}>
          <Paper sx={paperStyle} elevation={0}>
            <Typography
              sx={typographyStyle}
              gutterBottom
              align="left"
              variant="h1"
            >
              Efficiency, Innovation, Success
            </Typography>
          </Paper>
          <Paper sx={paperStyle} elevation={0}>
            <Typography
              sx={typographyStyle}
              gutterBottom
              align="left"
              variant="h6"
            >
              Unmatched support for your success: custom software solutions
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box sx={{ mt: 2 }}>
            <List data={listArray} />
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: { xs: "center", md: "flex-start" },
          }}
        >
          <Box
            sx={{
              p: 2,
              m: 2,
              height: { xs: "50%", sm: "80%", md: "100%" },
              width: { xs: "50%", sm: "80%", md: "100%" },
            }}
          >
            <img height={"100%"} width={"100%"} src={icons} alt={"icons"} />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Landing;
