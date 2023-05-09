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
    <Typography variant="body2" color="primary">
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
        backgroundColor: "#01244c",
        color: "#fff",
      }}
    >
      <Container maxWidth="lg">
        <Grid container>
          <Grid item xs={12} sm={4}>
            <Typography color="primary" align="left" variant="h6" gutterBottom>
              Address
            </Typography>
            <Typography align="left" variant="subtitle1" color="primary">
              BitLabs Technologies
            </Typography>
            <Typography align="left" variant="subtitle1" color="primary">
              Nairobi, Kenya
            </Typography>
            <Typography align="left" variant="subtitle1" color="primary">
              Tel: +254796898480{" "}
            </Typography>
            <Stack direction="row" spacing={2} sx={{ py: 2 }}>
              <FacebookIcon fontSize="small" />
              <TwitterIcon fontSize="small" />
              <LinkedInIcon fontSize="small" />
            </Stack>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography
              color={"primary"}
              align="left"
              variant="h6"
              gutterBottom
            >
              Services
            </Typography>
            <Typography align="left" variant="subtitle1" color="primary">
              Web Development
            </Typography>
            <Typography align="left" variant="subtitle1" color="primary">
              Mobile Development
            </Typography>
            <Typography align="left" variant="subtitle1" color="primary">
              Business Intelligence
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography color="primary" align="left" variant="h6" gutterBottom>
              Resources
            </Typography>
            <Typography align="left" variant="subtitle1" color="primary">
              Success stories
            </Typography>
            <Typography align="left" variant="subtitle1" color="primary">
              Get in touch
            </Typography>
            <Typography align="left" variant="subtitle1" color="primary">
              About BitLabs
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Copyright />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
