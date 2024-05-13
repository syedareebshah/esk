"use client";
import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import aboutImage from "../../../../public/founder.png";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import comp1 from "../../../../public/comp1.png";
import comp2 from "../../../../public/comp2.webp";
import comp3 from "../../../../public/comp3.jpeg";
import comp4 from "../../../../public/comp4.png";
import comp5 from "../../../../public/comp5.png";
import comp6 from "../../../../public/comp6.png";
import comp7 from "../../../../public/comp7.png";
import theme from "@/app/theme";

const slider = [
  {
    image: comp1,
    url: "",
  },
  {
    image: comp2,
    url: "",
  },
  {
    image: comp3,
    url: "",
  },
  {
    image: comp4,
    url: "",
  },
  {
    image: comp5,
    url: "",
  },
  {
    image: comp6,
    url: "",
  },
  {
    image: comp7,
    url: "",
  },
];
const smallSlider = [
  {
    imgOne: { img: comp1, url: "https://www.ameriprise.com/" },
    imgTwo: { img: comp2, url: "https://www.unitedhealthgroup.com/" },
    imgThree: {
      img: comp3,
      url: "https://my.clevelandclinic.org/locations/fairview-hospital",
    },
    imgFour: { img: comp4, url: "https://www.westconsincu.org/" },
  },
  {
    imgOne: {
      img: comp5,
      url: "https://www.cisco.com/c/en/us/products/plus-as-a-service/secure-connect.html",
    },
    imgTwo: { img: comp6, url: "https://www.ecolab.com/" },
    imgThree: { img: comp7, url: "https://www.wellsfargo.com/" },
    imgFour: { img: comp1, url: "https://www.ameriprise.com/" },
  },
];

