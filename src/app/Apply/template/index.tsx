import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import styles from "./styles.module.css";

const ApplyPage = () => {
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
          Everest IT Training
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
          OUR PROGRAMS
        </Typography>
      </div>
      <Box
        sx={{
          maxWidth: "1200px",
          margin: "0 auto",
          borderRadius: "16px",
          padding: "60px 50px",
          position: "relative",
          top: "-120px",
        }}
      >
        <Grid columnSpacing={1} rowSpacing={1} container>
          <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
            <Box
              sx={{
                backgroundColor: "#1a3359",
                height: "200px",
                borderRadius: "10px",
                border: "1.5px solid white",
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                color: "white",
                padding: "20px 10px",
              }}
            >
              <Typography
                sx={{
                  fontSize: "20px",
                  fontWeight: "600",
                }}
              >
                Networking with Beginners ( 6 Months )
              </Typography>
              <Button
                sx={{
                  marginTop: "10px",
                  color: "white",
                  borderColor: "white",
                }}
                variant="outlined"
                target="blank"
                href="https://forms.office.com/r/p1StiszHff"
              >
                Apply Now
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
            <Box
              sx={{
                backgroundColor: "#1a3359",
                height: "200px",
                borderRadius: "10px",
                border: "1.5px solid white",
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                color: "white",
                padding: "20px 10px",
              }}
            >
              <Typography
                sx={{
                  fontSize: "20px",
                  fontWeight: "600",
                }}
              >
                Network Engineer Specialist ( 6 months )
              </Typography>
              <Button
                sx={{
                  marginTop: "10px",
                  color: "white",
                  borderColor: "white",
                }}
                variant="outlined"
                target="blank"
                href="https://forms.office.com/r/C4iHPyyHba"
              >
                Apply Now
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
            <Box
              sx={{
                backgroundColor: "#1a3359",
                height: "200px",
                borderRadius: "10px",
                border: "1.5px solid white",
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                color: "white",
                padding: "20px 10px",
              }}
            >
              <Typography
                sx={{
                  fontSize: "20px",
                  fontWeight: "600",
                }}
              >
                Network Security Engineer ( 6 months)
              </Typography>
              <Button
                sx={{
                  marginTop: "10px",
                  color: "white",
                  borderColor: "white",
                }}
                variant="outlined"
                target="blank"
                href="https://forms.office.com/r/7sgDFqMQFM"
              >
                Apply Now
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
            <Box
              sx={{
                backgroundColor: "#1a3359",
                height: "200px",
                borderRadius: "10px",
                border: "1.5px solid white",
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                color: "white",
                padding: "20px 10px",
              }}
            >
              <Typography
                sx={{
                  fontSize: "20px",
                  fontWeight: "600",
                }}
              >
                Kids Computer Science program
              </Typography>
              <Button
                sx={{
                  marginTop: "10px",
                  color: "white",
                  borderColor: "white",
                }}
                variant="outlined"
                target="blank"
                href="https://forms.office.com/r/pNSyfXGA2S"
              >
                Apply Now
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
            <Box
              sx={{
                backgroundColor: "#1a3359",
                height: "200px",
                borderRadius: "10px",
                border: "1.5px solid white",
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                color: "white",
                padding: "20px 10px",
              }}
            >
              <Typography
                sx={{
                  fontSize: "20px",
                  fontWeight: "600",
                }}
              >
                Network Design Engineer ( 6 Months )
              </Typography>
              <Button
                sx={{
                  marginTop: "10px",
                  color: "white",
                  borderColor: "white",
                }}
                variant="outlined"
                target="blank"
                href="https://forms.office.com/r/fhiZd3FP5x"
              >
                Apply Now
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default ApplyPage;
