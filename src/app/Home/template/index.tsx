import { Box, Typography } from "@mui/material";
import React from "react";

type Props = {};

const HomePage = (props: Props) => {
  return (
    <Box
      sx={{
        height: "80vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <h1>ESK Landing website under development</h1>
      <h3>Currently its in design phase, real data will be added soon...</h3>
      <h3>Stay tuned...</h3>
    </Box>
  );
};

export default HomePage;
