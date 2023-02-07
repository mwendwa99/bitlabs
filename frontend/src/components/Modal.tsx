import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide() {
  const [open, setOpen] = React.useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        sx={{ display: "none" }}
        variant="outlined"
        onClick={handleClickOpen}
        aria-hidden="true"
      >
        DISCLAIMER
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle sx={{ fontSize: 20 }}>{"DISCLAIMER!"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Hey there! You are currently previewing the BitLabs development
            site. Some features may be broken or unavailable. Please keep this
            in mind as you browse our beautiful website . <br /> <br />
            If you have any questions or concerns, please contact us through our
            email &nbsp;
            <a
              href="mailto:brianmwendwa.mu@gmail.com"
              style={{ fontWeight: 700 }}
            >
              <u>here</u>
            </a>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose}>Agree</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
