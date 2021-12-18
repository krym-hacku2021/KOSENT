/** @format */

import React, { useState, useContext, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Router from "next/router";
import { Container, Paper, Tabs, Tab, Typography, Box } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import EXAppBar from "../components/EXAppBar";

import styles from "../styles/Home.module.css";

import { UserData } from "../hooks/UserData";

import { TabPanel, a11yProps } from "../components/TabPanel";
import Search_Results from "./search_Results";

import {
  getPosts,
  getPostsCount,
  getPostsRange,
  getUsers,
} from "../lib/db_post";

export default function HomeSignedIn() {
  const [tabValue, setTabValue] = useState(0);
  const { userInfo } = useContext(UserData);
  const [postsData, setPostsData] = useState({
    //count: 0,
    recent: [],
    //begin: 0,
  });

  useEffect(async () => {
    const recent = await getPosts();

    console.log(`recent=${JSON.stringify(recent)}`);

    setPostsData({
      recent: recent,
      //     // begin: postsData.begin,
      //     // count: count
    });
  }, []);

  //   getPosts().then((recent) => {
  //     console.log(`recent=${JSON.stringify(recent)}`);
  //     setPostsData({
  //       recent: recent,
  //       //     // begin: postsData.begin,
  //       //     // count: count
  //     });
  //   });

  return (
    <div className={styles.container}>
      <Head>
        <title>KOSENT</title>
        <meta name="description" content="KOSENT" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <EXAppBar></EXAppBar>
        <p>{userInfo.nickname}さん、こんにちは</p>
        <Container maxWidth="sm">
          <Box sx={{ borderBottom: 1, borderColor: "divider", width: "100%" }}>
            <Tabs
              value={tabValue}
              sx={{ width: "100%" }}
              onChange={(event, newValue) => {
                setTabValue(newValue);
              }}
            >
              <Tab label="最新の投稿" {...a11yProps(0)} sx={{ width: "50%" }} />
              <Tab label="人気の投稿" {...a11yProps(1)} sx={{ width: "50%" }} />
            </Tabs>
          </Box>
          <TabPanel value={tabValue} index={0}>
            {postsData.recent.map((item) => (
              <Search_Results key={item.post_id} item={item}></Search_Results>
            ))}
          </TabPanel>
          <TabPanel value={tabValue} index={1}>
            {postsData.recent.map((item) => (
              <Search_Results key={item.post_id} item={item} noImage={true}></Search_Results>
            ))}
          </TabPanel>
        </Container>
      </main>
    </div>
  );
}
