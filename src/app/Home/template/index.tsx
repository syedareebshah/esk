"use client";
import React from "react";
import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import styles from "./styles.module.css";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import arrow from "../../../../public/arrow.png";
import Image from "next/image";
import theme from "@/app/theme";

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
  const isTab = useMediaQuery(theme.breakpoints.down("md"));

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
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <h4 className={styles.boldTxt}>
            Technologies you will learn in our hands-on class are as follows:
          </h4>
          <Typography>
            In the realm of Data Center networking, consider mastering
            technologies such as Cisco's Application Centric Infrastructure
            (ACI) or VMware's NSX for network virtualization and
            software-defined networking (SDN). Additionally, delve into
            protocols like VXLAN for overlay networking and BGP-EVPN for
            efficient multi-tenancy support. For the ENARSI (Implementing Cisco
            Enterprise Advanced Routing and Services) certification, focus on
            advanced routing protocols like OSPFv3, EIGRP for IPv6, and BGP
            route manipulation techniques. In Automation, dive into scripting
            languages like Python for network automation, utilizing tools such
            as Ansible or Puppet for configuration management and orchestration.
            SD-WAN technology involves learning about platforms like Cisco
            Viptela, VMware SD-WAN (formerly VeloCloud), and protocols such as
            MPLS, BGP, and IPSec for secure and optimized WAN connectivity.
            Finally, for Multi-Vendor Security expertise, explore firewall
            technologies from vendors like Cisco (ASA, Firepower), Palo Alto
            Networks (PAN-OS), and Fortinet (FortiOS), alongside security
            protocols like SSL/TLS for encryption and IPSec for VPNs, ensuring
            comprehensive network security across diverse environments.
          </Typography>
          <Typography paddingTop={1}>
            Are you interested in an IT Networking, Cloud, Support Specialist,
            Cyber Security career? Whether you're a computer science graduate,
            high school diploma holder, looking to change careers, or seeking a
            rewarding IT path, we offer hands-on, online learning. Our program,
            accessible worldwide through Microsoft Teams, provides practical
            experience on a cloud-based LAB. You'll engage with instructors and
            peers, gaining skills for IT infrastructure roles. We support you in
            obtaining certifications, crafting an impressive resume, and
            excelling in interviews. Take the first step towards a fulfilling IT
            career, free from the constraints of minimum-wage jobs. Join us on
            the path to success.
          </Typography>
          <h1 className={styles.longHeading}>
            We will prepare you with the required technical skills, prepare you
            for technical interviews and help you land your next dream IT job.
          </h1>
          <Box
            sx={{
              backgroundColor: "#d9edff",
              padding: "25px",
              border: "3px solid black",
            }}
          >
            <Typography>
              Please be aware that we solely offer IT knowledge. We are not an
              Accredited College or Institute, and therefore, we do not confer
              diplomas or certificates. If you are interested in obtaining
              certification, you must take an exam independently, usually
              through personvue.com. It's important to note that we do not
              participate in or accept FAFSA, loans, Federal or State Government
              funds, and we do not provide college credits.
            </Typography>
          </Box>
        </Grid>
        <Grid
          sx={{
            textAlign: "center",
            padding: "50px 0px",
            backgroundImage: `url({map})`,
            backgroundposition: "top center",
            backgroundRepeat: "no-repeat",
          }}
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
        >
          <h2 className={styles.worksHeading}>How it works?</h2>
          <h5 className={styles.worksSubHeading}>Three Step Process</h5>
          <Grid container>
            <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
              <div className={styles.card}>
                <div className={styles.floatingDiv}>
                  <h1 className={styles.count}>1</h1>
                </div>
                <h2 className={styles.cardHeading}>Take Class with us</h2>
                <Typography marginTop={2}>
                  100% online or classroom. Attend class on Sundays and the rest
                  of the week learn on your schedule.
                </Typography>
              </div>
            </Grid>
            <Grid
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: isTab ? "50px" : "0px",
                marginBottom: isTab ? "80px" : "0px",
              }}
              item
              xs={12}
              sm={12}
              md={1.5}
              lg={1.5}
              xl={1.5}
            >
              <Image
                alt="arrow"
                src={arrow}
                width={80}
                height={30}
                style={{
                  transform: isTab ? "rotate(90deg)" : "rotate(0deg)",
                }}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
              <div className={styles.card}>
                <div className={styles.floatingDiv}>
                  <h1 className={styles.count}>2</h1>
                </div>
                <h2 className={styles.cardHeading}>
                  Take Exam to be certified
                </h2>
                <Typography marginTop={2}>
                  Schedule exam in pearsonvue.com and be certified
                </Typography>
              </div>
            </Grid>
            <Grid
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: isTab ? "50px" : "0px",
                marginBottom: isTab ? "80px" : "0px",
              }}
              item
              xs={12}
              sm={12}
              md={1.5}
              lg={1.5}
              xl={1.5}
            >
              <Image
                alt="arrow"
                src={arrow}
                width={80}
                height={30}
                style={{
                  transform: isTab ? "rotate(90deg)" : "rotate(0deg)",
                }}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
              <div className={styles.card}>
                <div className={styles.floatingDiv}>
                  <h1 className={styles.count}>3</h1>
                </div>
                <h2 className={styles.cardHeading}>Go to Market</h2>
                <Typography marginTop={2}>
                  Using your hands-on experienced knowledge, you will GoTo
                  Market for job interviews. Our Institute recruiting team will
                  guide and support you.
                </Typography>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HomePage;
