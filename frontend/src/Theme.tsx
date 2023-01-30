import * as React from "react";
import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#FBFBFD",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "50px",
          textTransform: "none",
          fontSize: 16,
        },
        contained: {
          boxShadow: "none",
          "&:active": {
            boxShadow: "none",
          },
        },
        containedPrimary: {
          backgroundColor: "#3F51B5",
          "&:hover": {
            backgroundColor: "#3F51B5",
          },
        },
        containedSecondary: {
          backgroundColor: "#F50057",
          "&:hover": {
            backgroundColor: "#F50057",
          },
        },
      },
    },
  },
});
