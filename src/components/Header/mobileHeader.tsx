import React from "react";
import { Box, Button, Drawer, Stack, Typography } from "@mui/material";
import Image from "next/image";
import logo from "../../../public/logo.jpeg";
import styles from "./styles.module.css";
import CloseSharpIcon from "@mui/icons-material/CloseSharp";
import MenuSharpIcon from "@mui/icons-material/MenuSharp";
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

      <p className={styles.drawerLink}>Home</p>
      <p className={styles.drawerLink}>Home</p>
      <p className={styles.drawerLink}>Home</p>
      <p className={styles.drawerLink}>Home</p>
      <p className={styles.drawerLink}>Home</p>
      <p className={styles.drawerLink}>Home</p>
      <p className={styles.drawerLink}>Home</p>
      <p className={styles.drawerLink}>Home</p>
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
          paddingRight: "25px",
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
    </div>
  );
};

export default MobileHeader;
