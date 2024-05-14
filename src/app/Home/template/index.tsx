"use client";
import React from "react";
import { Box, Grid, Stack, Typography, useMediaQuery } from "@mui/material";
import styles from "./styles.module.css";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import arrow from "../../../../public/arrow.png";
import Image from "next/image";
import theme from "@/app/theme";
import slider1 from "../../../../public/slider1.jpeg";
import slider2 from "../../../../public/slider3.jpeg";
import slider3 from "../../../../public/slider4.jpeg";
import slider4 from "../../../../public/slider5.jpeg";
import slider5 from "../../../../public/slider_6.jpeg";
import slider6 from "../../../../public/slider2.jpeg";

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
const txtDivStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  maxWidth: "900px",
  margin: "0 auto",
  paddingTop: "20px",
};
const slideImagess = [
  { image: slider1 },
  { image: slider2 },
  { image: slider3 },
  { image: slider4 },
  { image: slider5 },
  { image: slider6 },
];
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
const slideText = [
  {
    txt: "Enrolling in Cisco CCNA and CCNP trainings at ESK IT Trainings was an absolute game-changer for me. The instructors' expertise and hands-on approach made complex networking concepts easy to grasp, while the well-structured curriculum ensured a comprehensive understanding of Cisco technologies. The practical labs provided invaluable real-world experience, preparing me not just for certification exams but also for the demands of the industry. Thanks to ESK IT Trainings, I not only achieved my certifications but also gained the confidence to excel in my networking career. I highly recommend ESK IT Trainings to anyone serious about advancing their skills in the IT networking field.",
    name: "Edwin Suah",
    city: "Minneapolis",
  },
  {
    txt: "ESK IT Trainings offered an exceptional learning experience in both Cisco and multi-vendor security domains. The knowledgeable instructors provided practical insights, empowering me to grasp complex concepts effectively. I highly recommend ESK IT Trainings to anyone seeking comprehensive training in IT security.",
    name: "Elvis S.",
    city: "Minneapolis",
  },
  {
    txt: "ESK IT Trainings delivered impeccable Linux and AWS instruction, exceeding my expectations. The expert trainers provided thorough guidance, enabling me to master both platforms with ease. I highly recommend ESK IT Trainings for anyone seeking top-notch Linux and AWS education.",
    name: "Fallah Gibson",
    city: "Minneapolis",
  },
  {
    txt: "I was trying to find a better institute for enhancing my Data Centers skills and I got to know about ESK IT Trainings Embarking on ESK IT Trainings Data Center Design and Expert Routing courses was a revelation. Their dynamic approach and industry-leading content elevated my expertise, making it a must-try for those serious about mastering these disciplines.",
    name: "Geoffrey Wilson",
    city: "Minneapolis",
  },
  {
    txt: "Thanks to ESK IT Trainings' CCNP ENARSI, SD-WAN, and SNCF programs, I secured my dream job with confidence. Their comprehensive courses and expert guidance were instrumental in preparing me for success. I wholeheartedly endorse ESK IT Trainings to anyone looking to advance their career in networking.",
    name: "Nana Bandoh",
    city: "Minneapolis",
  },
  {
    txt: "I was not from any IT related background and never thought that I could become an IT professional. I was hesitant to join; however, I enjoyed the entire journey and now I’m a full time engineer in Dallas Texas. Thank you, ESK IT Training, for allowing me to learn more and grow.",
    name: "Daniel Adigwe",
    city: "Minneapolis",
  },
];

