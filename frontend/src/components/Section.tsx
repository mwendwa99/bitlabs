// create a react functional component section
import React from "react";
import { Typography, Grid, Box } from "@mui/material";

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
  alignItems: "flex-start",
  flexDirection: "column",
};

const Section: React.FC<SectionProps> = ({ data }) => {
  return (
    <Grid container>
      {data.map((item, index) => (
        <React.Fragment key={index}>
          <Grid sx={gridStyle} item xs={12} md={6}>
            <Typography gutterBottom align="left" variant="h1">
              {item.title}
            </Typography>
            <Typography gutterBottom align="left" variant="h5">
              {item.description}
            </Typography>
            {item.button && <Box sx={{ mt: 2 }}>{item.button}</Box>}
          </Grid>
          <Grid item xs={12} md={6}>
            <img src={item.image["src"]} alt={item.image["alt"]} />
          </Grid>
        </React.Fragment>
      ))}
    </Grid>
  );
};

export default Section;
