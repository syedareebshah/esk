import React from "react";
import { Box, Button, Drawer, Stack, Typography } from "@mui/material";
import Image from "next/image";
import logo from "../../../public/logo.jpeg";
import styles from "./styles.module.css";
import CloseSharpIcon from "@mui/icons-material/CloseSharp";
import MenuSharpIcon from "@mui/icons-material/MenuSharp";
import Link from "next/link";

const MobileHeader = () => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box
      sx={{
        width: 250,
        padding: "30px",
        backgroundColor: "black",
        height: "100%",
      }}
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      <Stack
        sx={{
          width: "100%",
          paddingBottom: "30px",
        }}
        direction={"row"}
        justifyContent={"space-between"}
      >
        <Typography></Typography>
        <CloseSharpIcon
          sx={{
            fontSize: "24px",
            color: "white",
          }}
          onClick={() => setOpen(false)}
        />
      </Stack>
      <Link
        style={{
          textDecoration: "none",
        }}
        href={"/"}
      >
        <p className={styles.drawerLink}>Home</p>
      </Link>
      <Link
        style={{
          textDecoration: "none",
        }}
        href={"/About"}
      >
        <p className={styles.drawerLink}>About</p>
      </Link>
      <Link
        style={{
          textDecoration: "none",
        }}
        href={"/Courses"}
      >
        <p className={styles.drawerLink}>Course</p>
      </Link>
      <Link
        style={{
          textDecoration: "none",
        }}
        href={"/Testimonials"}
      >
        <p className={styles.drawerLink}>Testimonials</p>
      </Link>
      <Link
        style={{
          textDecoration: "none",
        }}
        href={"/Faq"}
      >
        <p className={styles.drawerLink}>FAQ</p>
      </Link>
      <Link
        style={{
          textDecoration: "none",
        }}
        href={"/Founder"}
      >
        <p className={styles.drawerLink}>Founder</p>
      </Link>
      <Link
        style={{
          textDecoration: "none",
        }}
        href={"/WhyUs"}
      >
        <p className={styles.drawerLink}>Why Us</p>
      </Link>
      <Link
        style={{
          textDecoration: "none",
        }}
        href={"/Contact"}
      >
        <p className={styles.drawerLink}>Contact</p>
      </Link>
    </Box>
  );
  return (
    <div className={styles.main}>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        sx={{
          maxWidth: "1135px",
          margin: "0px auto",
        }}
      >
        <Image
          alt="Mountains"
          src={logo}
          style={{
            maxWidth: "185px",
            width: "100%",
            height: "auto",
          }}
        />

        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Button
            sx={{
              backgroundColor: "green",
              boxShadow: "none",
              textWrap: "nowrap",
            }}
            size="small"
            href={"/Apply"}
            variant="contained"
          >
            Apply Now
          </Button>
          <MenuSharpIcon
            sx={{
              fontSize: "34px",
            }}
            onClick={toggleDrawer(true)}
          />
          <Drawer open={open} onClose={toggleDrawer(false)}>
            {DrawerList}
          </Drawer>
        </Stack>
      </Stack>
    </div>
  );
};

export default MobileHeader;
