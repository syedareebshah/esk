"use client";
import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import styles from "./styles.module.css";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

type Props = {};
const spanStyle = {
  padding: "20px",
  background: "#efefef",
  color: "#000000",
};

const divStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundSize: "cover",
  height: "300px",
};
const slideImages = [
  {
    url: "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    caption: "Slide 1",
  },
  {
    url: "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
    caption: "Slide 2",
  },
  {
    url: "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    caption: "Slide 3",
  },
];

const HomePage = (props: Props) => {
  return (
    <Box
      sx={{
        maxWidth: "1200px",
        margin: "0 auto",
        paddingTop: "35px",
        paddingBottom: "35px",
        paddingLeft: "30px",
        paddingRight: "30px",
      }}
    >
      <Grid container>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <h1 className={styles.headingTxtOne}>Become an</h1>
          <h1 className={styles.headingTxtTwo}>IT Professional</h1>
          <Typography
            sx={{
              fontSize: "16px",
              color: "#3a3838",
            }}
          >
            No IT background or college degree required, change your career
            into: You will be able to apply for the following jobs after
            training.
          </Typography>
          <Typography
            sx={{
              fontSize: "16px",
              color: "#3a3838",
            }}
          >
            These jobs are available everywhere.
          </Typography>

          <ul className={styles.list}>
            <li>
              <Typography>IT Support Specialist</Typography>
            </li>
            <li>
              <Typography>IT Helpdesk Support</Typography>
            </li>
            <li>
              <Typography>
                Cyber Security Specialist Desktop Support Specialist Cloud
                Support
              </Typography>
            </li>
            <li>
              <Typography>
                Specialist Network Support Specialist and much more
              </Typography>
            </li>
          </ul>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <Slide arrows={false} indicators={false}>
            {slideImages.map((slideImage, index) => (
              <div key={index}>
                <div
                  style={{
                    ...divStyle,
                    backgroundImage: `url(${slideImage.url})`,
                  }}
                >
                  <span style={spanStyle}>{slideImage.caption}</span>
                </div>
              </div>
            ))}
          </Slide>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HomePage;