const FounderPage = () => {
  const isBelowLg = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        paddingTop: "90px",
      }}
    >
      <div className={styles.imgContainer}></div>
      <Box
        sx={{
          maxWidth: "1120px",
          "box-shadow": "0px 0px 10px rgba(0, 0, 0, 0.5)",
          borderRadius: "16px",
          margin: "0 auto",
          position: "relative",
          top: "-70px",
          zIndex: 999,
          backgroundColor: "white",
          padding: "40px",
        }}
      >
        <Grid spacing={2} container={true}>
          <Grid
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
            item
            draggable
            xs={12}
            sm={12}
            md={12}
            lg={6}
            xl={6}
          >
            <Image
              src={aboutImage}
              alt="img"
              style={{
                cursor: "pointer",
                maxWidth: "560px",
                width: "100%",
                height: "auto",
                borderRadius: "16px",
                margin: "0 auto",
                objectFit: "contain",
              }}
            />
          </Grid>
          <Grid item draggable xs={12} sm={12} md={12} lg={6} xl={6}>
            <Typography
              sx={{
                fontSize: "35px",
                fontWeight: "bold",
                color: "#3a3838",
              }}
            >
              Elvis Saye Kwaibiah
            </Typography>
            <Typography
              sx={{
                fontSize: "20px",
                fontWeight: "bold",
                color: "blue",
                paddingTop: "16px",
                paddingBottom: "16px",
              }}
            >
              Founder & CEO
            </Typography>
            <Typography
              sx={{
                lineHeight: "1.7",
              }}
            >
              Undergrad in Information Technology (IT), Masters in Information
              Assurance with emphasis in Network Security (IANS), 08 years of IT
              infrastructure consulting and an architect role experience with
              proven methodologies along with the project life cycles
              (enterprise customers) and engineering experience towards
              architect and delpoying network, cloud and communications
              technologies to improve customer's operation efficiency and
              business productivity.
            </Typography>
            <Typography
              sx={{
                lineHeight: "1.7",
                paddingTop: "16px",
              }}
            >
              Primary technical leadership driving Cisco's Core Infrastructure
              and Cisco Modern Workplace Productivity Solutions - As a cisco
              expert, highly specialized in deploying Routing, Switching, Data
              Center, Secuirty and Data Centers solutions. Expert in Cloud
              environments and solutions. Been implementing solutions tailored
              to optimize network performance, security protocols and wireless
              connectivities to streamline the operations and improve overall
              efficiency.Key activities include: Architectural Design, sessions
              and technology strategies, live demos, achieving customer buy-in
              for indentified solution areas that solves business problems,
              discussion and delivery of technical presentations and road-maps,
              driving customer desicions and deployements and partnering with
              internal and external stakeholders for success.
            </Typography>
          </Grid>
        </Grid>
        <Typography
          sx={{
            fontSize: "35px",
            fontWeight: "bold",
            color: "#3a3838",
            maxWidth: "70%",
            margin: "0 auto",
            textAlign: "center",
            paddingTop: "50px",
          }}
        >
          Worked for many Global Organizations as an Senior Network Engineer and
          Technical leader.
        </Typography>
        {!isBelowLg && (
          <Slide indicators duration={1500} canSwipe arrows={false}>
            {slider.map((obj, ind) => (
              <Grid draggable container>
                <Grid
                  item
                  spacing={3}
                  draggable
                  xs={12}
                  sm={12}
                  md={1.71}
                  lg={1.71}
                  xl={1.71}
                >
                  <a href="https://www.ameriprise.com/" target="blank">
                    <Image
                      draggable
                      alt="img"
                      src={comp1}
                      style={{
                        cursor: "pointer",
                        maxWidth: "100px",
                        width: "100%",
                        height: "100px",
                        borderRadius: "16px",
                        margin: "0 auto",
                        objectFit: "contain",
                      }}
                    />
                  </a>
                </Grid>
                <Grid
                  item
                  draggable
                  xs={12}
                  sm={12}
                  md={1.71}
                  lg={1.71}
                  xl={1.71}
                >
                  <a href="https://www.unitedhealthgroup.com/" target="blank">
                    <Image
                      draggable
                      alt="img"
                      src={comp2}
                      style={{
                        cursor: "pointer",
                        maxWidth: "100px",
                        width: "100%",
                        height: "100px",
                        borderRadius: "16px",
                        margin: "0 auto",
                        objectFit: "contain",
                      }}
                    />
                  </a>
                </Grid>
                <Grid
                  item
                  draggable
                  xs={12}
                  sm={12}
                  md={1.71}
                  lg={1.71}
                  xl={1.71}
                >
                  <a
                    href="https://my.clevelandclinic.org/locations/fairview-hospital"
                    target="blank"
                  >
                    <Image
                      draggable
                      alt="img"
                      src={comp3}
                      style={{
                        cursor: "pointer",
                        maxWidth: "100px",
                        width: "100%",
                        height: "100px",
                        borderRadius: "16px",
                        margin: "0 auto",
                        objectFit: "contain",
                      }}
                    />
                  </a>
                </Grid>
                <Grid
                  item
                  draggable
                  xs={12}
                  sm={12}
                  md={1.71}
                  lg={1.71}
                  xl={1.71}
                >
                  <a href="https://www.westconsincu.org/" target="blank">
                    <Image
                      draggable
                      alt="img"
                      src={comp4}
                      style={{
                        cursor: "pointer",
                        maxWidth: "100px",
                        width: "100%",
                        height: "100px",
                        borderRadius: "16px",
                        margin: "0 auto",
                        objectFit: "contain",
                      }}
                    />
                  </a>
                </Grid>
                <Grid
                  item
                  draggable
                  xs={12}
                  sm={12}
                  md={1.71}
                  lg={1.71}
                  xl={1.71}
                >
                  <a
                    href="https://www.cisco.com/c/en/us/products/plus-as-a-service/secure-connect.html"
                    target="blank"
                  >
                    <Image
                      draggable
                      alt="img"
                      src={comp5}
                      style={{
                        cursor: "pointer",
                        maxWidth: "100px",
                        width: "100%",
                        height: "100px",
                        borderRadius: "16px",
                        margin: "0 auto",
                        objectFit: "contain",
                      }}
                    />
                  </a>
                </Grid>
                <Grid
                  item
                  draggable
                  xs={12}
                  sm={12}
                  md={1.71}
                  lg={1.71}
                  xl={1.71}
                >
                  <a href="https://www.ecolab.com/" target="blank">
                    <Image
                      draggable
                      alt="img"
                      src={comp6}
                      style={{
                        cursor: "pointer",
                        maxWidth: "100px",
                        width: "100%",
                        height: "100px",
                        borderRadius: "16px",
                        margin: "0 auto",
                        objectFit: "contain",
                      }}
                    />
                  </a>
                </Grid>

                <Grid
                  item
                  sx={{
                    height: "fit-content",
                    padding: "0px",
                    margin: "0px",
                  }}
                  draggable
                  xs={12}
                  sm={12}
                  md={1.71}
                  lg={1.71}
                  xl={1.71}
                >
                  <a href="https://www.wellsfargo.com/" target="blank">
                    <Image
                      draggable
                      alt="img"
                      src={comp7}
                      style={{
                        cursor: "pointer",
                        maxWidth: "100px",
                        width: "100%",
                        height: "100px",
                        borderRadius: "16px",
                        margin: "0 auto",
                        objectFit: "contain",
                      }}
                    />
                  </a>
                </Grid>
              </Grid>
            ))}
          </Slide>
        )}
        {isBelowLg && (
          <Slide indicators duration={1500} canSwipe arrows={false}>
            {smallSlider.map((obj, ind) => (
              <Grid draggable container>
                <Grid item spacing={4} draggable xs={3} sm={3} md={3}>
                  <a href={obj.imgOne.url} target="blank">
                    <Image
                      draggable
                      alt="img"
                      src={obj.imgOne.img}
                      style={{
                        cursor: "pointer",
                        maxWidth: "100px",
                        width: "100%",
                        height: "100px",
                        borderRadius: "16px",
                        margin: "0 auto",
                        objectFit: "contain",
                      }}
                    />
                  </a>
                </Grid>
                <Grid item draggable xs={3} sm={3} md={3}>
                  <a href={obj.imgTwo.url} target="blank">
                    <Image
                      draggable
                      alt="img"
                      src={obj.imgTwo.img}
                      style={{
                        cursor: "pointer",
                        maxWidth: "100px",
                        width: "100%",
                        height: "100px",
                        borderRadius: "16px",
                        margin: "0 auto",
                        objectFit: "contain",
                      }}
                    />
                  </a>
                </Grid>
                <Grid item draggable xs={3} sm={3} md={3}>
                  <a href={obj.imgThree.url} target="blank">
                    <Image
                      draggable
                      alt="img"
                      src={obj.imgThree.img}
                      style={{
                        cursor: "pointer",
                        maxWidth: "100px",
                        width: "100%",
                        height: "100px",
                        borderRadius: "16px",
                        margin: "0 auto",
                        objectFit: "contain",
                      }}
                    />
                  </a>
                </Grid>
                <Grid item draggable xs={3} sm={3} md={3}>
                  <a href={obj.imgFour.url} target="blank">
                    <Image
                      draggable
                      alt="img"
                      src={obj.imgFour.img}
                      style={{
                        cursor: "pointer",
                        maxWidth: "100px",
                        width: "100%",
                        height: "100px",
                        borderRadius: "16px",
                        margin: "0 auto",
                        objectFit: "contain",
                      }}
                    />
                  </a>
                </Grid>
              </Grid>
            ))}
          </Slide>
        )}
      </Box>
    </Box>
  );
};

export default FounderPage;
