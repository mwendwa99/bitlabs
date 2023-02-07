// create a react functional component section
import React from "react";
import { Typography, Grid, Box, Paper } from "@mui/material";

// create an interface for the props
interface SectionProps {
  // create a data prop that is an array of objects
  data: Array<{
    title: string;
    description: string;
    image: { src: string; alt: string; boolean: boolean };
    button?: JSX.Element;
  }>;
}

const gridStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: { xs: "center", md: "flex-start" },
  flexDirection: "column",
};

const paperStyle = {
  backgroundColor: "transparent",
};

const typographyStyle = {
  textAlign: { xs: "center", md: "left" },
};

const Section: React.FC<SectionProps> = ({ data }) => {
  return (
    <Grid container>
      {data.map((item, index) => (
        <React.Fragment key={index}>
          <Grid sx={gridStyle} item xs={12} md={6}>
            <Paper sx={paperStyle} elevation={0}>
              <Typography
                sx={typographyStyle}
                gutterBottom
                align="left"
                variant="h1"
              >
                {item.title}
              </Typography>
            </Paper>
            <Paper sx={paperStyle} elevation={0}>
              <Typography
                sx={typographyStyle}
                gutterBottom
                align="left"
                variant="h5"
              >
                {item.description}
              </Typography>
            </Paper>
            {item.button && <Box sx={{ mt: 2 }}>{item.button}</Box>}
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ p: 2, m: 2 }}>
              <img
                height="100%"
                width="100%"
                // style={{ objectFit: "contain" }}
                src={item.image["src"]}
                alt={item.image["alt"]}
              />
            </Box>
          </Grid>
        </React.Fragment>
      ))}
    </Grid>
  );
};

export default Section;
