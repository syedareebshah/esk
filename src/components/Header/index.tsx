"use client";
import React from "react";
import { Typography, Box, Stack, useMediaQuery } from "@mui/material";
import Image from "next/image";
import logo from "../../../public/logo.jpeg";
import styles from "./styles.module.css";
import theme from "@/app/theme";
import MobileHeader from "./mobileHeader";
import Link from "next/link";
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
        <Link href={"/"}>
          <Image
            alt="Mountains"
            src={logo}
            style={{
              width: "auto",
              height: "70px",
              marginLeft: "-10px",
            }}
          />
        </Link>
        <Stack
          sx={{
            width: "50%",
          }}
          direction={"row"}
          justifyContent={"space-between"}
        >
          <Link
            style={{
              textDecoration: "none",
            }}
            href={"/"}
          >
            <p className={styles.headerText}>Home</p>
          </Link>
          <Link
            style={{
              textDecoration: "none",
            }}
            href={"/About"}
          >
            <p className={styles.headerText}>About</p>
          </Link>
          <Link
            style={{
              textDecoration: "none",
            }}
            href={"/Courses"}
          >
            <p className={styles.headerText}>Course</p>
          </Link>
          <Link
            style={{
              textDecoration: "none",
            }}
            href={"/Testimonials"}
          >
            <p className={styles.headerText}>Testimonials</p>
          </Link>
          <Link
            style={{
              textDecoration: "none",
            }}
            href={"/Faq"}
          >
            <p className={styles.headerText}>FAQ</p>
          </Link>
          <Link
            style={{
              textDecoration: "none",
            }}
            href={"/Founder"}
          >
            <p className={styles.headerText}>Founder</p>
          </Link>
          <Link
            style={{
              textDecoration: "none",
            }}
            href={"/WhyUs"}
          >
            <p className={styles.headerText}>Why Us</p>
          </Link>
          <Link
            style={{
              textDecoration: "none",
            }}
            href={"/Contact"}
          >
            <p className={styles.headerText}>Contact</p>
          </Link>
        </Stack>
      </Stack>
    </div>
  );
};

export default Header;
