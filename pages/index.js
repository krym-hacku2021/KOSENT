/** @format */

import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { Container, Paper } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "../styles/Home.module.css";
import EXAppBar from "./EXAppBar";
import ArrowRightRoundedIcon from "@mui/icons-material/ArrowRightRounded";
import ArrowLeftRoundedIcon from "@mui/icons-material/ArrowLeftRounded";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Home() {
  const [tabValue, setTabValue] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>exparty-sample</title>
        <meta name="description" content="sample for exparty" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <EXAppBar></EXAppBar>

        {/* <Container>
          <Carousel
            autoPlay={true}
            infiniteLoop={true}
            showArrow={true}
            showIndicators={false}
            showStatus={false}
            showThumbs={false}
          >
            <Paper
              elevation={3}
              sx={{
                height: 300,
                backgroundColor: "#FFB8B8",
              }}
            >
              <h2>
                <Baloon></Baloon>
              </h2>
            </Paper>
            <Paper
              elevation={3}
              sx={{
                height: 300,
                backgroundColor: "#B8FFB8",
              }}
            >
              <h2>
                <Baloon></Baloon>
              </h2>
            </Paper>
            <Paper
              elevation={3}
              sx={{
                height: 300,
                backgroundColor: "#B8D7FF",
              }}
            >
              <h2>
                <Baloon></Baloon>
              </h2>
            </Paper>
          </Carousel>
        </Container> */}

        <Box sx={{ borderBottom: 1, borderColor: "divider", width: "100vw" }}>
          <Tabs
            value={tabValue}
            onChange={handleTabChange}
          >
            <Tab label="最新の投稿" {...a11yProps(0)} sx={{ width: "50%" }} />
            <Tab label="人気の投稿" {...a11yProps(1)} sx={{ width: "50%" }} />
          </Tabs>
        </Box>
        <TabPanel value={tabValue} index={0}>
          a
          {/* <Textarea></Textarea>
          <Textarea></Textarea>
          <Textarea></Textarea>
          <Textarea></Textarea>
          <Textarea></Textarea>
          <Textarea></Textarea>
          <Textarea></Textarea> */}
        </TabPanel>
        <TabPanel value={tabValue} index={1}>
          b
          {/* <Textarea></Textarea>
          <Textarea></Textarea>
          <Textarea></Textarea>
          <Textarea></Textarea>
          <Textarea></Textarea>
          <Textarea></Textarea>
          <Textarea></Textarea> */}
        </TabPanel>
      </main>
    </div>
  );
}

