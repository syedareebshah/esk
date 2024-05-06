"use client";

import { Box, Typography } from "@mui/material";
import React from "react";
import styles from "./styles.module.css";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const TestimonialPage = () => {
  const txtDivStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    maxWidth: "600px",
    margin: "0 auto",
    paddingTop: "20px",
  };
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
  ];

  return (
    <Box
      sx={{
        paddingTop: "90px",
      }}
    >
      <div className={styles.mianContainer}>
        <Typography
          sx={{
            fontSize: "25px",
            color: "red",
            fontWeight: "bold",
            maxWidth: "1120px",
            margin: "0 auto",
            lineHeight: "1.7",
          }}
        >
          FEEDBACK
        </Typography>
        <Typography
          paddingBottom={2}
          sx={{
            fontSize: "35px",
            color: "white",
            fontWeight: "bold",
            maxWidth: "1000px",
            margin: "0 auto",
          }}
        >
          TESTIMONIALS
        </Typography>
      </div>
      <Box
        sx={{
          boxShadow: "0px 5px 25px -5px black",
          backgroundColor: "white",
          maxWidth: "1000px",
          margin: "0 auto",
          borderRadius: "16px",
          padding: "60px 50px",
          position: "relative",
          top: "-150px",
        }}
      >
        <Typography
          sx={{
            paddingTop: "10px",
            lineHeight: "1.7",
            color: "#3a3838",
            textAlign: "center",
          }}
        >
          Established in 2020, we provide hands-on training to students, only 5%
          reading materials will be used. Because of completely hands-on
          training with LAB, our students are able to pass job interviews and
          able to get the job with confidence. You will need to take exam in
          certified exam center to become IT Certified.
        </Typography>
        <Typography
          sx={{
            paddingTop: "20px",
            lineHeight: "1.7",
            color: "#3a3838",
            textAlign: "center",
          }}
        >
          Because we accept limited students per year, we provide quality
          education that is practical and hands-on, can learn from any country
          in the world. We do not use books nor follow any books like
          universities or colleges. Our training method is to engage students
          directly working in real organization IT infrastructure which not only
          provides skills but also boost student confident during job
          interviews. Below are a few students testimonials who are now IT
          Engineers, you can contact them directly via LinkedIn to get feedback.
        </Typography>
        <Typography
          sx={{
            paddingTop: "30px",
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
      </Box>
    </Box>
  );
};

export default TestimonialPage;
