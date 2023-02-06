import * as React from "react";
import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  typography: {
    fontFamily: "Ubuntu, sans-serif",
    allVariants: {
      color: "#01244C",
    },
    fontSize: 12,
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
        h1: {
          fontSize: 48,
          fontWeight: 700,
          lineHeight: 1.2,
        },
        h2: {
          fontSize: 36,
          fontWeight: 700,
          lineHeight: 1.2,
        },
        h3: {
          fontSize: 24,
          fontWeight: 700,
          lineHeight: 1.2,
        },
        h4: {
          fontSize: 18,
          fontWeight: 700,
          lineHeight: 1.2,
        },
        h5: {
          fontSize: 16,
          fontWeight: 700,
          lineHeight: 1.2,
        },
        h6: {
          fontSize: 14,
          fontWeight: 700,
          lineHeight: 1.2,
        },
        body1: {
          fontSize: 14,
          fontWeight: 400,
          lineHeight: 1.2,
        },
        body2: {
          fontSize: 12,
          fontWeight: 400,
          lineHeight: 1.2,
        },
        subtitle1: {
          fontSize: 14,
          fontWeight: 400,
          lineHeight: 1.2,
        },
        subtitle2: {
          fontSize: 12,
          fontWeight: 400,
          lineHeight: 1.2,
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: "none",
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