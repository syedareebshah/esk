"use client";
import React from "react";
import { Typography, Box, Stack, useMediaQuery } from "@mui/material";
import Image from "next/image";
import logo from "../../../public/logo.jpeg";
import styles from "./styles.module.css";
import theme from "@/app/theme";
import MobileHeader from "./mobileHeader";
const Header = () => {
  const isTab = useMediaQuery(theme.breakpoints.down("md"));

  return isTab ? (
    <MobileHeader />
  ) : (
    <div className={styles.main}>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        sx={{
          maxWidth: "1135px",
          margin: "0 auto",
        }}
      >
        <Image
          alt="Mountains"
          src={logo}
          style={{
            maxWidth: "185px",
            width: "100%",
            height: "auto",
          }}
        />
        <Stack
          sx={{
            width: "50%",
          }}
          direction={"row"}
          justifyContent={"space-between"}
        >
          <p className={styles.headerText}>Home</p>
          <p className={styles.headerText}>About</p>
          <p className={styles.headerText}>Mission</p>
          <p className={styles.headerText}>Mission</p>
          <p className={styles.headerText}>Mission</p>
          <p className={styles.headerText}>Mission</p>
        </Stack>
      </Stack>
    </div>
  );
};

export default Header;
