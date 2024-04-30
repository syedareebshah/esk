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
const Footer = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  console.log({ isMobile });
  return (
    <>
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
                380 Flair Dr, Suite 227 EL Monte, 91731 California USA
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
                Office +1 323 419 5839
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
                Mobile and Whatsapp +1 626 747 5906
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
                info@everestitt.com
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
                <p className={styles.navText}>About</p>
                <p className={styles.navText}>Mission</p>
                <p className={styles.navText}>Leadership</p>
                <p className={styles.navText}>Team</p>
                <p className={styles.navText}>Team members</p>
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
                <p className={styles.navText}>Training cources</p>
                <p className={styles.navText}>Testimonials </p>
                <p className={styles.navText}>FAQ</p>
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
          All rights reserved by ESK IT Training © 2024 | Designed By BeeraTech
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
