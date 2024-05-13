"use client";
import React from "react";
import { Box, Grid, Stack, Typography, useMediaQuery } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import MailIcon from "@mui/icons-material/Mail";
import styles from "./styles.module.css";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import theme from "@/app/theme";
import Image from "next/image";
import delLogo from "../../../public/dell.png";
import ciscoLogo from "../../../public/cisco.png";
import juniper from "../../../public/juniper.png";
import microsoftLogo from "../../../public/microsoft.png";
import sonicaLogo from "../../../public/sonica.png";
import fortinet from "../../../public/fortinet.png";
import paloAlto from "../../../public/paloAlto.png";
import Link from "next/link";

const Footer = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isBelowSm = useMediaQuery(theme.breakpoints.down("sm"));
  const isTab = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <Grid
        sx={{
          maxWidth: "1120px",
          margin: "0 auto",
          padding: "20px 50px",
        }}
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
      >
        <Stack
          paddingTop={5}
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <a href="https://www.microsoft.com/en-us/" target="blank">
            <Image
              alt="logo"
              src={microsoftLogo}
              style={{
                maxWidth: "140px",
                width: "100%",
                height: "auto",
              }}
            />
          </a>
          <a href="https://www.sonicwall.com/" target="blank">
            <Image
              alt="logo"
              src={sonicaLogo}
              style={{
                maxWidth: "140px",
                width: "100%",
                height: "auto",
              }}
            />
          </a>
          {!isBelowSm && (
            <a href="https://www.cisco.com/" target="blank">
              <Image
                alt="logo"
                src={ciscoLogo}
                style={{
                  width: "auto",
                  height: "40px",
                }}
              />
            </a>
          )}
          {!isBelowSm && (
            <a href="https://juniper.net" target="blank">
              <Image
                alt="logo"
                src={juniper}
                style={{
                  maxWidth: "140px",
                  width: "100%",
                  height: "auto",
                }}
              />
            </a>
          )}
          {!isTab && (
            <a href="https://www.fortinet.com/" target="blank">
              <Image
                alt="logo"
                src={fortinet}
                style={{
                  maxWidth: "140px",
                  width: "100%",
                  height: "auto",
                }}
              />
            </a>
          )}
          {!isTab && (
            <a href="https://www.paloaltonetworks.com/" target="blank">
              <Image
                alt="logo"
                src={paloAlto}
                style={{
                  maxWidth: "140px",
                  width: "100%",
                  height: "auto",
                }}
              />
            </a>
          )}
        </Stack>
      </Grid>
      <Box
        sx={{
          backgroundColor: "#0c365d",
          paddingLeft: "20px",
          paddingRight: "20px",
        }}
      >
        <Grid
          sx={{
            maxWidth: "1135px",
            margin: "0 auto",
            paddingBottom: "80px",
            paddingTop: "80px",
            backgroundColor: "#0c365d",
          }}
          container
          rowSpacing={10}
        >
          <Grid
            sx={{
              width: "90%",
              paddingTop: "0px !important",
            }}
            item
            xl={3}
            lg={3}
            md={3}
            sm={3}
            xs={0}
          >
            <Typography
              sx={{
                fontSize: "20px",
                fontWeight: "600",
                color: "white",
              }}
            >
              ESK IT Training
            </Typography>
            <Stack
              direction={"row"}
              justifyContent={"start"}
              alignItems={"center"}
            >
              <LocationOnIcon
                sx={{
                  fontSize: "20px",
                  color: "white",
                }}
              />
              <Typography
                sx={{
                  color: "white",
                  fontSize: "15px",
                  paddingLeft: "8px",
                }}
              >
                18530 Ogden Street NW, Elk River, MN 55330 Minnesota,
                Minneapolis
              </Typography>
            </Stack>
            <Stack direction={"row"} justifyContent={"start"}>
              <CallIcon
                sx={{
                  fontSize: "20px",
                  color: "white",
                }}
              />
              <Typography
                sx={{
                  color: "white",
                  fontSize: "15px",
                  paddingLeft: "8px",
                }}
              >
                Office +1 763 777 1177
              </Typography>
            </Stack>
            <Stack direction={"row"} justifyContent={"start"}>
              <CallIcon
                sx={{
                  fontSize: "20px",
                  color: "white",
                }}
              />
              <Typography
                sx={{
                  color: "white",
                  fontSize: "15px",
                  paddingLeft: "8px",
                }}
              >
                Mobile and Whatsapp +1 763 777 1177
              </Typography>
            </Stack>
            <Stack direction={"row"} justifyContent={"start"}>
              <MailIcon
                sx={{
                  fontSize: "20px",
                  color: "white",
                }}
              />
              <Typography
                sx={{
                  color: "white",
                  fontSize: "15px",
                  paddingLeft: "8px",
                }}
              >
                eskit_t@outlook.com
              </Typography>
            </Stack>
          </Grid>

          {!isMobile && (
            <Grid
              sx={{
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
                paddingBottom: "0px",
                paddingTop: "0px !important",
              }}
              item
              xl={3}
              lg={3}
              md={3}
              sm={3}
            >
              <Box>
                <Link
                  style={{
                    textDecoration: "none",
                  }}
                  href={"/About"}
                >
                  <p className={styles.navText}>About</p>
                </Link>

                <Link
                  style={{
                    textDecoration: "none",
                  }}
                  href={"/Founder"}
                >
                  <p className={styles.navText}>Founder</p>
                </Link>

                <Link
                  style={{
                    textDecoration: "none",
                  }}
                  href={"/"}
                >
                  <p className={styles.navText}>Why Us</p>
                </Link>

                <Link
                  style={{
                    textDecoration: "none",
                  }}
                  href={"/Contact"}
                >
                  <p className={styles.navText}>Contact</p>
                </Link>
              </Box>
            </Grid>
          )}
          {!isMobile && (
            <Grid
              sx={{
                paddingTop: "0px !important",
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
              }}
              item
              xl={3}
              lg={3}
              md={3}
              sm={3}
            >
              <Box>
                <Link
                  style={{
                    textDecoration: "none",
                  }}
                  href={"/Courses"}
                >
                  <p className={styles.navText}>Training cources</p>
                </Link>
                <Link
                  style={{
                    textDecoration: "none",
                  }}
                  href={"/Testimonials"}
                >
                  <p className={styles.navText}>Testimonials </p>
                </Link>
                <Link
                  style={{
                    textDecoration: "none",
                  }}
                  href={"/Faq"}
                >
                  <p className={styles.navText}>FAQ</p>
                </Link>
              </Box>
            </Grid>
          )}
          {!isMobile && (
            <Grid
              sx={{
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
                paddingTop: "0px !important",
              }}
              item
              xl={3}
              lg={3}
              md={3}
              sm={3}
            >
              <Box>
                <Typography
                  sx={{
                    fontSize: "20px",
                    fontWeight: "600",
                    color: "white",
                  }}
                >
                  Follow us
                </Typography>

                <Stack spacing={1} direction={"row"} justifyContent={"start"}>
                  <FacebookOutlinedIcon
                    sx={{
                      fontSize: "30px",
                      color: "white",
                    }}
                  />
                  <InstagramIcon
                    sx={{
                      fontSize: "30px",
                      color: "white",
                    }}
                  />
                </Stack>
              </Box>
            </Grid>
          )}
        </Grid>
      </Box>
      <Box
        sx={{
          backgroundColor: "#072a4b",
          paddingLeft: "20px",
          paddingRight: "20px",
          paddingTop: "30px",
          paddingBottom: "30px",
        }}
      >
        <Typography
          sx={{
            color: "white",
            fontSize: "16px",
            textAlign: "center",
          }}
        >
          All rights reserved by ESK IT Training © 2020 | Designed By BeeraTech
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