const HomePage = (props: Props) => {
  const isTab = useMediaQuery(theme.breakpoints.down("md"));
  const isBelowLg = useMediaQuery(theme.breakpoints.down("lg"));
  const isBelowSm = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        maxWidth: "1200px",
        margin: "0 auto",
        paddingTop: "130px",
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
              lineHeight: "1.7",
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
              lineHeight: "1.7",
            }}
          >
            These jobs are available everywhere.
          </Typography>

          <ul className={styles.list}>
            <li>
              <Typography
                sx={{
                  lineHeight: "1.7",
                }}
              >
                Network Administrator
              </Typography>
            </li>
            <li>
              <Typography
                sx={{
                  lineHeight: "1.7",
                }}
              >
                Network Engineer
              </Typography>
            </li>
            <li>
              <Typography
                sx={{
                  lineHeight: "1.7",
                }}
              >
                Network Architect
              </Typography>
            </li>
            <li>
              <Typography
                sx={{
                  lineHeight: "1.7",
                }}
              >
                Network Security Engineer
              </Typography>
            </li>
            <li>
              <Typography
                sx={{
                  lineHeight: "1.7",
                }}
              >
                Network Wireless Engineer
              </Typography>
            </li>
            <li>
              <Typography
                sx={{
                  lineHeight: "1.7",
                }}
              >
                Network Operations Center (NOC) and much more...
              </Typography>
            </li>
          </ul>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <Slide canSwipe={true} arrows={false} indicators={true}>
            {slideImagess.map((slideImage, index) => (
              <div key={index}>
                <Image
                  src={slideImage.image}
                  alt="img"
                  style={{
                    width: "100%",
                    height: "300px",
                    borderRadius: "16px",
                    objectFit: "cover",
                  }}
                />
              </div>
            ))}
          </Slide>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <h4 className={styles.boldTxt}>
            Technologies you will learn in our hands-on class are as follows:
          </h4>
          <Typography
            sx={{
              lineHeight: "1.7",
              color: "#3a3838",
            }}
          >
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
          <Typography
            sx={{
              lineHeight: "1.7",
              color: "#3a3838",
            }}
            paddingTop={1}
          >
            Are you interested in Networking , Security , Data Centers and
            Design? Whether you're a computer science graduate, high school
            diploma holder, looking to change careers, or seeking a rewarding IT
            path, we offer hands-on, online learning. You'll engage with
            instructors and peers, gaining skills for IT infrastructure roles.
            We support you in obtaining certifications, crafting an impressive
            resume, and excelling in interviews. Take the first step towards a
            fulfilling IT career, free from the constraints of minimum-wage
            jobs. Join us on the path to success.
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
            <Typography
              sx={{
                lineHeight: "1.7",
                color: "#3a3838",
              }}
            >
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
        <Stack
          sx={{
            width: "100%",
          }}
          direction={"row"}
          justifyContent={"space-between"}
        >
          <Box></Box>
          <Box
            sx={{
              backgroundColor: "blue",
              width: "fit-content",
              marginTop: "30px",
              padding: { sm: "5px 10px", xs: "5px 10px", md: "20px 30px" },
              borderTopLeftRadius: { sm: "16px", xs: "18px", md: "26px" },
              color: "white",
              fontSize: { sm: "20px", xs: "24px", md: "30px" },
              fontWeight: "bolder",
            }}
          >
            <Typography> </Typography>
            Main Office: +1 763 777 1177
          </Box>
        </Stack>
        <div className={styles.backgroundImg}>
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
                  <Typography
                    sx={{
                      lineHeight: "1.7",
                    }}
                    marginTop={2}
                  >
                    100% online or classroom. Attend class on Sundays and the
                    rest of the week learn on your schedule.
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
                    Schedule exam in{" "}
                    <a
                      className={styles.link}
                      href="https://home.pearsonvue.com/"
                      target="blank"
                    >
                      pearsonvue.com
                    </a>{" "}
                    and be certified
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
                    Market for job interviews. Our Institute recruiting team
                    will guide and support you.
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </div>

        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: "20px",
              lineHeight: "1.7",
              textAlign: "center",
              color: "blue",
            }}
          >
            Testimonials
          </Typography>
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: "35px",
              lineHeight: "1.7",
              color: "#3a3838",
              textAlign: "center",
              maxWidth: "625px",
              margin: "0 auto",
            }}
          >
            We have many success stories; here are some we would like to share.
          </Typography>
          <Slide arrows={false} indicators={false}>
            {slideText.map((slide, index) => (
              <div key={index}>
                <div
                  style={{
                    ...txtDivStyle,
                  }}
                >
                  <Box>
                    <Typography
                      sx={{
                        lineHeight: "1.7",
                        textAlign: "center",
                        color: "#3a3838",
                      }}
                    >
                      {slide.txt}
                    </Typography>
                    <Typography
                      sx={{
                        textAlign: "center",
                        paddingTop: "20px",
                        fontSize: "20px",
                        fontWeight: "bold",
                        color: "blue",
                      }}
                    >
                      {slide.name}
                    </Typography>
                    <Typography
                      sx={{
                        paddingTop: "10px",
                        textAlign: "center",
                        fontSize: "18px",
                        fontWeight: "bold",
                        color: "#474747",
                      }}
                    >
                      {slide.city}
                    </Typography>
                  </Box>
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
