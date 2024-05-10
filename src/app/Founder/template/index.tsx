import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import aboutImage from "../../../../public/slider2.jpeg";

const FounderPage = () => {
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
                maxWidth: "560px",
                width: "100%",
                height: "auto",
                borderRadius: "16px",
                margin: "0 auto",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
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
          Worked for many Global Organizations as an Architect and Technical
          leader.
        </Typography>
      </Box>
    </Box>
  );
};

export default FounderPage;
