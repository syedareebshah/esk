import { Box, Typography } from "@mui/material";
import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import banner from "../../../../public/banner.png";
const WhyUsPage = () => {
  return (
    <Box
      sx={{
        paddingTop: "90px",
      }}
    >
      <div className={styles.mianContainer}>
        <Typography
          sx={{
            fontSize: "35px",
            fontWeight: "bold",
            paddingTop: "50px",
            color: "white",
          }}
        >
          Why Us
        </Typography>
      </div>
      <Box
        sx={{
          maxWidth: "1100px",
          margin: "0px auto",
          padding: "35px",
          backgroundColor: "white",
          position: "relative",
          top: "-70px",
          display: "flex",
          borderRadius: "16px",
          boxShadow: "0px 5px 25px -5px black",
        }}
      >
        <Image
          src={banner}
          alt="img"
          style={{
            maxWidth: "1000px",
            width: "100%",
            height: "auto",
            borderRadius: "16px",
            margin: "0 auto",
          }}
        />
      </Box>
    </Box>
  );
};

export default WhyUsPage;
