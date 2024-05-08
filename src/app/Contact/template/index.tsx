import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import styles from "./styles.module.css";
import EmailIcon from "@mui/icons-material/Email";
import PlaceIcon from "@mui/icons-material/Place";
import PhoneIcon from "@mui/icons-material/Phone";

const ContactPage = () => {
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
          Contact Us
        </Typography>
      </div>
      <Box
        sx={{
          maxWidth: "1100px",
          margin: "0px auto",
          padding: "50px 20px",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <div className={styles.card}>
              <div className={styles.floatingDiv}>
                <EmailIcon
                  sx={{
                    color: "white",
                    fontSize: "35px",
                  }}
                />
              </div>
              <h2 className={styles.cardHeading}>Email</h2>
              <Typography
                sx={{
                  lineHeight: "1.7",
                  textAlign: "center",
                }}
                color={"#3a3838"}
                marginTop={2}
                marginBottom={2}
              >
                <a
                  style={{
                    textDecoration: "none",
                    color: "#3a3838",
                  }}
                  href="mailto:eskit_t@outlook.com"
                >
                  eskit_t@outlook.com
                </a>
              </Typography>
            </div>
          </Grid>

          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <div className={styles.card}>
              <div className={styles.floatingDiv}>
                <PlaceIcon
                  sx={{
                    color: "white",
                    fontSize: "35px",
                  }}
                />
              </div>
              <h2 className={styles.cardHeading}>Address</h2>
              <Typography
                marginBottom={2}
                sx={{
                  textAlign: "center",
                }}
                marginTop={2}
                color={"#3a3838"}
              >
                18530 Ogden Street NW, Elk River, MN 55330 Minnesota,
                Minneapolis USA
              </Typography>
            </div>
          </Grid>

          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <div className={styles.card}>
              <div className={styles.floatingDiv}>
                <PhoneIcon
                  sx={{
                    color: "white",
                    fontSize: "35px",
                  }}
                />
              </div>
              <h2 className={styles.cardHeading}>Phone</h2>
              <Typography
                color={"#3a3838"}
                marginBottom={2}
                textAlign={"center"}
                marginTop={2}
              >
                +1 763 777 1177
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default ContactPage;
