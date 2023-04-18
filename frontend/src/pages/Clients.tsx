import React from "react";
import { Typography, Container, Grid, Box } from "@mui/material";
import vcck from "../../assets/clients/vcck.webp";
import legalcompass from "../../assets/clients/legalcompass.webp";
import pemter from "../../assets/clients/pemter.webp";
import mamadobi from "../../assets/clients/mamadobi.webp";

interface ImageList {
  src: string;
  alt: string;
}

const imageList: ImageList[] = [
  {
    src: vcck,
    alt: "vcck",
  },
  {
    src: legalcompass,
    alt: "legalcompass",
  },
  {
    src: pemter,
    alt: "pemter",
  },
  {
    src: mamadobi,
    alt: "mamadobi",
  },
];

const Clients: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <Typography variant="h1" gutterBottom>
        Our Clients
      </Typography>
      <Typography variant="h6" gutterBottom>
        We pride ourselves in being trusted and having the opportunity to work
        with leading companies in their respective fields.
      </Typography>
      <Grid container spacing={0} sx={{ p: 2, mt: 2 }}>
        {imageList.map((image, index) => (
          <Grid key={index} item xs={12} sm={6} md={3}>
            <img src={image.src} alt={image.alt} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Clients;
