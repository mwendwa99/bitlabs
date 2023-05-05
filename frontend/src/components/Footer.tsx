import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {"Copyright © "}
      <Link color="inherit" href="https://bitlabs.com/">
        BitLabs Technologies
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function StickyFooter() {
  return (
    <Box
      component="footer"
      sx={{
        display: "flex",
        flexDirection: "column",
        py: 4,
        mt: "auto",
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
      }}
    >
      <Container maxWidth="lg">
        <Grid container>
          <Grid item xs={12} sm={4}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                height: 100,
                justifyContent: "space-evenly",
              }}
            >
              <Typography align="left" variant="h6" gutterBottom>
                Address
              </Typography>
              <Typography
                align="left"
                variant="subtitle1"
                color="text.secondary"
                gutterBottom
              >
                BitLabs Technologies
                <br />
                Nairobi, Kenya
                <br />
                Tel: +254796898480{" "}
              </Typography>
              <Stack direction="row" spacing={2}>
                <FacebookIcon fontSize="small" />
                <TwitterIcon fontSize="small" />
                <LinkedInIcon fontSize="small" />
              </Stack>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                height: 100,
                justifyContent: "space-evenly",
              }}
            >
              <Typography align="left" variant="h6" gutterBottom>
                Services
              </Typography>
              <Typography
                align="left"
                variant="subtitle1"
                color="text.secondary"
              >
                Web Development
              </Typography>
              <Typography
                align="left"
                variant="subtitle1"
                color="text.secondary"
              >
                Mobile Development
              </Typography>
              <Typography
                align="left"
                variant="subtitle1"
                color="text.secondary"
              >
                Business Intelligence
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                height: 100,
                justifyContent: "space-evenly",
              }}
            >
              <Typography align="left" variant="h6" gutterBottom>
                Resources
              </Typography>
              <Typography
                align="left"
                variant="subtitle1"
                color="text.secondary"
              >
                Success stories
              </Typography>
              <Typography
                align="left"
                variant="subtitle1"
                color="text.secondary"
              >
                Get in touch
              </Typography>
              <Typography
                align="left"
                variant="subtitle1"
                color="text.secondary"
              >
                About BitLabs
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Copyright />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
