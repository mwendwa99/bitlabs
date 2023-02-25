import { Box, Container, Grid, Typography } from "@mui/material";

const Contact = () => {
  return (
    <Container maxWidth="lg">
      <Typography variant="h1" gutterBottom>
        Contact Us
      </Typography>
      <Typography variant="h6" gutterBottom>
        We pride ourselves in being trusted and having the opportunity to work
        with leading companies in their respective fields.
      </Typography>
      <Grid container spacing={0} sx={{ p: 2, mt: 2 }}>
        <Grid item xs={12} sm={6} md={3}>
          <Box
            sx={{
              bgcolor: "primary.main",
              height: "100%",
              width: "100%",
              borderRadius: "10px",
            }}
          >
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;
