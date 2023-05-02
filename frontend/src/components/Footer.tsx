import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function StickyFooter() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        // position at the bottom of the page
        position: "absolute",
        bottom: 0,
      }}
    >
      <Box
        component="footer"
        sx={{
          //   py: 3,
          //   px: 2,
          //   mt: "auto",
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={3}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  height: 100,
                  justifyContent: "center",
                }}
              >
                <Typography variant="h6" gutterBottom>
                  Heading
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  Something here to give the footer a purpose!
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  height: 100,
                  justifyContent: "center",
                }}
              >
                <Typography variant="h6" gutterBottom>
                  Heading
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  Something here to give the footer a purpose!
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  height: 100,
                  justifyContent: "center",
                }}
              >
                <Typography variant="h6" gutterBottom>
                  Heading
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  Something here to give the footer a purpose!
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  height: 100,
                  justifyContent: "center",
                }}
              >
                <Typography variant="h6" gutterBottom>
                  Heading
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  Something here to give the footer a purpose!
                </Typography>
              </Box>
            </Grid>
          </Grid>

          <Copyright />
        </Container>
      </Box>
    </Box>
  );
}
