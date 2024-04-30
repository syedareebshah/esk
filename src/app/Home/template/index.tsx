import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import styles from "./styles.module.css";

type Props = {};

const HomePage = (props: Props) => {
  return (
    <Box
      sx={{
        maxWidth: "1135px",
        margin: "0 auto",
        paddingLeft: "30px",
        paddingRight: "30px",
      }}
    >
      <Grid container>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <h1 className={styles.headingTxtOne}>Become an</h1>
          <h1 className={styles.headingTxtTwo}>IT Professional</h1>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <h1 className={styles.headingTxtOne}>Become an</h1>
          <h1 className={styles.headingTxtTwo}>IT Professional</h1>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HomePage;
