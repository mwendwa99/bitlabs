import * as React from "react";
import ScopedCssBaseline from "@mui/material/ScopedCssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

interface SimpleContainerProps {
  children: React.ReactNode;
}

const SimpleContainer: React.FC<SimpleContainerProps> = ({ children }) => {
  return (
    <React.Fragment>
      <ScopedCssBaseline />
      <Container maxWidth="md">
        <Box sx={{ bgcolor: "#cfe8fc", height: "100vh" }}>{children}</Box>
      </Container>
    </React.Fragment>
  );
};

export default SimpleContainer;
