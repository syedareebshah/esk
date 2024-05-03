import { Box, Grid, Typography } from "@mui/material";
import styles from "./styles.module.css";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import AccountCircleSharpIcon from "@mui/icons-material/Person2";
import SavedSearchIcon from "@mui/icons-material/SavedSearch";
export default function AboutPage() {
  return (
    <Box
      sx={{
        paddingTop: "90px",
      }}
    >
      <div className={styles.imgContainer}>
        <Grid container>
          <Grid item xs={12} sm={8} md={6} lg={6} xl={6}>
            <div className={styles.aboutHeaderTxtContainer}>
              <Typography
                sx={{
                  fontSize: "35px",
                  fontWeight: "bold",
                }}
              >
                About Us
              </Typography>
              <Typography
                sx={{
                  fontSize: "20px",
                  fontWeight: "bold",
                }}
              >
                Tired of current job? Learn managing IT infrastructure and get
                into professional job.
              </Typography>
              <Typography
                sx={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  paddingTop: "25px",
                }}
              >
                CHANGE YOUR CAREER TO "INFORMATION TECHNOLOGY"
              </Typography>
              <Typography
                sx={{
                  paddingTop: "25px",
                }}
              >
                Established in 2020 , our primary focus is on providing training
                exclusively in IT infrastructure and Cisco related technologies
                including Cisco Cloud and Multi-Vendor cloud. We specialise in
                expert and advance level of Routing and Switching. Exploring to
                the new horizons of cloud technologies in Data Center ACI ,
                SD-WAN and Network Infrastructure design. Also, become an expert
                for the firewalls and learn how to troubleshoot real
                environments including Cisco ASA , Firepower and FTD’s with
                multi-vendors technologies including Fortinets and Palo-Altos.
                Furthermore, please note that our training programs are not
                offered for free
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={4} md={6} lg={6} xl={6}>
            <Box
              sx={{
                backgroundColor: "blue",
                width: "fit-content",
                padding: { sm: "5px 10px", xs: "5px 10px", md: "20px 30px" },
                position: "absolute",
                bottom: "0px",
                right: "0px",
                marginTop: { sm: "100px" },
              }}
            >
              <Typography
                sx={{
                  fontSize: { sm: "12px", xs: "14px", md: "20px" },
                  color: "white",
                }}
              >
                Main Office: +0 000 000 0000
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </div>
      <Grid
        sx={{
          maxWidth: "1120px",
          margin: "0 auto",
          paddingLeft: "20px",
          paddingRight: "20px",
          marginTop: {
            xs: "0px",
            sm: "30px",
            md: "120px",
            lg: "80px",
            xl: "100px",
          },
        }}
        container
      >
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
          <h2 className={styles.worksHeading}>HOW IT WORKS?</h2>
          <h5 className={styles.worksSubHeading}>Three Step Process</h5>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
              <div className={styles.card}>
                <div className={styles.floatingDiv}>
                  <LaptopMacIcon
                    sx={{
                      color: "white",
                      fontSize: "35px",
                    }}
                  />
                </div>
                <h2 className={styles.cardHeading}>Online or Onsite Courses</h2>
                <Typography
                  sx={{
                    lineHeight: "1.7",
                    textAlign: "start",
                  }}
                  marginTop={2}
                  marginBottom={2}
                >
                  Using Microsoft teams, learn from anywhere with LAB access.
                </Typography>
                <ul>
                  <li>
                    <Typography
                      sx={{
                        lineHeight: "1.7",
                        textAlign: "start",
                      }}
                    >
                      Project Based
                    </Typography>
                  </li>
                  <li>
                    <Typography
                      sx={{
                        lineHeight: "1.7",
                        textAlign: "start",
                      }}
                    >
                      Hands-on
                    </Typography>
                  </li>
                  <li>
                    <Typography
                      sx={{
                        lineHeight: "1.7",
                        textAlign: "start",
                      }}
                    >
                      Learning by doing
                    </Typography>
                  </li>
                  <li>
                    <Typography
                      sx={{
                        lineHeight: "1.7",
                        textAlign: "start",
                      }}
                    >
                      Group Study
                    </Typography>
                  </li>
                  <li>
                    <Typography
                      sx={{
                        lineHeight: "1.7",
                        textAlign: "start",
                      }}
                    >
                      Learn from anywhere
                    </Typography>
                  </li>
                  <li>
                    <Typography
                      sx={{
                        lineHeight: "1.7",
                        textAlign: "start",
                      }}
                    >
                      Anyone can learn
                    </Typography>
                  </li>
                </ul>
              </div>
            </Grid>

            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
              <div className={styles.card}>
                <div className={styles.floatingDiv}>
                  <AccountCircleSharpIcon
                    sx={{
                      color: "white",
                      fontSize: "35px",
                    }}
                  />
                </div>
                <h2 className={styles.cardHeading}>Expert Instruction</h2>
                <Typography
                  marginBottom={2}
                  sx={{
                    textAlign: "start",
                  }}
                  marginTop={2}
                >
                  Learn from 20+ years experience industry experts.
                </Typography>
                <ul>
                  <li>
                    <Typography
                      sx={{
                        lineHeight: "1.7",
                        textAlign: "start",
                      }}
                    >
                      Learn from industry experts
                    </Typography>
                  </li>
                  <li>
                    <Typography
                      sx={{
                        lineHeight: "1.7",
                        textAlign: "start",
                      }}
                    >
                      24*7 lab access
                    </Typography>
                  </li>
                  <li>
                    <Typography
                      sx={{
                        lineHeight: "1.7",
                        textAlign: "start",
                      }}
                    >
                      Real time communication
                    </Typography>
                  </li>
                </ul>
              </div>
            </Grid>

            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
              <div className={styles.card}>
                <div className={styles.floatingDiv}>
                  <SavedSearchIcon
                    sx={{
                      color: "white",
                      fontSize: "35px",
                    }}
                  />
                </div>
                <h2 className={styles.cardHeading}>Job Placements</h2>
                <Typography marginBottom={2} textAlign={"start"} marginTop={2}>
                  Get your dream job in IT.
                </Typography>
                <ul>
                  <li>
                    <Typography
                      sx={{
                        lineHeight: "1.7",
                        textAlign: "start",
                      }}
                    >
                      Resume building
                    </Typography>
                  </li>
                  <li>
                    <Typography
                      sx={{
                        lineHeight: "1.7",
                        textAlign: "start",
                      }}
                    >
                      Job search training
                    </Typography>
                  </li>
                  <li>
                    <Typography
                      sx={{
                        lineHeight: "1.7",
                        textAlign: "start",
                      }}
                    >
                      Recruitment interview trainings
                    </Typography>
                  </li>
                  <li>
                    <Typography
                      sx={{
                        lineHeight: "1.7",
                        textAlign: "start",
                      }}
                    >
                      Teachnical interviews
                    </Typography>
                  </li>
                </ul>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        sx={{
          backgroundColor: "red",
        }}
        container
      >
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <Typography
            sx={{
              fontSize: { sm: "12px", xs: "14px", md: "20px" },
            }}
          >
            Main Office: +0 000 000 0000
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <Typography
            sx={{
              fontSize: { sm: "12px", xs: "14px", md: "20px" },
            }}
          >
            Main Office: +0 000 000 0000
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
