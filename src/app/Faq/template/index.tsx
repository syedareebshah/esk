import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import styles from "./styles.module.css";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FaqPage = () => {
  const faqsArray = [
    {
      question: "Do you offer free classes and a job guaranteed?",
      answer:
        "While our classes are not offered for free, we maintain affordable fees to cover operational expenses. Our commitment to quality training and certifications ensures your preparedness for the job market. Rest assured, we prioritize your employment prospects and have established partnerships with local recruiting firms to assist in your job search. Our comprehensive support includes exam preparation, interview coaching, resume building, and personalized recommendations. The majority of our past students have successfully secured employment within three to six months of completing their training and certifications. We do not provide job guarantees; your success in securing an IT job depends on the effort, learning, and practice and time you invest in Data Center LAB, guided by our instructions.",
    },
    {
      question: "Do you provide a Diploma or Certificate?",
      answer:
        "We issue a Course Completion certificate. As we are not a university or college, our certificates are not accredited diplomas. For an accredited certificate, you can visit Pearsonvue.com and pursue global certification, and we will assist you in successfully passing the exam.",
    },
    {
      question: "Do you help to get the Job?",
      answer:
        "We commence with comprehensive hands-on training, followed by job market preparation, encompassing resume building, mock interviews, the creation of a professional LinkedIn profile, and personalized recommendations. We guide you through the application and interview processes. Our support extends beyond securing a job; even after the class concludes, we continue to assist you in excelling in your career.",
    },
    {
      question: "What kind of Jobs I can apply?",
      answer:
        "You will be able to apply for the following jobs after training:\n- Network Engineer\n- Network Security Engineer\n- Network Design Engineer\n- Sr Network Engineer\n- Data Center Specialist\n- Network Architect\n- Cloud Network Engineer",
    },
    {
      question: "How is the class scheduled?",
      answer:
        "Our all programs are based on weekdays as well as on weekends. The timings on Weekends for Saturdays and Sundays of every month start from 9 am to 12 pm. For regular one-to-one classes, you can consult with our faculty team.",
    },
    {
      question: "I don't have any computer knowledge, can I join?",
      answer:
        "No prior computer or IT knowledge is necessary; we will provide training tailored for beginners. Working within Zoom will expedite your learning process. We simply ask that you come with a hunger to learn.",
    },
    {
      question:
        "Do I need to be in a Minnesota classroom, or can I join class remotely?",
      answer:
        "Certainly. We utilize a top-notch video conferencing solution through Microsoft Zoom, allowing remote students to participate in and learn from classes worldwide, provided they have internet access. You will also be able to access Physical LABs remotely to learn on your own time.",
    },
    {
      question: "What are the minimum education requirements?",
      answer:
        "A High School Diploma or its equivalent is a prerequisite. This is because, when you go to the market for job search, many employers typically look for a minimum of a high school diploma. A background in Computer Science or engineering is not mandatory. And for the expertise, having a Bachelor's in IT is mandatory to get more technologized jobs in the market.",
    },
    {
      question: "Can I pay monthly? Is there a contract?",
      answer:
        "Yes, you can. If you drop for some reason, you don't have to pay the remaining class fee. There is no contract. We do not provide any refunds. And all money will be paid up front before starting the classes.",
    },
    {
      question: "What do I need for class? Laptop?",
      answer:
        "For the class, it is essential to have a capable laptop with a minimum of an i5 or i7 processor, 16GB of minimum memory (32GB Recommended), and running either Windows 10 or 11. Please note that MAC Laptop will not be compatible. During the first week of class, all the necessary applications required for the course will be installed. Additionally, you will need a reliable USB headset with a microphone for audio communication.\n\nFor Kids Computer Science Class:\nChildren can use their existing MAC or Windows PC. However, if you are in the market for a new laptop, we recommend considering the purchase of a MacBook Pro with 16GB of memory.",
    },
    {
      question: "How much can I earn after training? Any estimate?",
      answer:
        "In the United States, salaries for mid senior level Network Engineers positions typically starting range from USD 50 to USD 65 per hour. However, these figures serve as a starting point and are likely to increase with accumulated experience and progression to higher positions within the field. We've observed many students earning over 130K per year within 4 to 5 years, contingent on the extent of their skill and knowledge development post their initial IT job. To verify job availability and potential earnings in your area, you can explore the website indeed.com and search for titles such as 'Network Engineers,' 'Network Security Engineers,' 'Network Architects,' and 'Design Network Engineers.'",
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
          FAQ's
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
          FREQUENTLY ASKED QUESTIONS
        </Typography>
      </div>
      <Box
        sx={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "30px 50px",
        }}
      >
        {faqsArray.map((data: any, index: any) => (
          <Accordion
            sx={{
              border: "2px solid #d6dee4",
              padding: "10px 0px",
              margin: "10px 0px",
              borderRadius: "10px",
              boxShadow: "none",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography
                sx={{
                  fontSize: "17px",
                  fontWeight: "bold",
                  color: "#3a3838",
                }}
              >
                {data.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                sx={{
                  color: "#3a3838",
                }}
              >
                {data.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
        <Stack
          direction={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Typography
            sx={{
              fontSize: "23px",
              fontWeight: "bolder",
              textAlign: "center",
              color: "blue",
              paddingTop: "50px",
            }}
          >
            If you have not found the answer you want to ask
          </Typography>
          <Button
            sx={{
              padding: "10px 20px",
              maxWidth: "150px",
              marginTop: "30px",
            }}
            href="./Contact"
            variant="contained"
          >
            CONTACT US
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default FaqPage;
