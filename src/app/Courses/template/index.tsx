"use client";
import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import styles from "./styles.module.css";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import course1 from "../../../../public/course1.jpeg";
import course2 from "../../../../public/course2.jpeg";
import course3 from "../../../../public/course3.jpeg";
import course4 from "../../../../public/course4.jpeg";
import course5 from "../../../../public/course5.jpeg";
import course6 from "../../../../public/course6.jpeg";
import course7 from "../../../../public/course7.jpeg";
import course8 from "../../../../public/course.jpeg";
import Image from "next/image";
import theme from "@/app/theme";

const divStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundSize: "cover",
  height: "300px",
  maxWidth: "1120px",
  margin: "0 auto",
};
const sliderImages = [
  {
    images: {
      image1: course1,
      image2: course2,
      image3: course3,
      image4: course4,
      image5: course5,
      image6: course6,
      image7: course7,
      image8: course8,
    },
  },
  {
    images: {
      image1: course1,
      image2: course2,
      image3: course3,
      image4: course4,
      image5: course5,
      image6: course6,
      image7: course7,
      image8: course8,
    },
  },
];

const slideImages = [
  {
    url: course1,
    caption: "Slide 1",
  },
  {
    url: course2,
    caption: "Slide 2",
  },
  {
    url: course3,
    caption: "Slide 3",
  },
  {
    url: course4,
  },
  {
    url: course5,
  },
  {
    url: course6,
  },
  {
    url: course7,
  },
  {
    url: course8,
  },
];

