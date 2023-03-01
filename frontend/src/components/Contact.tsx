import {
  Box,
  Container,
  Grid,
  Typography,
  FormControl,
  TextField,
} from "@mui/material";
import Button from "./Button";

const Contact = () => {
  const handleSubmit = () => {
    console.log("submit");
  };

  return (
    <Container maxWidth="lg">
      <Typography variant="h3" gutterBottom>
        Let's start a project together
      </Typography>
      <Typography variant="h4" align="center" gutterBottom>
        We pride ourselves in being trusted and having the opportunity to work
        with leading companies in their respective fields.
      </Typography>
      <FormControl>
        <Grid container spacing={2} sx={{ p: 2 }}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              id="first-name"
              label="First Name"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              id="last-name"
              label="Last Name"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth id="email" label="Email" variant="outlined" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth id="phone" label="Phone" variant="outlined" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              id="company"
              label="Company"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <TextField
              fullWidth
              id="subject"
              label="Subject"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <TextField
              fullWidth
              id="message"
              label="Message"
              variant="outlined"
              multiline
              rows={5}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <Button
              text={"SUBMIT"}
              variant="contained"
              color="secondary"
              action={handleSubmit}
            />
          </Grid>
        </Grid>
      </FormControl>
    </Container>
  );
};

export default Contact;
