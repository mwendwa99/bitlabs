import * as React from "react";
import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  typography: {
    fontFamily: "Ubuntu, sans-serif",
    allVariants: {
      color: "#01244C",
    },
  },

  palette: {
    primary: {
      main: "#FBFBFD",
    },
    text: {
      primary: "#01244C",
    },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          color: "#01244C",
        },
        h6: {
          color: "#01244C",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "50px",
          textTransform: "capitalize",
          fontSize: 14,
          padding: "10px",
          width: "100px",
          height: "50px",
          fontWeight: 700,
          color: "#FBFBFD",
        },
        contained: {
          boxShadow: "none",
          "&:active": {
            // add box shadow
            boxShadow: "0px 0px 0px 0px rgba(0, 0, 0, 0.2)",
          },
        },
        containedPrimary: {
          backgroundColor: "#3F51B5",
          "&:hover": {
            backgroundColor: "#3F51B5",
          },
        },
        containedSecondary: {
          backgroundColor: "#01244C",
          // opacity
          background: `rgba(1, 36, 76, 0.5)`,
          "&:hover": {
            backgroundColor: "#01244C",
          },
        },
      },
    },
  },
});
