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
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const formValues = {
      firstName: data.get("first-name") || "",
      lastName: data.get("last-name") || "",
      email: data.get("email") || "",
      phone: data.get("phone") || "",
      company: data.get("company") || "",
      subject: data.get("subject") || "",
      message: data.get("message") || "",
    };
    console.log(formValues);
  };

  return (
    <Container maxWidth="lg" sx={{ m: 2 }}>
      <Typography variant="h1" gutterBottom>
        Let's work together
      </Typography>
      <Typography variant="h4" align="center" gutterBottom>
        We pride ourselves in being trusted and having the opportunity to work
        with leading companies in their respective fields.
      </Typography>
      <Box component="form" noValidate onSubmit={handleSubmit}>
        <Grid container spacing={2} sx={{ p: 2 }}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              id="first-name"
              name="first-name"
              label="First Name"
              variant="outlined"
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              id="last-name"
              name="last-name"
              label="Last Name"
              variant="outlined"
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              id="email"
              name="email"
              label="Email"
              variant="outlined"
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              id="phone"
              name="phone"
              label="Phone"
              variant="outlined"
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              id="company"
              name="company"
              label="Company"
              variant="outlined"
              required
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <TextField
              fullWidth
              id="subject"
              name="subject"
              label="Subject"
              variant="outlined"
              required
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <TextField
              fullWidth
              id="message"
              name="message"
              label="Message"
              variant="outlined"
              multiline
              rows={5}
              required
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <Button
              text={"SUBMIT"}
              variant="contained"
              color="secondary"
              type="submit"
            />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Contact;