export default function CoursesPage() {
  const isBelowLg = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        paddingTop: "90px",
      }}
    >
      <div className={styles.mianContainer}>
        <Typography
          sx={{
            fontSize: "30px",
            color: "red",
            fontWeight: "bold",
            maxWidth: "1120px",
            margin: "0 auto",
            lineHeight: "1.7",
          }}
        >
          Network Support and Cloud Network Support roles are always in demand
          and growing
        </Typography>
        <Typography
          paddingBottom={2}
          sx={{
            fontSize: "17px",
            color: "white",
            fontWeight: "bold",
            maxWidth: "1000px",
            margin: "0 auto",
          }}
        >
          Every organization requires multiple IT Support roles to support their
          end-users. These roles will help daily user IT-related issues such as
          Network, Server, Wireless, Mobile, Application, etc.
        </Typography>
        {isBelowLg ? (
          <Slide arrows={false} indicators={false}>
            {slideImages.map((obj, ind) => (
              <Box
                sx={{
                  padding: "0px 50px",
                }}
              >
                <Image
                  src={obj.url}
                  alt="img"
                  style={{
                    maxWidth: "800px",
                    width: "100%",
                    height: "300px",
                    borderRadius: "16px",
                    objectFit: "cover",
                    padding: "0px 5px",
                  }}
                />
              </Box>
            ))}
          </Slide>
        ) : (
          <Slide arrows={false} indicators={false}>
            {slideImages.map((slideImage, index) => (
              <Grid
                sx={{
                  maxWidth: "1120px",
                  margin: "0 auto",
                  padding: "0 40px",
                }}
                spacing={2}
                rowGap={2}
                container
              >
                <Grid xs={3} sm={3} md={3} lg={3} xl={3}>
                  <Image
                    src={course1}
                    alt="img"
                    style={{
                      maxWidth: "250px",
                      width: "100%",
                      height: "160px",
                      borderRadius: "16px",
                      objectFit: "cover",
                      padding: "0px 5px",
                    }}
                  />
                </Grid>
                <Grid xs={3} sm={3} md={3} lg={3} xl={3}>
                  <Image
                    src={course2}
                    alt="img"
                    style={{
                      maxWidth: "250px",
                      width: "100%",
                      height: "160px",
                      borderRadius: "16px",
                      objectFit: "cover",
                      padding: "0px 5px",
                    }}
                  />
                </Grid>
                <Grid xs={3} sm={3} md={3} lg={3} xl={3}>
                  <Image
                    src={course3}
                    alt="img"
                    style={{
                      maxWidth: "250px",
                      width: "100%",
                      height: "160px",
                      borderRadius: "16px",
                      objectFit: "cover",
                      padding: "0px 5px",
                    }}
                  />
                </Grid>
                <Grid xs={3} sm={3} md={3} lg={3} xl={3}>
                  <Image
                    src={course4}
                    alt="img"
                    style={{
                      maxWidth: "250px",
                      width: "100%",
                      height: "160px",
                      borderRadius: "16px",
                      objectFit: "cover",
                      padding: "0px 5px",
                    }}
                  />
                </Grid>
                <Grid xs={3} sm={3} md={3} lg={3} xl={3}>
                  <Image
                    src={course5}
                    alt="img"
                    style={{
                      maxWidth: "250px",
                      width: "100%",
                      height: "160px",
                      borderRadius: "16px",
                      objectFit: "cover",
                      padding: "0px 5px",
                    }}
                  />
                </Grid>
                <Grid xs={3} sm={3} md={3} lg={3} xl={3}>
                  <Image
                    src={course6}
                    alt="img"
                    style={{
                      maxWidth: "250px",
                      width: "100%",
                      height: "160px",
                      borderRadius: "16px",
                      objectFit: "cover",
                      padding: "0px 5px",
                    }}
                  />
                </Grid>
                <Grid xs={3} sm={3} md={3} lg={3} xl={3}>
                  <Image
                    src={course7}
                    alt="img"
                    style={{
                      maxWidth: "250px",
                      width: "100%",
                      height: "160px",
                      borderRadius: "16px",
                      objectFit: "cover",
                      padding: "0px 5px",
                    }}
                  />
                </Grid>
                <Grid xs={3} sm={3} md={3} lg={3} xl={3}>
                  <Image
                    src={course8}
                    alt="img"
                    style={{
                      maxWidth: "250px",
                      width: "100%",
                      height: "160px",
                      borderRadius: "16px",
                      objectFit: "cover",
                      padding: "0px 5px",
                    }}
                  />
                </Grid>
              </Grid>
            ))}
          </Slide>
        )}
      </div>
      <Box
        sx={{ marginTop: { xs: "350px", sm: "230px" }, padding: "0px 30px" }}
      >
        <Box
          sx={{
            maxWidth: "1120px",
            margin: "0 auto",
            //   height: "100vh",
          }}
        >
          <Typography className={styles.heading}>
            Our Training courses:
          </Typography>
          <Typography className={styles.regularTxt}>
            Our courses are available at significantly discounted rates compared
            to colleges and other training centers. Our aim is to make sure that
            individuals from our community, regardless of their location, can
            easily access and participate in our classes. Even if you are
            familiar with using platforms like Facebook or TikTok, you can learn
            IT with us. However, it's important to note that our training
            programs are not provided for free.
          </Typography>
          <Typography className={styles.headingTwo}>
            We offer only 5 training programs
          </Typography>
          <Typography className={styles.headingTwo}>
            Students can pick one of these training courses independently.
          </Typography>
          <Typography className={styles.regularTxt}>
            We exclusively offer IT knowledge and are not an accredited college
            or institute. We do not confer diplomas or certificates. For those
            seeking certification, students must take exams externally at
            personvue.com. We neither accept nor provide FAFSA, loans, Federal
            or State Government funds, and we do not offer college credits.
          </Typography>
          <Typography className={styles.courseHeading}>
            1. Network Engineer Specialist ( 6 months )
          </Typography>
          <Typography className={styles.regularTxt}>
            As a Network Engineer, you'll delve into networking fundamentals
            such as the OSI model, TCP/IP, and VLANs, progressing to advance
            routing and switching techniques with OSPF, BGP, and VLAN
            segmentation.
          </Typography>
          <Typography className={styles.regularTxt}>
            Security becomes paramount, covering firewalls, VPNs, and intrusion
            detection/prevention systems. You'll design resilient network
            architectures while exploring wireless technologies and network
            management tools.
          </Typography>
          <Typography className={styles.regularTxt}>
            Virtualization and cloud networking skills become essential
            alongside automation using Python and tools like Ansible.
          </Typography>
          <Typography className={styles.regularTxt}>
            Pursuing certifications like CCNA, CCNP, validates your expertise,
            propelling your career forward in this dynamic field.
          </Typography>
          <Typography className={styles.regularTxt}>
            Join us on this journey to becoming a Network Engineer, where you
            will acquire the skills to support users effectively and tackle
            their vendor, network, and applications-related issues with
            proficiency and confidence.
          </Typography>
          <Typography className={styles.coursePrice}>
            Fee: $500 per month (6 months) = Total $3000
          </Typography>
          <Typography className={styles.coursePrice}>
            Anyone can join, no prerequisites.
          </Typography>
          <Typography className={styles.regularTxt}>
            ESK IT will provide only the Course Completion Certificate.
          </Typography>
          <Typography className={styles.regularTxt}>
            Students can go to Pearsonvue.com and take relevant exams to obtain
            industry valid certification such as CCNA, CCNP and CCNP optional
            exams.
          </Typography>
          <Typography className={styles.courseHeading}>
            2. Network Security Engineer ( 6 months)
          </Typography>
          <Typography className={styles.regularTxt}>
            The Network Security Firewall Engineer is responsible for designing
            customized firewall architectures tailored to organizational needs,
            implementing robust firewall policies to control network traffic
            effectively. They meticulously manage and maintain firewall devices,
            ensuring they are properly configured and updated to mitigate
            emerging threats.
          </Typography>
          <Typography className={styles.regularTxt}>
            Continuous monitoring of firewall logs and security events enables
            them to detect and respond promptly to suspicious activities or
            breaches. Collaboration with other cybersecurity team members is
            essential for investigating incidents and implementing remediation
            measures swiftly.
          </Typography>
          <Typography className={styles.regularTxt}>
            Additionally, they ensure compliance with industry regulations and
            organizational security policies through regular reviews and audits
            of firewall configurations. Staying updated on the latest firewall
            technologies and cybersecurity trends is crucial for recommending
            innovative approaches to enhance network security posture. Overall,
            their role is pivotal in safeguarding organizational networks and
            data assets against cyber threats.
          </Typography>
          <Typography className={styles.regularTxt}>
            You can join our class from anywhere in the world using Laptop and
            Headset.
          </Typography>
          <Typography className={styles.coursePrice}>
            Fee: $500 per month (6 months) = Total $3000
          </Typography>
          <Typography className={styles.coursePrice}>
            Anyone can join, no prerequisites.
          </Typography>
          <Typography className={styles.regularTxt}>
            ESK IT will provide only the Course Completion Certificate.
          </Typography>
          <Typography className={styles.regularTxt}>
            Students can go to Pearsonvue.com and take relevant exams to obtain
            industry valid certification such as Cisco SNCF, ISE, PCNSA or PCNSE
            same for Fortinet’s.
          </Typography>
          <Typography className={styles.courseHeading}>
            3. Kids Computer Science program
          </Typography>
          <Typography className={styles.regularTxt}>
            Welcome to our comprehensive one-year program designed for kids to
            learn computer science. In today's highly competitive IT world, it
            is crucial for children to possess not only programming and coding
            skills but also a broader understanding of web development,
            cybersecurity, networking, and more.
          </Typography>
          <Typography className={styles.regularTxt}>
            Our program is carefully crafted to provide a well-rounded education
            in computer science, equipping kids with the necessary knowledge and
            skills to thrive in the digital age. Throughout the course, students
            will delve into various areas of computer science, gaining hands-on
            experience and practical understanding.
          </Typography>
          <Typography className={styles.regularTxt}>
            By covering topics such as programming, coding, web development,
            cybersecurity, and networking, we aim to provide a holistic learning
            experience that prepares kids for the evolving landscape of IT. Our
            program offers a solid foundation in computer science and cultivates
            critical thinking, problem-solving, and creativity in young minds.
          </Typography>
          <Typography className={styles.regularTxt}>
            Join us in this comprehensive journey to empower kids with the
            essential skills needed to excel in computer science and prepare
            them for a future filled with opportunities.
          </Typography>
          <Typography className={styles.regularTxt}>
            Kids can join our class from anywhere in the world using Laptop and
            Headset.
          </Typography>
          <Typography className={styles.coursePrice}>
            Fee: $350 per month (12 months) = Total $4200
          </Typography>
          <Typography className={styles.courseHeading}>
            4. Network Design Engineer ( 6 Months )
          </Typography>
          <Typography className={styles.regularTxt}>
            As a Cisco and Data Center Design Engineer, you're entrusted with
            architecting robust network infrastructures tailored to the specific
            needs of data center environments. Leveraging Cisco networking
            technologies, you design solutions that prioritize high
            availability, scalability, and security. This involves configuring
            routers, switches, and other network devices to optimize performance
            and streamline operations.
          </Typography>
          <Typography className={styles.regularTxt}>
            Collaborating closely with stakeholders, you translate business
            requirements into technical specifications, ensuring alignment with
            industry standards and best practices. Your role extends to capacity
            planning, resource optimization, and risk assessment to support the
            growth and resilience of the network infrastructure. Integration
            with other IT teams, including server administrators and security
            specialists, is essential for seamless operations and effective
            cybersecurity measures.
          </Typography>
          <Typography className={styles.regularTxt}>
            Staying updated on emerging technologies and industry trends, you
            continuously evaluate new solutions to enhance network performance
            and efficiency. In essence, your role is pivotal in ensuring the
            reliability, scalability, and security of data center network
            infrastructures, underpinning the success of modern organizations.
          </Typography>
          <Typography className={styles.coursePrice}>
            Fee: $670 per month (6 months) = Total $4000
          </Typography>
          <Typography className={styles.coursePrice}>
            Anyone can join, no prerequisites.
          </Typography>
          <Typography className={styles.regularTxt}>
            ESK IT will provide only the Course Completion Certificate.
          </Typography>
          <Typography className={styles.regularTxt}>
            Students can go to Pearsonvue.com and take relevant exams to obtain
            industry valid certification such as SD-WAN, Data Center Core, DCACI
            (Plan, Design, Implement and Troubleshoot)
          </Typography>
          <Typography className={styles.courseHeading}>
            5. Networking with Beginners ( 6 Months )
          </Typography>
          <Typography className={styles.regularTxt}>
            At our training center, we specialize in equipping beginners with
            the essential skills and knowledge needed for a successful career in
            IT networking. Our comprehensive curriculum covers three critical
            certifications: CCNA (Cisco Certified Network Associate), Network+,
            and A+. The CCNA course focuses on networking fundamentals,
            including routing and switching, IP addressing, and network
            security, providing a strong foundation in network infrastructure.
            The Network+ certification, from CompTIA, broadens your
            understanding by covering a wide range of networking concepts,
            troubleshooting techniques, and best practices across various
            devices and platforms. Lastly, the A+ certification, also from
            CompTIA, offers a solid grounding in hardware, software, and basic
            networking, ensuring you have a well-rounded understanding of IT
            essentials. Together, these courses provide a holistic approach to
            networking, preparing you for diverse roles in the IT industry. Join
            us to start your journey toward becoming a skilled networking
            professional.
          </Typography>
          <Typography className={styles.coursePrice}>
            Fee: $400 per month (6 months) = Total $2400
          </Typography>
          <Typography className={styles.coursePrice}>
            Anyone can join, no prerequisites.
          </Typography>
          <Typography className={styles.heading}>
            Admission Requirements:
          </Typography>
          <ul>
            <li>
              <Typography className={styles.liTxt}>
                Minimum High School Diploma (Not for Kids Computer Science
                program)
              </Typography>
            </li>
            <li>
              <Typography className={styles.liTxt}>
                Windows 10 or 11 Laptop (Mac will not work) with minimum 16GB
                memory and SSD Drive. Please note that Kids program can use MAC.
              </Typography>
            </li>
            <li>
              <Typography className={styles.liTxt}>
                High Speed Internet access (Learn from anywhere in the world)
              </Typography>
            </li>
          </ul>
        </Box>
      </Box>
    </Box>
  );
}
